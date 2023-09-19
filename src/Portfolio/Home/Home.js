import React from 'react';
import Profile from '../Profile/Profile';
import Bio from '../Bio/Bio';
import Resume from '../Resume/Resume';
import Contect from '../ContectMe/Contect';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import Skills from '../Skills/Skills';

function Home(props) {
    return (
        <>
         <Profile/>
         <Bio/>
         <Skills/>
         <Resume/>
         <Contect/>
         <Map/>
         <Footer/>
        </>
    );
}

export default Home;