import { getCookie } from "../../utils/cookie"
import type { Middleware, MiddlewareAPI } from 'redux'
import type { AppDispatch, RootState } from './index'

import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
    WS_CONNECTION_CLOSE,
} from '../actions/ws';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action) => {
            const { dispatch } = store;
            const { type, payload } = action;
            const accessToken: string | undefined = getCookie('accessToken');
            const token = accessToken && accessToken.split(" ")[1];
            console.log(token, token)

            if (type === WS_CONNECTION_START) {
                socket = new WebSocket(`${wsUrl}/all`);
                // socket = new WebSocket(`${wsUrl}?token=${token}`);
            }
            if (socket) {
                socket.onopen = (event) => {
                    console.log(event, 'onOpen event')
                    dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
                };
                socket.onerror = (event) => {
                    console.log(event, 'onError event')
                    dispatch({ type: WS_CONNECTION_ERROR, payload: event });
                };
                socket.onmessage = (event) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    console.log(parsedData, 'data from ws')
                    const { success, ...restParsedData } = parsedData;
                    dispatch({ type: WS_GET_MESSAGE, payload: restParsedData });
                };
                socket.onclose = (event) => {
                    dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
                };

                if (type === WS_SEND_MESSAGE) {
                    const message = payload;
                    socket.send(JSON.stringify(message));
                }

                if (type === WS_CONNECTION_CLOSE) {
                    socket.close();
                }
            }
            next(action);
        };
    };
};

