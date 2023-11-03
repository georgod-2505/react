import React from 'react';
import '../styles/home.css'
import ListItem from '../component/main/content/listItem';
import data from '../db/data';
import Slider from '../component/main/slider/slider';

function Home() {
  return (
    <>
     <div className='home'>
        <Slider/>
        <ListItem data={data}/>
    </div>
   </>
  );
}

export default Home;
