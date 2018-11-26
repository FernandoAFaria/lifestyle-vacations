import React from 'react';
/* Importing Pics */
import trop1 from "../img/The Tropical/trop1.jpg";
import trop2 from "../img/The Tropical/trop2.jpg";
import trop3 from "../img/The Tropical/trop3.jpg";
import trop4 from "../img/The Tropical/trop4.jpg";
import trop5 from "../img/The Tropical/trop5.jpg";
import trop6 from "../img/The Tropical/trop6.jpg";
/* confresi */
import conf1 from '../img/Confresi Palm Beach/confback.jpg';
import conf2 from '../img/Confresi Palm Beach/conf2.jpg';
import conf3 from '../img/Confresi Palm Beach/conf3.jpg';
import conf4 from '../img/Confresi Palm Beach/conf4.jpg';
import conf5 from '../img/Confresi Palm Beach/conf5.jpg';
import conf6 from '../img/Confresi Palm Beach/conf6.jpg';
/*crown villas */
import crown1 from '../img/The Crown Villas/crown1.jpg';
import crown2 from '../img/The Crown Villas/crown2.jpg';
import crown3 from '../img/The Crown Villas/crown3.jpg';
import crown4 from '../img/The Crown Villas/crown4.jpg';
import crown5 from '../img/The Crown Villas/crown5.jpg';
import crown6 from '../img/The Crown Villas/crown6.jpg';
import crown7 from '../img/The Crown Villas/crown7.jpg';
import crown8 from '../img/The Crown Villas/crownback.jpg';
/*Pres suite PP*/
import pres1 from '../img/Presedential Suites/presback.jpg';
import pres2 from '../img/Presedential Suites/pres1.jpg';
import pres3 from '../img/Presedential Suites/pres2.jpg';
import pres4 from '../img/Presedential Suites/pres3.jpg';
import pres5 from '../img/Presedential Suites/pres4.jpg';
import pres6 from '../img/Presedential Suites/pres5.jpg';
import pres7 from '../img/Presedential Suites/pres6.jpg';
/*Royal Suites*/
import royal1 from '../img/Royal Suites/royal1.jpg';
import royal2 from '../img/Royal Suites/royal2.jpg';
import royal3 from '../img/Royal Suites/royal3.jpg';
import royal4 from '../img/Royal Suites/royal4.jpg';
import royal5 from '../img/Royal Suites/royal5.jpg';
import royal6 from '../img/Royal Suites/royal6.jpg';
import royal7 from '../img/Royal Suites/royalback.jpg';
/*Dream suites*/
import dream1 from '../img/Dream Suites/dream1.jpg';
import dream2 from '../img/Dream Suites/dream2.jpg';
import dream3 from '../img/Dream Suites/dream3.jpg';
import dream4 from '../img/Dream Suites/dream4.jpg';
import dream5 from '../img/Dream Suites/dream5.jpg';
import dream6 from '../img/Dream Suites/dreamsuitesback.jpg';

