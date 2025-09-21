import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

export default function JobDetails() {
    const jobData = useLoaderData();

  return (
    <div>
        <p><b>Job Title:</b>{jobData.title}</p>
    </div>
  )
}

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:5001/jobs/"+id);
    if(!res.ok){
        throw Error("Could not found the job details");
    }
    return res.json();
}