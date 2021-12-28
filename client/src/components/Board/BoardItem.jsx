import { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../Context/SocketContext";
import "./index.css";
function BoardItem({ nota }) {
  const [fade, setFade] = useState(false);
  const { socket } = useContext(Context);

  const deletenote = (id) => {
    setTimeout(() => {
      socket.emit("client:deletenote", id);
    }, 300);
    setFade(true);
  };
  const toUpdate = (id) => {
    socket.emit("client:toUpdate", id);
  };
  const toUpdateDone = (id) => {
    socket.emit("client:toUpdateDone", id);
  };

  return (
    <Fragment>
      <div
        className={`card card-body rounded-0 mb-2 animate__animated ${
          fade ? "animate__bounceOut" : "animate__bounceIn"
        } ${nota.completed}`}
        id={nota._id}
      >
        <div className="d-flex justify-content-between">
          <h1 className="h3 card-title">{nota.title}</h1>
          <div>
            <button
              className="btn btn-danger delete"
              onClick={() => {
                deletenote(nota._id);
              }}
            >
              Eliminar
            </button>
            <button
              className="btn btn-secondary update"
              onClick={() => {
                toUpdate(nota._id);
              }}
            >
              Actualizar Tarea
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p>{nota.description}</p>
          <button
            className="btn btn-secondary done"
            onClick={() => {
              toUpdateDone(nota._id);
            }}
          >
            Hecho
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default BoardItem;
