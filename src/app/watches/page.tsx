import React from 'react';

  const Watches = () => {
    const watchData =[
      {id:1, name:'Stevenmax Voyager', price:2000, description:'Sporty and Stylish', image:'/1w.avif'},
      {id:2, name:'Stevenmax Apex', price:1800, description:'Sporty design', image:'/6wb.jpeg'},
      {id:3, name:'Stevenmax Pulse', price:7000, description:'Affordable and reliable', image:'/3wb.jpeg'},
      {id:4, name:'Stevenmax Fusion', price:9000, description:'Bold and rugged', image:'/4w.jpg'},
      {id:5, name:'Stevenmax Horizon', price:2500, description:'Elegant timepiece', image:'/wbg.avif'},
      {id:6, name:'Stevenmax Catalyst', price:5000, description:'Luxury Watch', image:'/5wb.jpeg'},
    ];
    return (
        <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
          {watchData.map(watch => (
            <div key={watch.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center'>
              <img src={watch.image} alt={watch.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"/>
              <h3 className="mt-4 text-2xl font-bold">{watch.name}</h3>
              <p className="text-gray-500">{watch.description}</p>
              <div className='price text-blue-900 text-xl font-semibold mt-2'>${watch.price}</div>
              <button className="mt-2 px-2 py-1 bg-blue-900 text-white rounded-md">Add to Card</button>
            </div>
          ))}
        </div>
    )
  }
  
  export default Watches
  