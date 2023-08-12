import './teamStyles.css';
import teamData from './teamData'


import ceo from '../assets/Tommy.jpg';
import tech from '../assets/Newton.jpg';



function team(){
    return(
        <div className='trip'>
            <h3>Meet The Team</h3>
    

            <div className='tripcard'>
                <teamData 
                image={ceo}
                heading="Lokwi Tom Choudry"
                text="CEO"
                />

                <teamData
                image={tech}
                heading="Wobomba Isaac Newton"
                text="Full Stack Developer"
                />
                
            </div>
        </div>
    );
}

export default team;