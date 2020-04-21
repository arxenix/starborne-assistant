import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import {store} from '../redux/store'
import {login} from "../redux/actions/AuthActions";
import {fetchGamesList, fetchNotifications, joinEstablishAndEnterGame,} from "../redux/actions/GamesListActions";
import {PersistentNotification} from "../models/notifications";
import {
    cleanNotificationCategory,
    cleanNotificationType,
    notifAttrs,
    notifIconColor,
    separateSolarFlareNotifications,
    sortNotificationsByMostRecent
} from "./notifications";
import {Notifications} from "expo";
import {UPDATE_LAST_FETCH_DATE} from "../redux/actions/actions";
import {Colors} from "react-native-paper";
import {GameSettings} from "../redux/reducers/GamesListReducer";
import {PersistentNotificationType} from "../models/PersistentNotificationType";

const FETCH_TASK = "StarborneFetcher";

export default async function setupBackgroundTask() {
    TaskManager.defineTask(FETCH_TASK, async () => {
        try {
            if (store.getState().auth.user) {
                const {user, password} = store.getState().auth;
                await store.dispatch(login(user!!, password!!));
                await store.dispatch(fetchGamesList());

                const GamesSettings = store.getState().gamesList.GamesSettings;

                for (const game of Object.values(store.getState().gamesList.Games)) {
                    if (game.HasRequestingPlayer) {
                        const GameSettings = GamesSettings[game.Id] as GameSettings;
                        if (!GameSettings.notificationsEnabled)
                            break;

                        await store.dispatch(joinEstablishAndEnterGame(game.Id));
                        await store.dispatch(fetchNotifications(game.Id));
                        const notifications: PersistentNotification[] = await store.getState().gamesList.Games[game.Id].Notifications!!;

                        const lastFetchedDateStr = store.getState().gamesList.lastFetchedDate;
                        if (lastFetchedDateStr) {
                            const lastFetchedDate = new Date(lastFetchedDateStr);

                            const filteredNotifications = notifications.filter(n => new Date(n.dateCreated) > lastFetchedDate);
                            const [newNotifications, solarFlareNotifications] = separateSolarFlareNotifications(filteredNotifications);

                            const solarFlareBody = solarFlareNotifications.map((n: any) => `[${n.position.q}, ${n.position.r}]`).join(",\n");
                            if (solarFlareNotifications && solarFlareNotifications.length > 0 &&
                                !GameSettings.disabledNotificationTypes.includes(PersistentNotificationType.SolarFlareDiscoveredNotification)) {

                                await Notifications.presentLocalNotificationAsync({
                                    title: `${game.Name} - ${solarFlareNotifications.length} Solar Flare${solarFlareNotifications.length > 0 ? "s" : ""} Discovered`,
                                    body: solarFlareBody,
                                    android: {
                                        icon: "star",
                                        color: Colors.yellow500,
                                    }
                                });
                            }

                            if (newNotifications.length >= 5) {
                                await Notifications.presentLocalNotificationAsync({
                                    title: `${game.Name} Notifications`,
                                    body: `You have ${newNotifications.length} new notifications!`,
                                });
                            } else {
                                sortNotificationsByMostRecent(newNotifications);
                                for (const notification of newNotifications) {
                                    if (GameSettings.disabledNotificationTypes.includes(notification.$type))
                                        continue;

                                    const notificationCategory = cleanNotificationCategory(notification.category);
                                    const notificationType = cleanNotificationType(notification.$type);
                                    const [icon, color] = notifIconColor(notification);

                                    const attrs = notifAttrs(notification);
                                    let notifBody = attrs.map(a => `${a[0]}: ${a[1]}`).join(",\n");
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
                        }
                        store.dispatch({type: UPDATE_LAST_FETCH_DATE});
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
