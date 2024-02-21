import React, { useEffect, useState } from 'react'
import FatchCard from '../phonedata/FatchCard';

const Watch = () => {
    const [iphone, setphone] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 6;

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/phones?search=watch')
        .then(res => res.json())
        .then(data => setphone(data.data))
    },[])
    // console.log(iphone)
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = iphone.slice (indexOfFirstItem, indexOfLastItem)

    const pagination = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
      <h1 className="text-center font-extrabold max-auto text-[#5c1d65] text-4xl mt-4 mb-5">
        ULTRA WATCH
      </h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
        currentItems.map(iphone => <FatchCard key={iphone.id} iphone={iphone} />)
      }
    </div>
    <div className="pagination">
      {
          Array.from({length: Math.ceil(iphone.length / itemPerPage) }, (_, index) => (
              <button className='btn bg-black text-white' onClick={() => pagination(index + 1)}>
               {index + 1}
              </button>
          ))
      }
    </div>
  </div>
  )
}

export default Watch
