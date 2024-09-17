import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(`${process.env.REACT_APP_SERVER_URL}`, {
      query: { id },
    });
    setSocket(newSocket);
    console.log("Socket Obj from SocketProvider : ", socket);
    return () => newSocket.close();
  }, [id]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
