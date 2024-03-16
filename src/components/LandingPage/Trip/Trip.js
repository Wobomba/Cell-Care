import './TripStyles.css';
import TripData from './TripData'; 

import Trip1 from '../../../assets/Exp4.jpeg';
import Trip2 from '../../../assets/Exp61.jpeg';
import Trip3 from '../../../assets/mabira-trek.jpg';


function Trip(){
    return(
        <div className='trip'>


            <h1>Recent Trips</h1>
            <p>Discover the untamed beauty of the African Savannah with our thrilling safari excursions.</p>

            <div className='tripcard'>
                <TripData 
                image={Trip1}
                heading="Tubing on the Nile"

                text="Get ready for an exhilarating adventure as you embark on a tubing excursion on the mighty Nile River. 
                Feel the rush of adrenaline as you navigate the swirling currents and cascading rapids, 
                immersing yourself in the heart of nature's power. Brace yourself for a truly unforgettable experience that 
                combines the thrill of whitewater 
                tubing with the awe-inspiring beauty of the Nile's breathtaking scenery."
                />
                <TripData 
                image={Trip2}
                heading="Mombasa Blue Waters"
                text="Immerse yourself in the captivating allure of Mombasa's azure waters, where a world 
                of tranquility and natural beauty awaits. Picture yourself standing on the soft, powdery 
                sands, gazing out at the shimmering expanse of the Indian Ocean. Mombasa's blue waters 
                beckon you to indulge in an experience that combines breathtaking vistas, pristine beaches, 
                and a sense of serenity that soothes the soul."
                />
                <TripData 
                image={Trip3}
                heading="Trekking Mabira Forest"
                text="Prepare to immerse yourself in the untamed beauty of Mabira Forest as you embark on an
                 unforgettable trek through its verdant depths. Located in the heart of Uganda, this enchanting
                  forest invites you to step into a world of lush greenery, exotic wildlife, and captivating 
                  natural wonders. Get ready to explore a haven of biodiversity, where every step reveals a 
                  new surprise and
                 every moment is filled with awe-inspiring discoveries."/>
            </div>
        </div>
    );
}

export default Trip;