import './DestinationStyles.css'
import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/5.jpg';
import Mountain4 from '../assets/8.jpg';
import DestinationData from './DestinationData';

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className='first-des-reverse'
                heading='Mt. Daguldul, Batangas'
                text='Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes. Lost in Translation: A couple from the United States decided to take a trip to Japan. They were excited to immerse themselves in Japanese culture, but they quickly realized that language barriers can be a real challenge. On their first night in Tokyo, they went to a local restaurant and tried to order some sushi. They thought they had communicated their order clearly, but when the food arrived, they were surprised to see that they had accidentally ordered a plate of raw horse meat. Needless to say, they were not fans.
             A couple from Australia decided to take a t
             rip to Italy to experience the countrys famous food and wine. They visited the vineyards of Tuscany and sampled some of the best Chianti wines in the world. They also tried a variety of Italian dishes, including pizza, pasta, and gelato. The couple was amazed by the quality and freshness of the ingredients, and they returned home with a newfound appreciation for Italian'
                img1={Mountain1}
                img2={Mountain2} />

            <DestinationData
                className='first-des'
                heading='Taal Volcano, Batangas'
                text='Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes. Lost in Translation: A couple from the United States decided to take a trip to Japan. They were excited to immerse themselves in Japanese culture, but they quickly realized that language barriers can be a real challenge. On their first night in Tokyo, they went to a local restaurant and tried to order some sushi. They thought they had communicated their order clearly, but when the food arrived, they were surprised to see that they had accidentally ordered a plate of raw horse meat. Needless to say, they were not fans.
             A couple from Australia decided to take a t
             rip to Italy to experience the countrys famous food and wine. They visited the vineyards of Tuscany and sampled some of the best Chianti wines in the world. They also tried a variety of Italian dishes, including pizza, pasta, and gelato. The couple was amazed by the quality and freshness of the ingredients, and they returned home with a newfound appreciation for Italian'
                img1={Mountain3}
                img2={Mountain4} />
        </div>
    );
}

export default Destination;