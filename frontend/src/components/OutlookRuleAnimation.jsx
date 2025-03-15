// import { useState, useEffect } from "react";

// const OutlookRuleAnimation = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => (prev < 100 ? prev + 1 : 100));
//     }, 600);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full max-w-md p-4 mx-auto mt-10 border rounded-lg shadow-lg bg-gray-100">
//       <h2 className="text-lg font-semibold mb-2">Microsoft Office Outlook</h2>
//       <div className="flex items-center justify-center space-x-4 my-4">
//         <span className="text-yellow-500 text-3xl">📂</span>
//         <span className="text-blue-400 text-3xl">✉️</span>
//         <span className="text-yellow-500 text-3xl">📁</span>
//       </div>
//       <p className="text-gray-700 text-sm">Running rule OReilly Media</p>
//       <p className="text-gray-600 text-sm mb-2">In Social</p>
//       <div className="w-full bg-gray-300 h-4 rounded overflow-hidden">
//         <div
//           className="bg-green-500 h-full transition-all duration-500"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//       <p className="text-gray-700 text-sm mt-2">
//         {60 - Math.floor(progress / 1.67)} Seconds Remaining
//       </p>
//       <button className="mt-4 w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg">
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default OutlookRuleAnimation;


import React, { useState } from 'react'

const OutlookRuleAnimation = () => {
  const [post, setPost]=useState([]);
  // console.log(post)
  const [loading, setLoading]=useState(false);
  const [err, setErr]=useState(false);


 
     // https://jsonplaceholder.typicode.com/posts?_limit=10

     const fetchAndUpdateData= async()=>{
        //  console.log("fetch and update data called?")
        // get data 
        // update my ui with that data 

        try {
          setLoading(true)
          // make fetch request and get the data
            const res= await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            // console.log(res)
            const jsonformdata= await res.json()
            // console.log(jsonformdata)
          // update my local state "post" with that data
          setPost(jsonformdata)
          setLoading(false)
          
        } catch (error) {
          console.log(error)
          setErr(true)
          
        }
     }
   
     if(loading){
      return <h1>Loading.....</h1>
     }

     if(err){
      return <h1>Internal error.....</h1>
     }

  return (
    <div className='border border-red-600 flex flex-col justify-centers '>
       <h1>Posts</h1>
       <button className='bg-yellow-500 p-3 w-fit rounded-3xl' onClick={fetchAndUpdateData}>Click to get post result.</button>
       <hr />
       {
        post.map((postItem, index)=> <div className='bg-red-100 p-4 border border-blue-500' key={index}>
               <h1 className='bg-blue-400'>{postItem.title}</h1>    
               <p className='bg-lime-300'>{postItem.body}</p>
        </div>)
       }
    </div>
  )
}

export default OutlookRuleAnimation;

