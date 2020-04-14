import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import {store} from '../redux/store'
import {login} from "../redux/actions/AuthActions";
import {
    fetchGamesList,
    joinEstablishAndEnterGame,
    fetchNotifications,
} from "../redux/actions/GamesListActions";
import {PersistentNotification, PersistentNotificationCategory} from "../models/notifications";
import {
    cleanNotificationCategory,
    cleanNotificationType,
    notifAttrs,
    sortNotificationsByMostRecent
} from "./notifications";
import {Notifications} from "expo";

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
                        await store.dispatch(joinEstablishAndEnterGame(game.Id));
                        await store.dispatch(fetchNotifications(game.Id));
                        const notifications: PersistentNotification[] = await store.getState().gamesList.Games[game.Id].Notifications!!;

                        if (notifications.length >= 5) {
                            await Notifications.presentLocalNotificationAsync({
                                title: `${game.Name} Notifications`,
                                body: `You have ${notifications.length} unread notifications!`,
                            });
                        }
                        else {
                            sortNotificationsByMostRecent(notifications);
                            for (const notification of notifications) {
                                const notificationCategory = cleanNotificationCategory(notification.category);
                                const notificationType = cleanNotificationType(notification.$type);

                                const attrs = notifAttrs(notification);
                                let notifBody = attrs.map(a => `${a[0]}: ${a[1]}`).join("\n");
                                await Notifications.presentLocalNotificationAsync({
                                    title: `${game.Name} - ${notificationType}`,
                                    body: notifBody,
                                });
                            }
                        }
                    }
                }
            }
            else {
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
        await BackgroundFetch.setMinimumIntervalAsync(15*60)
        await BackgroundFetch.registerTaskAsync(FETCH_TASK, {
            minimumInterval: 15*60,
            stopOnTerminate: false,
            startOnBoot: true
        })
    }
}
