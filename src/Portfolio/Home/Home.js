import React from 'react';
import Profile from '../Profile/Profile';
import Bio from '../Bio/Bio';
import Resume from '../Resume/Resume';
import Contect from '../ContectMe/Contect';

function Home(props) {
    return (
        <>
         <Profile/>
         <Bio/>
         <Resume/>
         <Contect/>
        </>
    );
}

export default Home;