import { useState } from "react"
import Header from "./pages/Header"
import Tasks from "./pages/Tasks"
import AddTask from "./pages/AddTask"

// import Home from "./pages/Home"

const App = () => {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'Token1 : 0x790DffD2371dDDC693',
      day: 'jun 14th at 01:55pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Token2 : 0x790DffD2371dDDC693',
      day: 'jul 15th at 02:55pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Token3 : 0x790DffD2371dDDC693',
      day: 'Aug 16th at 03:55pm',
      reminder: false,
    },
])

// add task
const addTask = (task) => {
  console.log(task)
}

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id  ? { ...task, reminder: 
    !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?(
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/>
      ): (
        'No Member'
      )}
    </div>
  )
}

export default App
