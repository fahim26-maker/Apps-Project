import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downL from "../../assets/fi_18110198.png";
import star from "../../assets/fi_1828884.png";
import like from "../../assets/Vector.png";
import Chart from 'chart.js/auto';
import cat from "../../assets/cat.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addStoreDB } from '../../utility/addToDB';


const AppsDetails = () => {

  const handleMarkAsInstalled = id => {
    addStoreDB(id)
  }
  // toast--------------
const handleInstall = () => {
  setIsInstalled(true);
  toast.success('App Installed Successfully!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
  
  const { id } = useParams();
  const data = useLoaderData();
  const [singleApp, setSingleApp] = useState(null);
const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    const findApp = data?.find((app) => app.id === parseInt(id));
    setSingleApp(findApp);
  }, [id, data]);

  useEffect(() => {
    if (!singleApp) return;
// ----chart-----------------------
    const ctx = document.getElementById('ratingChart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
          datasets: [{
            label: 'Number of Ratings',
            data: [11000, 7500, 4000, 2500, 1500],
            backgroundColor: 'orange',
            borderRadius: 5,
            barThickness: 30
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: { beginAtZero: true }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  }, [singleApp]);
  // apps not found error-----------
  if (!singleApp)  
  return(
    
      <div className=' justify-center items-center justify-items-center mt-10'>
        <img src={cat} className='h-80 w-80' />
        <h1 className='text-4xl font-bold mt-7'>OPPS!! APP NOT FOUND</h1>
        <p className='text-gray-500 mt-4'>The App you are requesting is not found on our system.  please try another apps</p>
        <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white btn  mx-auto flex justify-center mt-4 mb-20'>Go Back !!</button>
      </div>
    
  )
  
  return (
    <section className='bg-[#FFF0E1]'>
    <ToastContainer />
      <div className='w-9/12 mx-auto'>
        <div className='flex pt-10'>
          <img src={singleApp?.image} className='h-50' />
          <div className='ml-10'>
            <h1 className='text-2xl font-semibold'>App Name: {singleApp?.title}</h1>
            <h2 className='border-b-1 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
              <span className='text-gray-400'>Developed by: </span>{singleApp?.companyName}
            </h2>
            <div className='flex'>
              <div className='mt-5'>
                <img src={downL} alt="" />
                <h1 className='text-sm text-gray-500'>Download</h1>
                <h2 className='text-2xl font-bold'>{singleApp?.downloads}</h2>
              </div>
              <div className='mt-5 ml-10'>
                <img src={star} alt="" />
                <h1 className='text-sm text-gray-500'>Average Rating</h1>
                <h2 className='text-2xl font-bold'>{singleApp?.ratingAvg}</h2>
              </div>
              <div className='mt-5 ml-10'>
                <img src={like} alt="" />
                <h1 className='text-sm text-gray-500'>Total Reviews</h1>
                <h2 className='text-2xl font-bold'>{singleApp?.reviews}</h2>
              </div>
            </div>
            <div>
              <button
  onClick={() => {
    handleMarkAsInstalled(id);
    handleInstall();
  }}
  className={`btn mt-4 text-white ${isInstalled ? 'bg-gray-400' : 'bg-[#00D390]'}`}
  disabled={isInstalled}
>
  {isInstalled ? 'Installed' : 'Install Now'}
</button>

            </div>
          </div>
        </div>
              
        {/* Chart Canvas */}
		<div>
			<h1 className='mt-10 font-bold text-2xl'>Rating...</h1>
        <canvas id="ratingChart" width="600" height="150" 
		className='mt-7 border-y-1 border-indigo-500'></canvas>
      </div>
	  <div >
		<h2 className='mt-10 font-bold text-2xl'>Description</h2>
		<p className='mt-5 text-gray-500 pb-5'>{singleApp?.description}</p>
	  </div>
	  </div>
    </section>
  );
};

export default AppsDetails;