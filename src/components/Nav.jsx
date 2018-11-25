import React from 'react';
import './css/nav.css'
import {  Link  } from 'react-router-dom';
import pt from '../img/pt.jpg';

class Nav extends React.Component {
    



    render(){

        const showMenu = () => {
            const sideMenu = document.getElementsByClassName('hiddenmenu')[0];
            const sideCloseButton = document.getElementsByClassName('close-menu')[0];
           sideMenu.classList.remove('hidden')
            sideMenu.classList.add('show');
            sideCloseButton.classList.remove('hidden')
           sideCloseButton.classList.add('visible')
        }

        const hideMenu = () => {
            const sideMenu = document.getElementsByClassName('hiddenmenu')[0];
            const sideCloseButton = document.getElementsByClassName('close-menu')[0];
            sideMenu.classList.remove('show')
            sideMenu.classList.add('hidden');
            sideCloseButton.classList.remove('visible')
            sideCloseButton.classList.add('hidden')
        }

        const navline = {
            height: "1px",
            borderBottom: '3px solid white',
            width: '30px',
            marginBottom: '5px',
            
        }
        const navbar = {
            top: '0',
            position: 'fixed',
            width: '100%',
            height: '65px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            zIndex: '99',
            paddingRight: '25px',
            paddingTop: '25px',
            background: '#355691',
            
            
        }
        const menu = {
            cursor: 'pointer',
            display: 'inline',
            position: 'fixed'
        }
      
    return (
        <nav style={navbar}>
            <div style={{ alignSelf: 'flex-start', display: 'inline-block', position: 'absolute', fontFamily: 'Condiment, cursive', fontSize: 'calc(1.5vw + 7px)', padding: '0 3%', color: 'white' }}>
             Save hundreds when you book with us! 
                
        </div>
            <div className='menu' style={menu} onClick={showMenu}>
                <div style={navline}></div>
                <div style={navline}></div>
                <div style={navline}></div>
            </div>

            <div className='hiddenmenu hidden'>

                <div className='close-menu hidden' onClick={hideMenu}>x</div>
                
                <h2 style={{display: 'inline-block'}}>MENU</h2>
                    <ul>
                    <Link to="/" onClick={hideMenu} style={{textDecoration: 'none'}}><li>HOME</li></Link>
                    <Link to="/resorts" onClick={hideMenu} style={{ textDecoration: 'none' }}><li>RESORTS</li></Link>
                    <a href="/#contact" onClick={hideMenu}><li>CONTACT US</li></a>
                    
                </ul>

            
            </div>
        </nav>
    )
    }
}

export default Nav;