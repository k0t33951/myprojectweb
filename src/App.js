import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';



const article = [ {
  id: 1,
  title: "NASA's Perseverance Rover Collects First Mars Rock Sample",
  description: "The rock core is now enclosed in an airtight titanium sample tube, and will be available for retrieval in the future.",
  image: "https://mars.nasa.gov/system/news_items/main_images/9029_PIA24806_web.jpg",
  imageCaption: "Perseverance’s first cored-rock sample is visible inside this titanium sample collection tube in this image taken on Sept. 6, 2021. Credits: NASA/JPL-Caltech.",
  authors: "Jenny Moreno",
  authorimage: "https://randomuser.me/api/portraits/women/11.jpg", 
  content: "The core is now enclosed in an airtight titanium sample tube, making it available for retrieval in the future. Through the Mars Sample Return campaign, NASA and ESA (European Space Agency) are planning a series of future missions to return the rover’s sample tubes to Earth for closer study. These samples would be the first set of scientifically identified and selected materials returned to our planet from another.",
},
{
  id: 2,
  title: "SpaceX Launches Four Civilians Into Orbit on Inspiration4 Mission",
  description: "SpaceX successfully launched the first all-civilian mission into orbit aboard the Dragon spacecraft.",
  image: "https://www.space.com/sites/default/files/styles/1240x826/public/spacex-inspiration4-launch.jpg",
  imageCaption: "The Inspiration4 crew poses in front of the Falcon 9 rocket that launched them into orbit. From left to right: Jared Isaacman, Hayley Arceneaux, Chris Sembroski, and Dr. Sian Proctor. (Image credit: SpaceX)",
  authors: "Mike Wall",
  content: "SpaceX made history on Wednesday (Sept. 15) by launching the first all-civilian mission into orbit. The Inspiration4 mission is led by billionaire Jared Isaacman, who purchased the flight from SpaceX and invited three other people to join him. The crew spent about three days in orbit before returning to Earth on Saturday. The mission aimed to raise money for the St. Jude Children's Research Hospital in Memphis, Tennessee."
},
  {
  id: 3,
  title: "New Type of Black Hole Has Been Discovered and It May Be the Smallest One Ever",
  description: "Astronomers have discovered a new type of black hole that may be the smallest ever detected.",
  image: "https://www.sciencealert.com/images/2021-09/processed/BlackHoleArt_1024.jpg",
  imageCaption: "Artist's impression of a black hole. (Image: © ESA/Hubble, M. Kornmesser)",
  authors: "Michelle Starr",
  content: "Astronomers have discovered a new type of black hole that may be the smallest ever detected. The black hole was found in a binary system in the Milky Way and is only about 3.3 times the mass of the sun. It is also the closest black hole to Earth ever discovered, at a distance of about 1,000 light-years away. The discovery could help astronomers better understand how black holes form and evolve."
}

];

function App() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
    <div className="bg-gray-700 p-9 rounded-lg shadow-lg mx-4">
      <div className="max-w-md mx-auto">

      <h1 className="text-3xl text-white font-bold text-center mb-3">{article.title}</h1> 

      <p className="text-white flex items-center mb-4">
        <img src={article.authorimage} className="w-7 h-7 rounded-full mr-2"  /> 
       <p className="bg-gray-900 w-full text-center ">{article.authors}</p> 
      </p>

      <img src={article.image} alt={article.imageCaption} className="my-4" />

      <p className="text-white text-center font-bold mb-4 ">{article.description}</p>
      
      <p className="text-white text-center  text-justify mb-4 ">{article.content}</p>
    </div>
  </div>
</div>
  );
}



export default App;
