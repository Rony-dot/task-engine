import './App.css';
import { NavBar } from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { TaskList } from './components/TaskList';
import { useEffect, useState } from 'react';
import { getTasks } from './services/TaskController';
import { Loader } from "./utils/Loader";
import { AddTaskBtn } from './components/AddTaskBtn';


function App() {
  const [taskList, settaskList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleAddTask = (data) => {
    console.log("before handleAddTask: " + data.title);
    settaskList([...taskList, { ...data }])
    console.log("after handleAddTask: " + data.title);
  }

  const handleDelete = () => {
    console.log("excuting delete: ")
    // settaskList(taskList.filter((task) => task.title != data.title))
  }

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
      {!isLoading && <AddTaskBtn handleAddTask={handleAddTask} />}
      {!isLoading && <TaskList tasks={taskList} handleDelete={handleDelete} />}
    </>
  );
}

export default App;
