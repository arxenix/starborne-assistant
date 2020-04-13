import {AnyAction, applyMiddleware, createStore} from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {createLogger} from "redux-logger";
import rootReducer, {RootState} from "./reducers/index"


/*
const loggerMiddleware = createLogger({
    stateTransformer(state: RootState): any {
        const newState = {
            ...state,
            gamesList: {
                Games: {
                }
            }
        };

        for (const gameId in state.gamesList.Games) {
            // @ts-ignore
            newState.gamesList.Games[gameId] = {
                ...state.gamesList.Games[gameId],
                HubConnection: state.gamesList.Games[gameId].HubConnection ? "Initialized HubConnection" : undefined
            }
        }
        return newState;
    }
});
*/

const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__
});

type DispatchFunctionType = ThunkDispatch<RootState, {}, AnyAction>

const middleware = applyMiddleware<DispatchFunctionType, RootState>(
    loggerMiddleware,
    thunkMiddleware
);
const store = createStore(rootReducer, middleware);


const persistor = persistStore(store);
export { store, persistor };