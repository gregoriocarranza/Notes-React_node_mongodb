import React, { useContext, useEffect, useState } from "react";

import socketIOClient from "socket.io-client";

const Context = React.createContext();

export function SocketsContext({ children }) {
  const ENDPOINT = "http://localhost:3030/"; /*Cambiar por el ENDPOINT de tu backend(por defecto esta app esta seteada en el puerto 3030) */
  const socket = socketIOClient(ENDPOINT, { transports: ["websocket"] });

  return <Context.Provider value={{ socket }}>{children}</Context.Provider>;
}
export default Context;

// export function useSocket() {
//   return useContext(Context).socket;
// }
