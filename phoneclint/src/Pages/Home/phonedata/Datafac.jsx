import React, { useEffect, useState } from 'react';
import FatchCard from './FatchCard';

const Datafac = () => {
  const [ipone, setiphone] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(res => res.json())
      .then(data => setiphone(data.data))
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ipone.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className='text-center max-auto text-5xl'>This is category section</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          currentItems.map(iphone => <FatchCard key={iphone.id} iphone={iphone} />)
        }
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(ipone.length / itemsPerPage) }, (_, index) => (
          <button className='btn bg-black text-white' key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Datafac;
