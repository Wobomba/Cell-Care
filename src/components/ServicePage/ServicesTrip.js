import './ServicesTripStyles.css';
import TripData from './ServicesTripData'; 

import Trip1 from '../../assets/Exp4.jpeg';
import Trip2 from '../../assets/Exp61.jpeg';
import Trip3 from '../../assets/honeymoon.jpg';
import Honeymoon from '../../assets/honeymoon.jpg';
import Guide from '../../assets/guide.jpg';
import Retreat from '../../assets/retreat.jpg';
import Plans from '../../assets/plans.jpg';
import Photos from '../../assets/photography.webp';
import Tent from '../../assets/tent.jpg';

function ServicesTrip(){
    return(
        <div className='trip'>            

            <div className='tripcard'>
                <TripData 
                image={Trip1}
                heading="Safari Packages"
                />
                <TripData 
                image={Trip2}
                heading="Private Trips"
                />
                <TripData 
                image={Honeymoon}
                heading="Honeymoon Packages"/>
            </div>

            <div className='tripcard'>
                <TripData 
                image={Guide}
                heading="Tour Guiding"
                />
                <TripData 
                image={Retreat}
                heading="Retreats"
                />
                <TripData 
                image={Trip3}
                heading="Airport Drops"/>
            </div>

            <div className='tripcard'>
                <TripData 
                image={Plans}
                heading="Events Planning"
                />
                <TripData 
                image={Photos}
                heading="Photography"
                />
                <TripData 
                image={Tent}
                heading="Tents Booking"/>
            </div>

        </div>
    );
}

export default ServicesTrip;