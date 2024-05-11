import './App.css';
import { NavBar } from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { TaskList } from './components/TaskList';
import { useEffect, useState } from 'react';
import { getTasks } from './services/TaskController';
import { Loader } from "./utils/Loader";

function App() {
  const [taskList, settaskList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getTasks()
      .then((response) => {
        settaskList(response.data);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [])

  return (
    <>
      <NavBar />
      {isLoading && <Loader />}
      {!isLoading && <TaskList tasks={taskList} />}
    </>
  );
}

export default App;