/*pres suites Punta */
import presp1 from '../img/pres suites punta cana/presp1.jpg';
import presp2 from '../img/pres suites punta cana/presp2.jpg';
import presp3 from '../img/pres suites punta cana/presp3.jpg';
import presp4 from '../img/pres suites punta cana/presp4.jpg';
import presp5 from '../img/pres suites punta cana/pressuitespunta.jpg';
import presp6 from '../img/pres suites punta cana/presp6.jpg';
import presp7 from '../img/pres suites punta cana/presp7.jpg';
import presp8 from '../img/pres suites punta cana/presp8.jpg';




 const detailedResortInfo = [
     {
        id: "confresi",
        resortName: "Confresi Palm Beach & Spa",
         data: "This beautiful all-inclusive resort is comprised of several sections of units that are specific to a guests’ vacationing requirements and include 18 exclusive adult only Spa Suites, 208 family-friendly standard rooms, 180 Oceanside rooms in a mix of king and double beds, 60 residences for long-term rentals and 2 spectacular Ocean view Penthouses. All rooms feature modern comfortable furnishing, marble ﬂoors, air-conditioning, ceiling fans, most have ﬂat-screen TVs, bathrooms with marble appointments, and hair dryers, safes, and mini-bars. Some rooms have small kitchenettes, jetted tubs in unit, and terrace or balcony.",
        pics: [conf1, conf2, conf3, conf4, conf5, conf6],
         occupancy: 'Studio (4 people), Spa Suites(4 people) Adults Only over 18, Beach Studio(4 people)'
    }
    ,
    {
        id: "crownvillas",
        resortName: "The Crown Villas",
        data: "The Crown Villas are the ultimate in luxury and exclusivity, as each is a small estate home with sumptuous, private three and four bedrooms that offer guests a unique and exclusive vacation experience.  All of these villas are a classical Spanish Mediterranean style architecture, with red tile roofs, stucco plastered archways and distinguished stone columns with generous tropical gardens where hibiscus, bougainvilleas and other magnificent tropical plants abound. All have a private swimming pool, shaded terrace, veranda, kitchen, and a full private bath leading directly off each bedroom.The villas are furnished with rattan, elephant bamboo and a natural Caribbean wattle work and are equipped with air conditioning, overhead fans and cable television.  The Crown Villas are part of the all - inclusive Lifestyle Holidays Vacation Resort and guests have access to all the facilities of the Resort(excluding the V.I.P areas).A personal maid and an exclusive menu in each of the eight Resort restaurants complete these perfect accommodations.",
        pics: [crown1, crown2, crown3, crown4, crown5, crown6, crown7, crown8],
        occupancy: '3-Bedroom Villa (6 people),  6-Bedroom Villa(12 people'
    },
     {
         id: "tropical",
         resortName: "The Tropical",
         data: "Set within the sprawling Lifestyle Holidays Vacation Resort, The Tropical offers a classic hotel vacation experience set within quaint, two- and three- story, Mediterranean-style buildings. The mood is laid-back and distinctively Caribbean. Guest enjoy all resort facilities and amenities(excluding the V.I.P areas) including three swimming pools, a choice of excellent restaurants, exercise rooms, tennis courts, windsurfing and so much more. The Lifestyle Tropical is ideal for couples seeking a private island hideaway with all the advantages of a world-class resort.",
         pics: [trop1, trop2, trop3, trop4, trop5, trop6],
         occupancy: 'Junior Suite - 2 Adults, 2 Children max'
     
        },
     {
         id: "presidential",
         resortName: "Presidential Suites",
         data: "All these Studios and Suites are dramatically decorated with dark, rich wood, and stainless steel accouterments and appliances. The smallest details have been carefully crafted to provide guests with every comfort and luxury available, making the Presidential Suites one of the most relaxing, enjoyable and satisfying experiences ever.  Providing both service and features that are beyond compare, the Presidential Suites offer a unique luxury accommodations experience.As a Lifestyle property, the Presidential Suites provide the easy, relaxed ambiance of the Caribbean in an opulent and elegant setting,         These Studios and one and two bedroom suites offer an incomparable vacation experience for the most discriminating traveler.They have air conditioning, cable television, phones, and ceiling fans, while the décor has a distinctive modern design, featuring cherry wood furnishing and stainless steel.Shaded patios and verandas provide a relaxing place to gather.  One and Two-bedroom suites are equipped with kitchens and stainless - steel appliances, separate dining and living area plus a private balcony, guests can spread out and enjoy all the comforts of home, as well as the designer appointed furnishings and spectacular views.",
         pics: [pres1, pres2, pres3, pres4, pres5, pres6, pres7],
         occupancy: 'Studio (4 people), 1-Bedroom(4 people), 2-Bedroom(8 people)'
     },
     {
         id: "royalsuites",
         resortName: "The Royal Suites",
         data: `The Royal Suites of Lifestyle Holidays Vacation Resort are located just a half block from the golden sands and the sparkling silvery hues of Cofresi Beach and offers spacious deluxe and standard one and two bedroom suites in a lush and tropical surrounding. Nestled inside the world-class Lifestyles Resorts, Royal Suites features six low rise modern Mediterranean-style buildings surrounding a beautiful pool.

The resort provides a first class, five-star vacation experience. In addition to the Royal Suites swimming pool and tennis courts, our guests will enjoy other resort swimming pools, multiple pool bars and restaurants, a fully equipped gym, a relaxing spa, a kid’s club and multiple beach clubs.

Whether you come to eat well, shop, enjoy excursions or you just want to completely relax and enjoy our Caribbean beaches, your stay at the Royal Suites of Lifestyle Holidays Vacation Resort will be the vacation that you have always dreamed of.`,
         pics: [royal1, royal2, royal3, royal4, royal5, royal6, royal7],
         occupancy: '1-Bedroom (4 people),  2-Bedroom(6 people)'
     },
     {
         id: "dreamsuites",
         resortName: "Dream Suites by Lifestyle, Punta Cana",
         data: `All suites have air conditioning, cable television, phones, and ceiling fans, while the décor has a distinctive modern design, featuring dark wood furnishings with silver accents. Shaded patios and verandas provide a relaxing place to gather. Providing both service and features that are standard for a Lifestyle property, the Dream Suites offer a unique luxury accommodations experience. Dream Suites provides the easy, relaxed ambiance of the Caribbean in an opulent and elegant setting, as well as V.I.P services on property to take care of your vacation needs! The Dream Suites concept is dedicated to the luxurious enjoyment of our Members, setting this vacation club apart with a different view of Dominican life. Turn the dream into reality with Dream Suites by Lifestyle.

Junior suites with the option of 1 King Bed or 2 Queen Beds and adjoining rooms available upon request with ocean, pool or garden views.Each room comes equipped with complete bathroom including luxury Jacuzzi and hairdryer, air-conditioning, cable TV, direct dial telephone, safe(extra charge), radio-alarm clock, and iron with board, plus a terrace or balcony.A stocked mini - bar includes water, beer, and soft drinks refreshed daily at no extra charge.The room also comes equipped with a coffee maker. `,
         pics: [dream1, dream2, dream3, dream4, dream5, dream6],
         occupancy: 'Studio (Maximum 4 persons)'
     },
     {
         id: "pressuitespuntacana",
         resortName: "Presidential Suites, Punta Cana",
         data: `The resort is set within the lush tropical area of Punta Cana, with a Caribbean hideaway vibe, and elegantly appointed one, two and three bedroom suites. Fully furnished living and kitchen area, with stainless steel appliances and designer furnishings set the standard for lavish comfort.

Presidential Suites – Punta Cana is a Luxury All-In resort with 4 restaurants and 4 bars on the property for your convenience. Enjoy Italian pasta at Basil & Tomatoes, or an Asian delight at Kimonos, our Asian style restaurant.

This exclusive suites resort is a compilation of six modern 4-story high-rise and two 3-level buildings set amongst the shoreline of Cortecito. The resort was developed as a get-a-way retreat for those who enjoy a quiet environment while surrounded by luxurious services and amenities. The resort boasts two free-form pools that wind among the various accommodations and balconies. Ocean-view suites are surrounded by lush tropical gardens and close by you can find an exclusive slice of heaven we call Nirvana Beach. Punta Cana has become a top destination spot as the area offers perfect weather all year round. Presidential Suites – Punta Cana is a unique and incomparable place where you can enjoy time with your spouse, spend time with friends or live a high-end Caribbean experience with your family.

Only 25 minutes from the Punta Cana Airport and a few kilometers from the restaurant and entertainment district.

ACCOMMODATION DESCRIPTION
The gorgeous and luxurious resort has one, two and three bedroom suites available. All buildings have elevators and offer rooms with views of the garden, the pool, or the ocean. All suites are air-conditioned and the living area is set up with designer furniture, fully equipped kitchens with refrigerator, coffee makers, as well as glass and silverware, dining room with table and chairs, and balcony or terrace.  Find out more at http://www.presidentialsuitepuntacana.com/`,
         pics: [presp1, presp2, presp3, presp4, presp5, presp6, presp7, presp8],
         occupancy: '1-Bedroom (Maximum 4 persons), 2-Bedroom(Maximum 6 persons), 3-Bedroom(Maximum 8 persons)'
     },
     {
         id: "dreamsuitespuntacana",
         resortName: "Dream Suites by Lifestyle",
         data: "",
         pics: [],
         occupancy: ''
     },
     {
         id: "AllRitmo",
         resortName: "All Ritmo, Cancun",
         data: "",
         pics: [],
         occupancy: ''
     },
]



