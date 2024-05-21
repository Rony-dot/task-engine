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
    data.id = taskList.length + 1
    console.log("executing => ADD");
    console.table(data);
    settaskList([...taskList, { ...data }])
  }

  const handleDelete = (id) => {
    settaskList(taskList.filter((task) => task.id !== id))
  }

  const handleEdit = (data) => {
    console.log("executing => EDIT");
    console.table(data)
    // option 1
    // const newTaskList = taskList.filter((task) => task.id !== data.id)
    // settaskList([...newTaskList, { ...data }])
    // option 2
    settaskList(taskList.map((task) => task.id === data.id ? { ...task, ...data } : task))
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
      {!isLoading && <TaskList tasks={taskList} handleDelete={handleDelete} handleEdit={handleEdit} />}
    </>
  );
}

export default App;
