import './TripStyles.css';
import TripData from './TripData'; 
<<<<<<< HEAD
import Trip1 from '../assets/Exp4.jpeg';
import Trip2 from '../assets/Exp61.jpeg';
import Trip3 from '../assets/mabira-trek.jpg';


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

                
                <TripData 
                image={Trip2}
                heading="The Coast of Mombasa"
                text="                
                Experience the epitome of bliss as you embark on a captivating coastal safari along the stunning shores of 
                Mombasa. Discover a world where turquoise waters caress pristine white sands, 
                and palm trees sway in the gentle ocean breeze. Immerse yourself in the vibrant culture and 
                rich history of this enchanting coastal paradise. Explore lush mangrove forests, encounter exotic marine 
                life, and indulge in tantalizing local cuisine. From thrilling water sports to serene beachside relaxation,
                a coastal safari in Mombasa offers an unrivaled fusion of adventure and tranquility.
                Get ready to be swept away by the beauty of this coastal gem and create 
                cherished memories that will linger in your heart forever"
                />
                <TripData 
                image={Trip3}
                heading="Nature walks in Mabira Forest"
                text="                
                Venture into the lush embrace of Mabira Forest, where nature's symphony awaits.
                 Lose yourself in a captivating journey through towering canopies, where sunlight dances upon the emerald foliage.
                  Every step unveils a treasure trove of biodiversity, with rare birds serenading your senses and curious monkeys 
                  peeking through the branches. Immerse yourself in the forest's serenity as you stroll along enchanted pathways, 
                  guided by the gentle rustling of leaves and the fragrance of wildflowers. Engage with knowledgeable guides who 
                  unlock the secrets of this enchanting ecosystem, sharing tales of ancient trees and medicinal plants. 
                  Let the forest's tranquility wash over you, rejuvenating your spirit and leaving you with memories that 
                  whisper of a profound connection to Mother Earth. Embark on a nature walk in Mabira Forest,
                 where the wonders of the wild come alive in every step you take."

                />
            </div>
        </div>
    );
}

export default Trip;