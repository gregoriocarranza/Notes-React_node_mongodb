import React, { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../Context/SocketContext";

function FormTasks() {
  const [text, setText] = useState({});
  const [noteIDS, setNoteIDS] = useState("");
  const formRef = React.useRef();
  const { socket } = useContext(Context);

  socket.on(`server:noteToUpdate`, (data) => {
    // console.log(data);

    const title = document.querySelector("#title");
    const description = document.querySelector("#description");

    title.value = data.title;
    description.value = data.description;

    setNoteIDS(data._id);
  });

  const CargarTask = (e) => {
    e.preventDefault();
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");

    if (noteIDS) {
      // console.log(noteIDS);
      socket.emit("client:updatenote", {
        id: noteIDS,
        title: title.value,
        description: description.value,
      });
      setNoteIDS("");
    } else {
      // console.log("no");
      socket.emit(`client:newNote`, {
        title: text.title,
        description: text.description,
      });
    }

    title.focus();

    e.target.reset();
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setText({ ...text, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <form
        ref={formRef}
        action=""
        id="noteForm"
        className="card card-body rounded-0"
        onSubmit={CargarTask}
      >
        <h1 className="h3 mb-5">Agregar una Nota</h1>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Agrega un titulo"
          className="form-control rounded-0 mb-3"
          autoFocus
          onChange={onValueChange}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="2"
          className="form-control rounded-0 mb-3"
          placeholder="Agregar descripcion"
          onChange={onValueChange}
        ></textarea>
        <button className="btn btn-dark rounded-0">Enviar</button>
      </form>
    </Fragment>
  );
}

export default FormTasks;
