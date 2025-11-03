import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Link } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import useApps from '../../Hook/useApps';

const Home = () => {
  
  const {apps, loading, error} = useApps()

  const featuredApps = apps.slice(0, 8)

    return (
        <div>
          <Banner></Banner>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#FFF0E1] px-25 pb-10'>
            {
              featuredApps.map(apps => (
                <AppsCard apps={apps} key={apps.id}></AppsCard>
              ))
            }
          </div>
            <div className='bg-[#FFF0E1]'>
            <Link to={"/apps"} className=' justify-center flex pb-10'><button className='px-4 rounded-xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 text-sm text-white'>Show All</button></Link>
        </div>
        </div>
    );
};

export default Home;