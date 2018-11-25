import React from 'react';
import Slide from 'react-reveal/Slide';



const Compare = () => {

    const compareContainer = {
        
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }

    const compareInfo = [
        {
            name: 'Expedia',
            resort: 'The Crown Villas',
            location: 'Puerto Plata, DR',
            duration: '7 Nights',
            occupancy: '10 Adults',
            pricing: '$17,500 + fees',
            headercolor: 'darkblue',
            bodycolor: 'blue',
            button: 'red'
        }, {
            name: 'Hotels.com',
            resort: 'The Crown Villas',
            location: 'Puerto Plata, DR',
            duration: '7 Nights',
            occupancy: '10 Adults',
            pricing: '$16,933 + fees',
            headercolor: 'darkgreen',
            bodycolor: 'green',
            button: 'red'
        }, {
            name: 'Us',
            resort: 'The Crown Villas',
            location: 'Puerto Plata, DR',
            duration: '7 Nights',
            occupancy: '10 Adults',
            pricing: '$12,000',
            headercolor: 'darkgoldenrod',
            bodycolor: 'darkorange',
            button: 'green'
        },
    ]
    const cardContainer = {
        minWidth: '340px',
        height: '380px',
        border: '2px solid black',
        borderRadius: '10px',
        margin: '25px',
        overflow: 'hidden',
        fontSize: '1.2em'
       
    }
  
    const cardcontent = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        padding: '25px 0 0 0',
        background: 'white',
        color: 'black'
    }
    const margin = {
        marginBottom: '10px'
    }

    return(
        <div style={{background: 'white ', padding: '75px'}}>
        <h2 style={{marginBottom: '15px', color: '#394648 ', fontSize: '2.6em'}}>Compare us with others!</h2>
        <div className='compare-container' style={compareContainer}>
            {compareInfo.map((x) => {
                return (
                    
                    <div key={x.name} style={cardContainer}>
                        <div style={{ background: `${x.headercolor}`, width: '100%', height: '70px', padding: '10px 0', color: 'white' }}>
                            <h1>{x.name}</h1>
                        </div>    
                        <div style={{background: `${x.bodycolor}`, height: '100px', padding: '5px 0', color: 'white'}}>
                        <h2>{x.resort}</h2><br></br>
                        <h3>{x.location}</h3>
                        </div>
                        <div style={cardcontent}>
                            <h5 style={margin}>All Inclusive</h5>
                            <h6 style={margin}>{x.duration} in a 5 bedroom villa</h6>
                            <h6 style={margin}>Occupancy: {x.occupancy}</h6>
                            <div style={{ width: '150px', height: '55px', background: `${x.button}`, margin: 'auto', color: 'white', borderRadius: '10px', paddingTop: '20px' }}><h4>{x.pricing}</h4></div>
                            
                            </div>



                    </div>
                    
                )

            })}


        </div>

        </div>
    )

}




export default Compare;