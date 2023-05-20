import './DestinationStyles.css'
import Mountain1 from '../assets/bungee.jpg'
import Mountain2 from '../assets/jinjawater.webp';
import Mountain3 from '../assets/murchison2.jpg';
import Mountain4 from '../assets/murchison3.avif';
import Mountain5 from '../assets/Baboon.jpg';
import Mountain6 from '../assets/bwindi.jpg';
import Mountain7 from '../assets/QEL.jpg';
import Mountain8 from '../assets/murchison.avif';
import DestinationData from './DestinationData';

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className='first-des-reverse'
                heading='Jinja'
                text='It is blessed to habor the source of the Nile.Activities like nature walks within Mabira Forest which is located along the journey to Jinja,
                zip lining, flat water tubing, quad biking, water sliding, boat cruise, jet skying, kayaking, horse riding, rafting, bungee jumping,
                water massage, and swimming are found here.'
                img1={Mountain1}
                img2={Mountain2} />

            <DestinationData
                className='first-des'
                heading='Murchison Falls National Park'
                text='It is the oldest and largest safari park in Uganda. Situated at the end of the albertine region, 305kilometers North of Kampala in Masindi District, it is locally 
                known as Kabalega National Park. It covers 4000kilometers. Activities like game drives, chimpanzee trekking, boat cruise,
                birding, sports fishing, nature walks, hiking on top of hills.'
                img1={Mountain3}
                img2={Mountain4} />

            
            <DestinationData
                className='first-des-reverse'
                heading='Bwindi Impenetrable National Park'
                text='Located in South Western Uganda, Bwindi first gazetted in 1932, is about 321 square kilometers situated in 3 districts: Rukungiri, Kisoro and Kabale.
                Activities like gorilla trekking, bird watching, nature walks, and Batwa cultural tour are found here.'
                img1={Mountain5}
                img2={Mountain6} />

            
            <DestinationData
                className='first-des'
                heading='Queen Elizabeth National Park'
                text='Named after the former queen of the England, the national park is located in Western Uganda and stretches through Kasese, Bushenyi and Bundibugyo. Activities like
                game viewing, boat cruise, chimpanzee trekking, birding, and the tree climbing lions of Isasha are found here.'
                img1={Mountain7}
                img2={Mountain8} />

        </div>
    );
}

export default Destination;