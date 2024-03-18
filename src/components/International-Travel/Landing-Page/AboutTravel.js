import './AboutTravelDataStyle.css'
import ceo from '../../../assets/KDP_8360.jpg'


const AboutTravel = () => {
    return (
        <div class="flex-container">
            <div class="flex-item-left">
                <img src={ceo} alt='TLC' />
            </div>
            <div class="flex-item-right">
                <h2 className='develop'>Develop a deep Affection for Africa</h2>
                <p>TLC offers a wide range of tour packages to suite any individual traveller, tour operator's budget.From the open 
                    savannah of national parks such as Murchison and Kidepo to the coastlines of Kenya and Zanzibar, there
                    is something in Africa to delight every visitor. 
                </p>
                
                <p>It is here that we can see some of the largest land animals in the world, 
                    living out their lives in the vast open spaces of this immense continent. It is easy to fall in 
                    love with Africa and every year millions of people do, vowing to return time and again.</p>
                
                <p>Below you can see a selection of the tours and holidays we offer, covering an area from Uganda all the way
                    up to South Africa.</p>

            </div>
        </div>


    );
}

export default AboutTravel;