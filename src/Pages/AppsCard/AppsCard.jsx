import React from 'react';
import dow from "../../assets/fi_18110198.png"
import star from "../../assets/fi_1828884.png"
import { Link } from 'react-router';

const AppsCard = ({apps}) => {
    const {title, companyName, image, ratingAvg, downloads, id  } = apps
    return (
        <Link to={`/appsDetails/${id}`}>
        <section>
            <div className='p-4 bg-white w-80 rounded-2xl shadow-2xl'>
                <img src={image} className='h-50 mx-auto'/>
                <div className='flex mt-2'><h1>{title}</h1> : <h2>{companyName}</h2></div>
                <div className='flex justify-between'>
                <button className='flex bg-gray-200 p-1 rounded-xl text-[#00D390]'><img src={dow} className='h-4 mt-1 mr-1'/>{downloads}</button>
                <button className='flex bg-gray-200 p-1 rounded-xl text-[#FF8811]'><img src={star} className='h-4 mt-1 mr-1'/>{ratingAvg}</button>
                </div>
            </div>
        </section>
        </Link>
        
    );
};

export default AppsCard;