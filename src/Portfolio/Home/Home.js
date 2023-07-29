import React from 'react';
import Profile from '../Profile/Profile';
import Bio from '../Bio/Bio';
import Resume from '../Resume/Resume';

function Home(props) {
    return (
        <>
         <Profile/>  
         <Bio/> 
         <Resume/>
        </>
    );
}

export default Home;