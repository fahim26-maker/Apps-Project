import React from 'react';
import logo from  "../../assets/logo-D9NHcesw 1.png"
import git from "../../assets/fi_2111432.png"
const Navbar = () => {
    const links = <>
      <a href="">Home</a>
                <a href="">Apps</a>
                <a href="">Installation</a>
    </>
    return (
        <div className=' flex justify-between p-5 w-11/12 m-auto'>
            <div className='flex'>
            <img src={logo} alt="" srcset="" className='h-7'/>
            <h1 className='lg:text-transparent bg-clip-text bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] font-semibold '>HERO.IO</h1>
            </div>
            <div className='space-x-2'>
              {links}
            </div>
            <div className=' '>
                <button className='flex p-2 place-content-center place-items-center text-white bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] font-semibold rounded-xl'><img src={git} alt="" className='h-4 mr-2' />Contribute</button>
            </div>
        </div>
    
    );
};

export default Navbar;



[
  {
    "image": "https://i.ibb.co.com/0j2VqXtd/Spotify-App-Logo-svg.png",
    "title": "Spotify",
    "companyName": "Spotify Ltd.",
    "id": 1,
    "description": "Stream music and podcasts from around the world.",
    "size": 45,
    "reviews": 32000000,
    "ratingAvg": 4.6,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 800000 },
      { "name": "2 star", "count": 1200000 },
      { "name": "3 star", "count": 2400000 },
      { "name": "4 star", "count": 6400000 },
      { "name": "5 star", "count": 21120000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/Cs8CcTxz/Instagram-logo-2022-svg.webp",
    "title": "Instagram",
    "companyName": "Meta Platforms",
    "id": 2,
    "description": "Share photos, videos, and stories with friends.",
    "size": 60,
    "reviews": 40000000,
    "ratingAvg": 4.4,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 2000000 },
      { "name": "2 star", "count": 2500000 },
      { "name": "3 star", "count": 4000000 },
      { "name": "4 star", "count": 8000000 },
      { "name": "5 star", "count": 23500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/nNbV0gPB/maps-96in128dp.png",
    "title": "Google Maps",
    "companyName": "Google LLC",
    "id": 3,
    "description": "Navigate and explore the world with real-time GPS.",
    "size": 35,
    "reviews": 15000000,
    "ratingAvg": 4.7,
    "downloads": 5000000000,
    "ratings": [
      { "name": "1 star", "count": 300000 },
      { "name": "2 star", "count": 500000 },
      { "name": "3 star", "count": 1000000 },
      { "name": "4 star", "count": 3000000 },
      { "name": "5 star", "count": 10200000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/nMFNQVZf/expressvpn-tiktok-videos.jpg",
    "title": "TikTok",
    "companyName": "ByteDance",
    "id": 4,
    "description": "Create and discover short videos across genres.",
    "size": 80,
    "reviews": 25000000,
    "ratingAvg": 4.5,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 1000000 },
      { "name": "2 star", "count": 1500000 },
      { "name": "3 star", "count": 3000000 },
      { "name": "4 star", "count": 6000000 },
      { "name": "5 star", "count": 13500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/R4p1PK6y/sm-5b321c99945a2.jpg",
    "title": "WhatsApp",
    "companyName": "Meta Platforms",
    "id": 5,
    "description": "Free messaging and calling app with end-to-end encryption.",
    "size": 30,
    "reviews": 35000000,
    "ratingAvg": 4.3,
    "downloads": 5000000000,
    "ratings": [
      { "name": "1 star", "count": 2500000 },
      { "name": "2 star", "count": 3000000 },
      { "name": "3 star", "count": 5000000 },
      { "name": "4 star", "count": 9000000 },
      { "name": "5 star", "count": 15500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/CKHyj0Jb/yout.png",
    "title": "YouTube",
    "companyName": "Google LLC",
    "id": 6,
    "description": "Watch and upload videos from creators worldwide.",
    "size": 70,
    "reviews": 60000000,
    "ratingAvg": 4.5,
    "downloads": 10000000000,
    "ratings": [
      { "name": "1 star", "count": 3000000 },
      { "name": "2 star", "count": 4000000 },
      { "name": "3 star", "count": 7000000 },
      { "name": "4 star", "count": 12000000 },
      { "name": "5 star", "count": 34000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/VWLkgcsH/zoom.png",
    "title": "Zoom",
    "companyName": "Zoom Video Communications",
    "id": 7,
    "description": "Video conferencing and collaboration for teams.",
    "size": 55,
    "reviews": 8000000,
    "ratingAvg": 4.2,
    "downloads": 500000000,
    "ratings": [
      { "name": "1 star", "count": 500000 },
      { "name": "2 star", "count": 800000 },
      { "name": "3 star", "count": 1200000 },
      { "name": "4 star", "count": 2000000 },
      { "name": "5 star", "count": 3500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/bMdnK7nq/download.jpg",
    "title": "Microsoft Office",
    "companyName": "Microsoft Corporation",
    "id": 8,
    "description": "Access Word, Excel, PowerPoint, and more on mobile.",
    "size": 90,
    "reviews": 10000000,
    "ratingAvg": 4.6,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 400000 },
      { "name": "2 star", "count": 600000 },
      { "name": "3 star", "count": 1000000 },
      { "name": "4 star", "count": 2400000 },
      { "name": "5 star", "count": 5600000 }
    ]
  }
]