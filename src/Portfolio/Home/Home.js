import React from 'react';
import Profile from '../Profile/Profile';
import Bio from '../Bio/Bio';
import Resume from '../Resume/Resume';
import Contect from '../ContectMe/Contect';
import Footer from '../Footer/Footer';

function Home(props) {
    return (
        <>
         <Profile/>
         <Bio/>
         <Resume/>
         <Contect/>
         <Footer/>
        </>
    );
}

export default Home;