import React from 'react';
import a from './hospital.png'
// Assuming data.js is in the same directory
function BoxGrid({hospitalData, locationn,bloodTypee}) {
  const filteredData = hospitalData.filter(
    (item) =>
      (!locationn || item.location === locationn)
  );
  const chunkArray = (filteredData, chunkSize) => {
    const result = [];
    for (let i = 0; i < filteredData.length; i += chunkSize) {
      result.push(filteredData.slice(i, i + chunkSize));
    }
    return result;
  };
  const chunkedData = chunkArray(filteredData, 3);
  return (
    <div className='dd'>
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between mb-3">
          {row.map((item) => (
            <div key={item.id}  className="  m-4 h-50 w-11/12 border-2 border-black gap-5 p-10 rounded-3xl flex flex-col justify-center  cursor-pointer transform hover:scale-105">
              <div className="flex flex-row gap-5 items-center">
                <img src={a} className='h-20 w-20' />
                <h1 className='text-2xl font-semibold'>{item.name}</h1>
              </div>
              
              <h2 className='text-xl'> Phone Number: {item.phoneNumber}</h2>
              <h2 className='text-xl'> Location: {item.location}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoxGrid;