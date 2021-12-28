import { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../Context/SocketContext";
import BoardItem from "./BoardItem";

function BoardList({ list }) {
  const { socket } = useContext(Context);

  return (
    <div id="notes">
      {list.map((u) => (
        <BoardItem key={u._id} nota={u} />
      ))}
    </div>
  );
}

export default BoardList;
