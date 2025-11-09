import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

import dow from "../../assets/fi_18110198.png"
import star from "../../assets/fi_1828884.png"
import Apps from '../Apps/Apps';
import AppsCard from '../AppsCard/AppsCard';
import { getStoredApp, removeAppFromDB } from '../../utility/addToDB';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const Installation = () => {
  const [sort, setSort] = useState();

  // for un.. toast
   const handleUninstall = (id) => {
  removeAppFromDB(id);
  setAppList(prev => prev.filter(app => app.id !== id));
      toast.success(`Uninstalled successfully!`);
};
console.log("Updated localStorage:", JSON.parse(localStorage.getItem("appList")));
        // const {title, companyName, image, ratingAvg, downloads, id  } = apps
 const { id } = useParams();
  const data = useLoaderData();
//   console.log(data)
  const [singleApp, setSingleApp] = useState(null);
 const [appList, setAppList] = useState([]); 
// console.log(appList)
    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const myAppList = data?.filter(app => ConvertedStoredApps.includes(app.id));
        setAppList(myAppList)

        const findApp = data?.find((app) => app.id === parseInt(id));
    setSingleApp(findApp);
    },[id, data]);

    const handleSort = (type) => {
      setSort(type)
      if (type === "Top Downloads") {
        const sortedByDownloads = [...appList].sort((a,b) => b.downloads - a.downloads);
        setAppList(sortedByDownloads)
        // console.log(sortedByDownloads)
      }
      if (type === "Low Downloads") {
        const sortedByDownloads = [...appList].sort((a,b) => a.downloads - b.downloads);
        setAppList(sortedByDownloads)
        //  console.log(sortedByDownloads)
      }
    }
   
    return (
      
      <div>
                     <ToastContainer position="top-right" autoClose={3000} />
                       <div className='text-center py-4'>
                        <h1 className='text-3xl font-bold'>Your Installed Apps</h1>
                        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    {/* sort down */}
                    <details class="dropdown flex justify-center ">
      <summary class="btn m-1 bg-[#00D390]">Sort by : {sort?sort:""}</summary>
      <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
      <li><a onClick={()=>handleSort("Top Downloads")}>Top Downloads</a></li>
      <li><a onClick={()=>handleSort("Low Downloads")}>Low Downloads</a></li>
          </ul>
</details>
         {
        appList.map(a=><section className='bg-[#FFF0E1]' key={a.id}>

                    <div className='w-7/12 mx-auto py-2 '>
                        <div className='p-4 bg-white w-full rounded-2xl shadow-xs flex justify-between'>
                        <img src={a.image} className='h-50 '/>
                        <div className='space-y-10'>
                        <div className='flex mt-2'><h1>{a.title}</h1> : <h2>{a.companyName}</h2></div>
                        <div className='flex justify-between'>
                        <button className='flex bg-gray-200 p-1 rounded-xl text-[#00D390]'><img src={dow} className='h-4 mt-1 mr-1'/>{a.downloads}</button>
                        
                        <button className='flex bg-gray-200 p-1 rounded-xl text-[#FF8811]'><img src={star} className='h-4 mt-1 mr-1'/>{a.ratingAvg}</button>
                        </div>
                        <button
                                onClick={() => handleUninstall(a.id)}
                                className='btn bg-[#00D390] text-white'>Uninstall</button>
                    </div>   
                    </div>
                    </div>
                </section>)
       }
      </div>
    );
};

export default Installation;