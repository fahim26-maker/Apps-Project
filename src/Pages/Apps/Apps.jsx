import React, { useState } from 'react';
import useApps from '../../Hook/useApps';
import AppsCard from '../AppsCard/AppsCard';

const Apps = () => {
  // searching apps----------
    const { apps } = useApps()
  const [ search, setSearch ] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase()
  .includes(term) ) : apps
  console.log(searchedApps)
    return (
        <div className='bg-[#FFF0E1] pt-5 text-center'>
          <div>
            <h1 className=' text-4xl font-bold'>Our All Applications</h1>
            <p className='mt-2 text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between px-30'>
                <p className='font-semibold text-2xl'>(16) Apps Found</p>
                <label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Apps" 
   value={search} onChange={(e) => setSearch(e.target.value)}/>
                </label>
            </div>
          </div>
          <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#FFF0E1] px-25 pb-10'>
            {
              searchedApps.map(apps => (
                <AppsCard apps={apps} key={apps.id}></AppsCard>
              ))
            }
          </div>
        </div>
    );
};

export default Apps;