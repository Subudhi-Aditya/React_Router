import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export default function Jobs() {
    const jobsData = useLoaderData();
  return (
    <div className='jobs'>
      {jobsData.map((job)=>{
        return <Link to={job.id.toString()} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
        </Link>
      })}
    </div>
  )
}
export const jobsLoader = async () =>{
    const res = await fetch("http://localhost:5001/jobs");
    return res.json();
}



// command to create a localhost server for the above data.json
// npx json-server --watch fileName --port 5000
