import logo from './logo.svg';
import './App.css';
import { Fragment, useContext, useEffect } from 'react';
import Context from "./Context/SocketContext"
import FormTasks from "./components/Board/FormTasks"
import BoardListContainer from './components/Board/BoardListContainer';

function App() {
  const { socket } = useContext(Context)

  useEffect(() => {
    socket.on(`server:catchConect`, (id) => { console.log(`Conectado correctamente con sockets con el id: ${id}`) })
    // socket.emit("ping")

  }, [])
  return (
    <Fragment>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-4 my-auto">
            <FormTasks />
          </div>
          <BoardListContainer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
