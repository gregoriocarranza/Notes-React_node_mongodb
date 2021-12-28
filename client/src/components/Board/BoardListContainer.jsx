import { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../Context/SocketContext";
import BoardList from "./BoardList";

function BoardListContainer() {
  const [list, setList] = useState([]);
  const { socket } = useContext(Context);

  socket.on(`server:loadNotes`, (doc) => {
    setList(doc);
  });

  return (
    <Fragment>
      <div className="col-md-8 py-3">
        <h3>Notas</h3>
        <BoardList list={list} />
      </div>
    </Fragment>
  );
}

export default BoardListContainer;
