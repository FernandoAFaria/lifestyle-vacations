import React from 'react';
import logo2 from '../img/lvc2.jpg';
import logo3 from '../img/lvc3.jpg'
import { Link } from 'react-router-dom';
import "../components/css/resorts.css";
import Compare from "./Compare";
/*Scroll Reveal */
import Slide from 'react-reveal/Slide';
/*IMPORT RESORT PICTURES HERE */
import confback from '../img/Confresi Palm Beach/confback.jpg';
import presback from '../img/Presedential Suites/presback.jpg';
import royalback from '../img/Royal Suites/royalback.jpg';
import crownback from '../img/The Crown Villas/crownback.jpg';
import tropicalback from '../img/The Tropical/trop5.jpg';
import dreamsuitesback from '../img/Dream Suites/dreamsuitesback.jpg';
import dreamsuitespunta from '../img/deramsuites punta cana/dreamsuitespunta.jpg';
import pressuitespunta from '../img/pres suites punta cana/pressuitespunta.jpg';
import allritmoback from '../img/All Ritmo/allritmoback.jpg';



/*RESORT INFORMATION BELOW */
const resortInfo = [
    {
        name: 'The Tropical',
        location: 'Puerto Plata, DR',
        foreground: 'darkgreen',
        background: tropicalback,
        link: 'tropical'

    },
    {
        name: 'Confresi Resort and Spa',
        location: 'Puerto Plata, DR',
        foreground: 'red',
        background: confback,
        link: 'confresi'

    },
    {
        name: 'Presidential Suite',
        location: 'Puerto Plata, DR',
        foreground: 'blue',
        background: presback,
        link: 'presidential'

    },
    {
        name: 'The Royal Suites',
        location: 'Puerto Plata, DR',
        foreground: 'purple',
        background: royalback,
        link: 'royalsuites'

    },
    {
        name: 'Dream Suites by Lifestyle',
        location: 'Puerto Plata, DR',
        foreground: 'coral',
        background: dreamsuitesback,
        link: 'dreamsuites'

    },
 
    {
        name: 'The Crown Villas',
        location: 'Puerto Plata, DR',
        foreground: 'black',
        background: crownback,
        link: 'crownvillas'

    },
    {
        name: 'Dream Suites by Lifestyle',
        location: 'Punta Cana, DR',
        foreground: 'darkcyan',
        background: dreamsuitespunta,
        link: 'dreamsuitespuntacana'

    },
    {
        name: 'Presidential Suites',
        location: 'Punta Cana, DR',
        foreground: 'darkgoldenrod',
        background: pressuitespunta,
        link: 'pressuitespuntacana'

    },
    {
        name: 'All Ritmo',
        location: 'Cancun, Mexico',
        foreground: 'darkslateblue',
        background: allritmoback,
        link: 'AllRitmo'

    },
]


/* MODULES BELOW - CARDS, SHOWCASE, AND RESORT*/


const Cards = (props) => {
    let handleMouseOver = (event) => {
        event.classList.add('card-container-hover')
    }
    let handleMouseOut = (event) => {
        event.classList.remove('card-container-hover')
    }
    let backgroundPic = {
        backgroundImage: `url(${props.background})`
    }
    return (
        
        <div className="card-container"
            style={backgroundPic}
            onMouseEnter={(event) => handleMouseOver(event.target)}
            onMouseLeave={(event) => handleMouseOut(event.target)}>

            <div style={{ background: `${props.foreground}` }} className="overlay">
                <h2 style={{width: '320px', border: '10px solid white', filter: 'opacity(2)'}}>{props.name}</h2>
                <h4>{props.location}</h4>
                <Link to={{pathname: `${props.link}`}}><button className="card-btn">Resort Info</button></Link>
                
            </div>



        </div>
        
    )
}

const Contact = () => {

    let handleSubmit = (e) => {
        e.preventDefault();
        
        
    }

    handleSubmit = handleSubmit.bind(this);

    return(
        <div className="contact" id="contact">
            <div className="left">
            <h2>Have a question?</h2>
            <h5>Please fill out the quick form and we will be in touch!</h5>
                <form id="contact-form" method="post" action="https://hooks.zapier.com/hooks/catch/3956551/egszxh/" onSubmit={(e) => e.preventDefault()} >
                <input type="text" name="name" placeholder="  Name"></input><br></br>
                <input type="email" name="email"placeholder="  Your Email Address"></input><br></br>
                <textarea rows="5" name="body" id="contact-text-area" placeholder="How can we help?"></textarea><br></br>
                <button type="submit" className="btn">Submit</button>
            </form>
            </div>
            <div className="bottom">
                <p>Our number one goal is to provide you with an amazing vacation experience at the best possible price.
                We want you to be satisfied and hope you will book your future vacations with us!
                We believe in complete transparancy, we will not hide any fees unlike those big name companies.</p>
            </div>
        </div>
    )
}

export const Resorts = () => {
    const resortsStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        padding: '25px 0',
        
    }
    return (
        <section style={{padding: '50px 0 50px 0', textAlign:'center'}}><h1>Please browse avaliable resorts below.</h1>
        <div style={resortsStyle} id="resorts">
           
           {resortInfo.map((x) => {
                return (
                    
                    <Cards  name={x.name} foreground={x.foreground} background={x.background} location={x.location} link={x.link} />
                   
                )
            })}
        </div>
        </section>
    )

}

 export const Showcase = () => {
    const showcaseImg = {
        width: '100%', 
        margin: '0',
        padding: '0' ,
        transform: 'translatey(-35px)'
        
    }
    const showcase = {
        position: 'relative',
        marginTop: '25px',
        textAlign: 'center',
        zIndex: '1',
        paddingTop: '75px',
        color: 'white',
        background: 'black'
       
    }
    const body = {
        padding: '100px 15% 150px 15%',
        lineHeight: '1.6',
        fontSize: '1.2em',
        backgroundImage: 'white'

    }
 

    return (
        <div className="container">
        
    <div style={showcase}>
        
            <img src={logo3} alt="Lifestyle Vacations Club Logo" style={showcaseImg}/>
        
                <div style={body}>
                
                    <h2>Let us help you save hundreds on your next Vacation!</h2>
                
                
                    <p style={{ marginTop: '65px', textAlign: 'justify', color: 'lightgrey'}}>It's easy!  Choose your next destination below.  Fill out an inquiry.  We will find the best possible deal and get back to you in email within 24 hours.
                    You can then compare our pricing with others and see where you are getting the best deal.  You will then be sent a link good for 48 hours so that you may book your trip!  Remember, pricing is only good for 48 hours so remember to check your email often.  Who wouldn't want more cash to spend while your ON vacation?
                    </p>
                
        </div>
                
                <Compare />
               
            <Resorts />
    </div>
    <Contact />
        </div>
    )

}


