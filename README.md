 <div>
         {
        appList.map(a=><App key={a.id} apps={a}></App>)
       }
      </div>

       <div className='w-7/12 mx-auto py-2 '>
                        <div className='p-4 bg-white w-full rounded-2xl shadow-xs'>
                        <img src={a.image} className='h-50  mx-auto'/>
                        <div className='flex mt-2'><h1>{a.title}</h1> : <h2>{a.companyName}</h2></div>
                        <div className='flex justify-between'>
                        <button className='flex bg-gray-200 p-1 rounded-xl text-[#00D390]'><img src={dow} className='h-4 mt-1 mr-1'/>{a.downloads}</button>
                        <button className='btn bg-[#00D390] text-white'>Uninstall</button>
                        <button className='flex bg-gray-200 p-1 rounded-xl text-[#FF8811]'><img src={star} className='h-4 mt-1 mr-1'/>{a.ratingAvg}</button>
                        </div>
                    </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold'>Your Installed Apps</h1>
                        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                    </div>