import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {projects} from '../data /projects'


// export const projects = [
//   {
//     id: 1,
//     name: "mock1",
//     description: "mock1 description",
//   },
//   {
//     id: 2,
//     name: "mock2",
//     description: "mock2 description",
//   },
// ];


const SingleProjectPage = () => {
    const {projectId} = useParams()
  return (
    <div>
      <h1>Single project page</h1>
        {projectId}
    </div>
  )
}

export default SingleProjectPage


