import '../components/ServicesTripStyles.css';
import TripData from './ServicesTripData'; 

import Trip1 from '../assets/Exp4.jpeg';
import Trip2 from '../assets/Exp61.jpeg';
import Trip3 from '../assets/mabira-trek.jpg';


function ServicesTrip(){
    return(
        <div className='trip'>


            <h1>What We Offer</h1>
            

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
                image={Trip3}
                heading="Honeymoon Packages"/>
            </div>

            <div className='tripcard'>
                <TripData 
                image={Trip1}
                heading="Tour Guiding"
                />
                <TripData 
                image={Trip2}
                heading="Retreats"
                />
                <TripData 
                image={Trip3}
                heading="Airport Drops"/>
            </div>

            <div className='tripcard'>
                <TripData 
                image={Trip1}
                heading="Events Planning"
                />
                <TripData 
                image={Trip2}
                heading="Photography"
                />
                <TripData 
                image={Trip3}
                heading="Tents Booking"/>
            </div>

        </div>
    );
}

export default ServicesTrip;