import logo from './logo.svg';
import './App.css';
import { Fragment, useContext, useEffect } from 'react';
import Context from "./Context/SocketContext"

function App() {
  const { socket } = useContext(Context)

  useEffect(() => {
    socket.on(`server:catchConect`, () => { console.log("Conectado correctamente con sockets") })
    // socket.emit("ping")

  }, [])
  return (
    <Fragment>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-4 my-auto">
            <form action="" id="noteForm" className="card card-body rounded-0">
              <h1 className="h3 mb-5">Agregar una Nota</h1>
              <input type="text" name="title" id="title" placeholder="Agrega un titulo"
                className="form-control rounded-0 mb-3" autoFocus />
              <textarea name="description" id="description" cols="30" rows="2" className="form-control rounded-0 mb-3"
                placeholder="Agregar descripcion"></textarea>
              <button className="btn btn-dark rounded-0">Enviar</button>
            </form>
          </div>
          <div className="col-md-8 py-3">
            <h3>Notas</h3>
            <div id="notes"></div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
