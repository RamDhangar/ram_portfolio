import React, {useState} from 'react';
import './Header.css'
import { setHeaderRoute, getHeaderRoute } from '../AppService';

function Header(props) {
    const [activeId, setActiveId] = useState('home')
    const [display, setDisplay] = useState(false)
    let headerLink = [
        {
            label: 'Home',
            id: 'home'
        },
        {
            label: 'Bio',
            id: 'bio'
        },
        {
            label: "Skills",
            id: 'skills'
        },
        {
            label: 'Resume',
            id: 'resume'
        },
        {
            label: 'Contect',
            id: 'contect'
        },
    ]

    function setHeader(data) {
        setActiveId(data.id);
        setHeaderRoute(data.id);
        manuToggel('cross')
    }
    function manuToggel(type) {
        if (type === 'showManu') {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }
    return (
        <div className='header-container'>
            <div className='header-logo'>
                    <img src={require("../../assets/logo.png")} alt="" />
            </div>
            <div className='header-content'>
                 {
                    headerLink.map((link) => {
                        return <span onClick={() => setHeader(link)} style={{color: link.id === activeId ? '#0ef' : '#fff'}}>{link.label}</span>
                    })
                }
            </div>
            <div className='manu'>
            <div className='manu-content' style={{display: !display ? 'none' : 'flex'}}>
                <img src="cross.png" alt="" style={{width: "25px", height: "25px", cursor: 'pointer', display: !display ? 'none' : 'block'}} onClick={() => manuToggel('cross')}/>
                {
                    headerLink.map((link) => {
                        return <span onClick={() => setHeader(link)} style={{color: link.id === activeId ? '#0ef' : '#fff'}}>{link.label}</span>
                    })
                }
            </div>
            </div>
            <div className='manu-icon'>
                <img src="manu-icon.png" alt="" style={{width: '45px', height: '45px'}} onClick={() => manuToggel('showManu')}/>
            </div>
        </div>
    );
}

export default Header;