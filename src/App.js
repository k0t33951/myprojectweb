import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import ArticleItem from './ArticleItem';
import ArticleList from './ArticleList';


const articles = [ 
  {
    id: 1,
    title: "NASA's Perseverance Rover Collects First Mars Rock Sample",
    description: "The rock core is now enclosed in an airtight titanium sample tube, and will be available for retrieval in the future.",
    image: "https://mars.nasa.gov/system/news_items/main_images/9029_PIA24806_web.jpg",
    imageCaption: "Perseverance’s first cored-rock sample is visible inside this titanium sample collection tube in this image taken on Sept. 6, 2021. Credits: NASA/JPL-Caltech.",
    authors: "Jenny Moreno, Mike Wade",
    datetime: "26.02.2023 8:42",
    content: "The core is now enclosed in an airtight titanium sample tube, making it available for retrieval in the future. Through the Mars Sample Return campaign, NASA and ESA (European Space Agency) are planning a series of future missions to return the rover’s sample tubes to Earth for closer study. These samples would be the first set of scientifically identified and selected materials returned to our planet from another.",
  },
  {
    id: 2,
    title: "Mysterious glowing spiral in the sky over Alaska draws questions, and a simple explanation",
    description: "A photographer has captured a stunning video of Northern Lights sparked by a geomagnetic storm.",
    image: "https://www.adn.com/resizer/ECjqkp3paCN01kCzZ2Y8bJyqm5w=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/adn/B4DNOTCVOJCV5LFNXOLNOSALBI.jpg",
    imageCaption: "Northern Lights are caused by a geomagnetic storm. (AFP)",
    authors: "Mike Wall",
    datetime: "12.02.2023 9:32",
    content: "Have you ever experienced something interesting or unique while flying on an airplane? Well, a photographer named Moharnab Saikia did! While flying from Seattle to Fairbanks in Alaska, he saw a spectacular display of Northern Lights that were sparked by the strongest geomagnetic storm in 6 years."
  
  },
  {
    id: 3,
    title: "New Type of Black Hole Has Been Discovered and It May Be the Smallest One Ever",
    description: "Astronomers have discovered a new type of black hole that may be the smallest ever detected.",
    image: "https://www.gannett-cdn.com/presto/2021/04/23/USAT/3ee0cea3-d121-405b-8944-f05141c7132a-blackhole-redgiant-tidaldistortion-final.jpg?crop=7084,3985,x0,y350&width=3200&height=1801&format=pjpg&auto=webp",
    imageCaption: "Artist's impression of a black hole. (Image: © ESA/Hubble, M. Kornmesser)",
    authors: "Michelle Starr",
    datetime: "18.02.2023 2:11",
    content: "Astronomers have discovered a new type of black hole that may be the smallest ever detected. The black hole was found in a binary system in the Milky Way and is only about 3.3 times the mass of the sun. It is also the closest black hole to Earth ever discovered, at a distance of about 1,000 light-years away. The discovery could help astronomers better understand how black holes form and evolve."
  },

 ];
  


function App() {
  return (
    <div className=" bg-gray-700 h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-9 rounded-lg shadow-lg">
        <div className=" max-w-md mx-auto">
          <ArticleList articles={articles} />
        </div>
      </div>
    </div>
  );
}

export default App;