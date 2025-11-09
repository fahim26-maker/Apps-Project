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
console.log(appList)
    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const myAppList = data?.filter(app => ConvertedStoredApps.includes(app.id));
        setAppList(myAppList)

        const findApp = data?.find((app) => app.id === parseInt(id));
    setSingleApp(findApp);
    },[id, data]);
   
    return (
      
      <div>
                     <ToastContainer position="top-right" autoClose={3000} />
         {
        appList.map(a=><section className='bg-[#FFF0E1]'>

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