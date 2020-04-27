import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import {store} from '../redux/store'
import {login} from "../redux/actions/AuthActions";
import {fetchGamesList, fetchNotifications, joinEstablishAndEnterGame,} from "../redux/actions/GamesListActions";
import {PersistentNotification} from "../models/notifications";
import {
    batchSolarFlareNotifications,
    cleanNotificationType,
    notifAttrs,
    notifIconColor,
    sortNotificationsByMostRecent
} from "./notifications";
import {Notifications} from "expo";
import {PersistentNotificationType} from "../models/PersistentNotificationType";
import {Actions} from "../redux/actions/actions";
import {HexIndex} from "../models/models";

const FETCH_TASK = "StarborneFetcher";

export default async function setupBackgroundTask() {
    TaskManager.defineTask(FETCH_TASK, async () => {
        try {
            if (store.getState().auth.user) {
                const {user, password} = store.getState().auth;
                await store.dispatch(login(user!!, password!!));
                await store.dispatch(fetchGamesList());


                for (const game of Object.values(store.getState().gamesList.Games)) {
                    if (game.HasRequestingPlayer) {
                        if (!game.Settings.notificationsEnabled)
                            break;

                        await store.dispatch(joinEstablishAndEnterGame(game.Id));
                        await store.dispatch(fetchNotifications(game.Id));
                        const notifications: PersistentNotification[] = await store.getState().gamesList.Games[game.Id].Notifications!!;

                        const lastFetchedDateStr = store.getState().gamesList.lastFetchedDate;
                        if (lastFetchedDateStr) {
                            const lastFetchedDate = new Date(lastFetchedDateStr);

                            const filteredNotifications = notifications.filter(n => new Date(n.dateCreated) > lastFetchedDate);
                            const fixedNotifications = batchSolarFlareNotifications(filteredNotifications);

                            sortNotificationsByMostRecent(fixedNotifications);
                            for (const notification of fixedNotifications) {
                                if (game.Settings.disabledNotificationTypes.includes(notification.$type))
                                    continue;

                                //const notificationCategory = cleanNotificationCategory(notification.category);
                                const notificationType = cleanNotificationType(notification.$type);
                                const [icon, color] = notifIconColor(notification);

                                const attrs = notifAttrs(notification);
                                let notifBody = attrs.map(a => `${a[0]}: ${a[1]}`).join(",\n");
                                if (notification.$type === PersistentNotificationType.SolarFlaresDiscoveredNotification) {
                                    notifBody = notification.coordinates.map((h: HexIndex) => `[${h.Q}, ${h.R}]`).join(",\n");
                                }
                                await Notifications.presentLocalNotificationAsync({
                                    title: `${game.Name} - ${notificationType}`,
                                    body: notifBody,
                                    android: {
                                        //icon: "",
                                        color: color
                                    }
                                });
                            }
                        }
                        store.dispatch({type: Actions.UPDATE_LAST_FETCH_DATE});
                    }
                }
            } else {
                return BackgroundFetch.Result.Failed;
            }
            //return receivedNewData ? BackgroundFetch.Result.NewData : BackgroundFetch.Result.NoData;
            return BackgroundFetch.Result.NewData;
        } catch (error) {
            return BackgroundFetch.Result.Failed;
        }
    });
    const status = await BackgroundFetch.getStatusAsync();
    if (status === BackgroundFetch.Status.Available) {
        await BackgroundFetch.setMinimumIntervalAsync(15 * 60);
        await BackgroundFetch.registerTaskAsync(FETCH_TASK, {
            minimumInterval: 15 * 60,
            stopOnTerminate: false,
            startOnBoot: true
        });
    }
}
