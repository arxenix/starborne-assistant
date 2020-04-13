import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import {store} from '../redux/store'
import {login} from "../redux/actions/AuthActions";
import {
    enterGame,
    establishGameConnection,
    fetchGamesList,
    fetchNotifications,
    joinGameServer
} from "../redux/actions/GamesListActions";

const TASK_NAME = "StarborneFetcher";
TaskManager.defineTask(TASK_NAME, async () => {
    try {
        if (store.getState().auth.user) {
            const {user, password} = store.getState().auth;
            await store.dispatch(login(user!!, password!!));
            await store.dispatch(fetchGamesList());

            for (const game of store.getState().gamesList.Games) {
                if (game.HasRequestingPlayer) {
                    await store.dispatch(joinGameServer(game));
                    const hubConnection = await store.dispatch(establishGameConnection(game));
                    await store.dispatch(enterGame(game));
                    await store.dispatch(fetchNotifications(game));
                }
            }

        }

        //return receivedNewData ? BackgroundFetch.Result.NewData : BackgroundFetch.Result.NoData;
        return BackgroundFetch.Result.NewData;
    } catch (error) {
        return BackgroundFetch.Result.Failed;
    }
});
