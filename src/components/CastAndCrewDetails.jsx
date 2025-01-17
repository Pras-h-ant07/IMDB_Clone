import React from 'react'

function CastAndCrewDetails({imageURL , name , characterNameOrDepartmentName}) { // passing properties as an object
  return (
  <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[20rem] bg-cover bg-fit">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border bg-cover rounded-xl h-[20rem]">
    <img style={{width:'100%', height:"100%"}}
      src={imageURL?`https://image.tmdb.org/t/p/original/${imageURL}`:`https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png`}
      alt="profile-picture"
    />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
    <p className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {characterNameOrDepartmentName}
    </p>
  </div>
 </div>


  )
}

export default CastAndCrewDetails