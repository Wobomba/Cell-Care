import './DestinationStyles.css'
import Mountain1 from '../assets/bungee.jpg'
import Mountain2 from '../assets/jinjawater.webp';
import Mountain3 from '../assets/murchison2.jpg';
import Mountain4 from '../assets/murchison3.avif';
import Mountain5 from '../assets/Baboon.jpg';
import Mountain6 from '../assets/bwindi.jpg';
import Mountain7 from '../assets/QEL.jpg';
import Mountain8 from '../assets/murchison.avif';
import Mountain9 from '../assets/Mountain-Elgon_N.P.jpg';
import Mountain10 from '../assets/Mount-Elgon-National-Park-750x409.jpg';
import Mountain11 from '../assets/Kidepo-Valley-National-Park-1.jpg';
import Mountain12 from '../assets/lisette-verwoerd-1483169-unsplash.png';
import Mountain13 from '../assets/3-days-semuliki-national-park-safari-a-visit-to-the-sempaya-hot-springs.jpg';
import Mountain14 from '../assets/FFFFFF87.jpg';
import Mountain15 from '../assets/dixon-newman-XmIyq1ai8Gk-unsplash-eland-lmnp16x9.webp';
import Mountain16 from '../assets/download.jpg';
import Mountain17 from '../assets/Gorillas-in-Mgahinga-Gorilla-National-Park.jpg';
import Mountain18 from '../assets/mgahinga-national-park.jpg';
import Mountain19 from '../assets/Rwenzori-Mountain-National-Park.jpg';
import Mountain20 from '../assets/rwenzori-mountains-summit.webp';
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

            
            <DestinationData
                className='first-des-reverse'
                heading='Mount Elgon National Park'
                text='Located in the eastern part of Uganda, the park is a national safari destination
                that covers about 4000square kilometers, featuring Mount. Elgon,
                 the largest volcanic mountain in the world. It is also blessed with vegetation like bamboo belts, montane forests etc.
                 Activities like birding, hiking to Sipi Falls and safari walks are found here.'
                img1={Mountain9}
                img2={Mountain10} />

            
            <DestinationData
                className='first-des'
                heading='Kidepo National Park'
                text='Located in Northern Uganda consisting of the Kidepo Valley, Rolling Hills, Narus Valley,
                and hot springs like Kangarok hot springs, Kidepo National Park covers an area of 1442 
                square kilometers. Activities like game drives, birding, nature walks and sand bed along river kidepo are found here.'
                img1={Mountain11}
                img2={Mountain12} />

            <DestinationData
                className='first-des-reverse'
                heading='Semuliki National Park'
                text='The park is one of the newest national parks in Western Uganda which covers an area of about 220square kilometers.
                 It habors a number of animal species like warthogs, a leopard, pygmy hippos, white colobus monkeys
                 bush babies etc.'
                img1={Mountain13}
                img2={Mountain14} />

            <DestinationData
                className='first-des'
                heading='Lake Mburo National Park'
                text='It is surrounded by towns like Mbarara, Isingiro and Kiruhura. The park covers a part of about
                270 square kilometers.'
                img1={Mountain15}
                img2={Mountain16} />

            <DestinationData
                className='first-des-reverse'
                heading='Mgahinga Gorilla National Park'
                text='This is the smallest national park, and is located in the extreme south western part of Uganda
                in Kisoro District. It is the heart of Virunge Volcanic Mountain Zone.'
                img1={Mountain17}
                img2={Mountain18} />  

            <DestinationData
                className='first-des'
                heading='Rwenzori Mountains National Park'
                text='It forms the boundaries of the Western Arm of the rift valley. It covers an area of about 1000
                square kilometers and is located in the Rwenzori Mountains in Kasese District, Sout Western Uganda. 
                Activities like mountain climbing, birding, hiking and nature walks are found here. '
                img1={Mountain19}
                img2={Mountain20} />  


        </div>
    );
}

export default Destination;