class Resorts extends React.Component{

    state = {
        id: ' ',
        resortName: '',
        data: '',
        pics: [],
        occupancy: ' ',
        customername: ' ',
        customeremail: '',
        numOfAdults: '',
        numOfChildren: '',
        checkinDate: '',
        checkoutDate: ''


    }

componentDidMount(){
    const id  = this.props.match.params.id
    const data = detailedResortInfo.filter((each) =>  each.id === id);
    window.scroll(0,0);

   
    
    this.setState({
        id: id,
        resortName: data[0].resortName,
        data: data[0].data,
        pics: data[0].pics,
        occupancy: data[0].occupancy
        
    })
        

}




render()
   
{
    
    const dataBody = {
        padding: '75px 10%',
        textAlign: 'justify'
    }
    const imageContainer = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const images = {
        filter: 'contrast(1.2)',
        maxWidth: '100vw',
        margin: '5px'
    }
    const inclusivePlan = {
        display: 'flex',
        padding: '75px 10%',
        flexWrap: ''

    }
    const book = {
        
        width: '790px',
        height: '300px',
        background: 'linear-gradient(to right, #4ca1af, #c4e0e5)',
        margin: '0 auto 75px auto',
        boxShadow: '4px 4px 10px rgba(0,0,0,.5)',
        borderRadius: '5px',
        padding: '25px',
        border: '1px solid black'
      
    }

 

    const renderInfo = () =>{
        if (this.state.id === 'tropical' || this.state.id === 'confresi' || this.state.id === 'dreamsuites' || this.state.id === 'presidential' || this.state.id === 'royalsuites' || this.state.id === 'crownvillas'){
            return(
                <section style={inclusivePlan} className="inclusive-plan">
                    <div style={{ minWidth: '50%', marginRight: '10%', color: 'black' }}>
                        <h2>All-Inclusive Plan Includes</h2>
                        <ul style={{ textAlign: 'left', lineHeight: '1.2', listStyle: 'circle' }} >
                            <li>Privileged use of all restaurants, bars, and facilities at the Resort (V.I.P areas and services exclusive for Members)</li>
                            <li>24-hour food and beverages available in select locations</li>
                            <li>All meals – access to breakfast, lunch, and dinner in any of our restaurants on property (some restaurants require advance reservations)</li>
                            <li>9 All Guest restaurants for a la carte dining
(Reservations may be required)</li>
                            <li>2 International Buffet restaurants (No reservations required)</li>
                            <li>Daytime and late snacks located throughout the property, including 11 V.I.P Lite Fare Bars</li>
                            <li>Includes: House Wine with Meals, plus Beer, Spirits, Cocktails, Juices, and Soft Drinks are available from all Bars located on the property.</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2>AMENITIES AND FACILITIES</h2>
                        <ul style={{ textAlign: 'left', listStyle: 'circle', minWidth: '40%' }}>
                            <li>7 V.I.P Exclusive Restaurants</li>
                            <li>11 Restaurants for All Guests</li>
                            <li>11 V.I.P Lite Fare Bars </li>
                            <li>14 V.I.P Exclusive Bars </li>
                            <li>12 Bars for All Guests</li>
                            <li>12+ Pools Including Exclusive Kid’s Pool Areas</li>
                            <li>ICE Nightclub</li>
                            <li>2 Entertainment Centers, Colosseum & Lights, Camera, Action Theatre</li>
                            <li>Non-Motorized Water-Sports:  Snorkeling Equipment, Boogie Boards, Kayaks</li>
                            <li>Tennis Courts</li>
                            <li>Basketball Court</li>
                            <li>Beach Volleyball Court</li>
                            <li>2 Gyms with Exercise Equipment</li>
                            <li>Shopping Areas, Including Hand-Crafted Market</li>
                            <li ><strong>6 Beaches</strong></li>
                                <li style={{ marginLeft: '15px' }}>Lifestyle Beach </li>
                                <li style={{ marginLeft: '15px' }}>Cofresi Beach</li>
                                <li style={{ marginLeft: '15px' }}>V.I.P Beach </li>
                                <li style={{ marginLeft: '15px' }}>NV Beach </li>
                                <li style={{ marginLeft: '15px' }}>Serenity Beach </li>
                                <li style={{ marginLeft: '15px' }}>Harmony Beach </li>
                            
                        </ul>
                    </div>

                </section>


        

            )
        }
    }

    const handleNameChange = (e) => {
        this.setState({
            customername: e
        })
    }

    const handleEmailChange = (e) => {
        this.setState({
            customeremail: e
        })
    }
    const handleAdultChange = (e) => {
        this.setState({
            numOfAdults: e
        })
    }
    const handleChildrenChange = (e) => {
        this.setState({
            numOfChildren: e
        })
    }
    const handleCheckinDate = (e) => {
        this.setState({
            checkinDate: e
        })
    }
    const handleCheckoutDate = (e) => {
        this.setState({
            checkoutDate: e
        })
    }

    let handleSubmitResort = (e) => {
        e.preventDefault();
       let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let adults = document.getElementById('adults').value;
        let children = document.getElementById('children').value;
        let checkin = document.getElementById('in-date').value;
        let checkout = document.getElementById('out-date').value;
        let resort = document.getElementById('resortName').value;

        let data = {
            name: name,
            email: email,
            Adults: adults,
            Children: children,
            checkIn: checkin,
            checkOut: checkout,
            resort: resort
        }
       
        fetch('https://hooks.zapier.com/hooks/catch/3956551/eboh1p/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),

        }).then(res => res.json())
            .then((response) => {
                alert('Submit was successfull, We will be in touch')
            })


    }

