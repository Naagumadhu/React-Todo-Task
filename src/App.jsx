import React, { useState } from 'react'
import Header from './Component/Header'

function App() {

  let [data, setData] = useState([
    {
      id: 1,
      title: "Office Task",
      description: "This is the description of my first task",
      status: "Completed"
    },
    {
      id: 2,
      title: "Office Task 2",
      description: "This is the description of my first task",
      status: "Completed"
    },
    {
      id: 3,
      title: "Office Task 3",
      description: "This is the description of my first task",
      status: "Completed"
    },
    {
      id: 4,
      title: "Office Task 4",
      description: "This is the description of my first task",
      status: "Completed"
    }
  ])
  return <>
      <div>
        <Header data={data} setData={setData}/>
      </div>
  </>
}

export default App
