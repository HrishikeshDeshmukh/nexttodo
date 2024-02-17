"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)

  }

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between '>
          <div className='flex items-center justify-between  w-2/3 mb-5'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
            <button
             onClick={() => {deleteHandler(i)}}
             className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
          </div >
        </li>
      )
    })
  }


  return (
    <>
      <h1 className='text-4xl text-center bg-gray-600 py-3 font-bold'  >Rishi Rich's ToDo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter The Task'
          className='text-2xl border-zinc-800
         border-2 m-8 px-4 py-2'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />


        <input type='text' placeholder='Enter Description'
          className='text-2xl border-zinc-800 
         border-2 m-8 px-4 py-2'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'> Add Task</button>
      </form>
      <hr />

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>


    </>
  )
}


export default page