    return(
        <div style={{ textAlign: 'center', marginTop: '10%' }}>
            <h1>{this.state.resortName}</h1>
            <div style={dataBody}>
            <p style={{lineHeight: '1.6', whiteSpace: 'pre-wrap'}}>{this.state.data}</p><br></br><br></br>
                <h6>Room Occupancies Include:<br></br> <br></br>{this.state.occupancy}</h6>
            </div>
            <div className="book" style={book}>
                <h2>Book this resort</h2><br></br>

                <form id="book">
                        <div style={{display: 'flex', justifyContent: 'center'}}>

                                <div style={{ flexBasis: '40%', textAlign: 'left'}}>
                                <div style={{ textAlign: 'right' }}> 
                                    <label for="name">Name:</label>
                                    <input type="text" required id="name" value={this.state.customername} name="name" onChange={(event) => handleNameChange(event.target.value)} /><br></br>
                                        
                                        
                                    <label for="email">Email: </label>
                                    <input name="email" type="email" required id="email" value={this.state.customeremail} onChange={(event) => handleEmailChange(event.target.value)} /><br></br>
                                        
                                    <label for="adults">Number of Adults:     </label>
                                        <input name='adults' type="number" required id="adults" value={this.state.numOfAdults} onChange={(event) => handleAdultChange(event.target.value)} /><br></br>
                                    
                                    <label for="children">Number of Children:</label>
                                        <input name='children' type="number" required id="children" value={this.state.numOfChildren} onChange={(event) => handleChildrenChange(event.target.value)} /><br></br>
                                </div> 
                        </div>


                            <div style={{flexBasis: '50%', textAlign: 'right'}}>
                            
                                <label for="in-date">Check-In:</label>
                                    <input name='checkin-date' type="date" required id="in-date" value={this.state.checkinDate} onChange={(event) => handleCheckinDate(event.target.value)} /><br></br>
                            
                                <label for="out-date">Check-Out:</label>
                                    <input name='checkout' type="date" required id="out-date" value={this.state.checkoutDate} onChange={(event) => handleCheckoutDate(event.target.value)} /><br></br>
                                
                                <label for="out-date">Location</label>
                            <input name='location' type="text" required id="resortName" readOnly value={this.state.resortName}/><br></br>
                                
                                <input className="btn-submit" type="submit" value="Submit" onClick={(e) => handleSubmitResort(e)} />

                            </div>
                        </div>
                    </form>
            </div>
            <div style={imageContainer}>
                {this.state.pics.map((x, index)=> {
                    return(
                        <div key={index}>
                        <img style={images} src={x} alt="Tropical Suite Pictures"></img>
                        </div>
                    )
                })
                }
                {renderInfo()}
            </div>
        </div >
    )
}



}




export default Resorts;