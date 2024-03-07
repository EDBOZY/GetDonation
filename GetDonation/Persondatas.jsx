import React from 'react';
// import hospitalData from './data2';
// import './check.css'
import a from './user.png'
// Assuming data.js is in the same directory

function Box({hospitalData,locationn,bloodTypee}) {
    const filteredData = hospitalData.filter((item) => {
        // Filter based on location if it's selected
        const locationFilter = !locationn || item.location === locationn;
    
        // Filter based on blood type if it's selected
        const bloodTypeFilter = !bloodTypee || item.bloodGroup === bloodTypee;
    
        // Return true if the blood type matches, regardless of location
        return bloodTypeFilter && (locationFilter || locationn === "");
      });
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
              <div className='flex flex-col gap-4'>
                <h2 className='text-xl'> Blood Type: {item.bloodGroup}</h2>
                <h2 className='text-xl'> Phone Number: {item.phoneNumber}</h2>
                <h2 className='text-xl'> Location: {item.location}</h2>
              </div>
              <div className='flex items-center justify-center'>
                <button className='p-2 bg-red-600 rounded-xl outline-none text-white w-1/2 text-xl cursor-pointer transform hover:scale-105'>Health Records</button>
              </div>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Box;