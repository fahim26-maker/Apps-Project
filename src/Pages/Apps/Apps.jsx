import React from 'react';
import useApps from '../../Hook/useApps';
import AppsCard from '../AppsCard/AppsCard';

const Apps = () => {
    const { apps } = useApps()
    return (
        <div className='bg-[#FFF0E1] pt-5 text-center'>
          <div>
            <h1 className=' text-4xl font-bold'>Our All Applications</h1>
            <p className='mt-2 text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
          </div>
          <div className='pt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#FFF0E1] px-25 pb-10'>
            {
              apps.map(apps => (
                <AppsCard apps={apps} key={apps.id}></AppsCard>
              ))
            }
          </div>
        </div>
    );
};

export default Apps;