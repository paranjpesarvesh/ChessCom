import { useEffect, useState } from "react";

const WS_URL = "ws://localhost:8080";

export const useSocket = () => {
    const [socket, setsocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(WS_URL);
        ws.onopen = () => {
            setsocket(ws);
        }

        ws.onclose = () => {
            setsocket(ws);
        }

        return () => {
            if (ws.readyState === 1) { // <-- This is important
                ws.close();
            }
        }
    }, [])

    return socket;
}