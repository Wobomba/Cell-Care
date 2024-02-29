import './AboutData.css'
import ceo from '../assets/Tommy.jpg'

function AboutData() {
    return (
        <div class="flex-container">
            <div class = "rightt">
                <img src={ceo} alt='TLC' />
            </div>
            <div class = "leftt">
                <h2>The Lord Cares (TLC) Safaris</h2>
                <p>Welcome to our world of immersive travel experiences, where dreams become destinations
                    and journeys become cherished memories. We are a passionate team of travel enthusiasts
                    dedicated to curating exceptional tours that offer unique insights into diverse cultures,
                    breathtaking landscapes, and extraordinary adventures. With our unwavering commitment to quality,
                    personalized service, and attention to detail,
                    we invite you to join us on a remarkable voyage of discovery.</p>
                <h3>Our Philosophy</h3>
                <p>Started by Tommy Choudry, our philosophy is the belief that travel is not merely about visiting places;
                    it is about connecting with the essence of a destination. We strive to create transformative experiences that immerse you in the local culture, foster meaningful connections, and leave a positive impact on the communities we encounter. We understand that every traveler is unique,
                    and our goal is to tailor each itinerary to suit your individual interests, preferences,
                    and travel style.</p>
                <h3>Exceptional Destinations</h3>
                <p>We have carefully curated an enticing collection of destinations that span the East African region,
                    each with its own allure and magic waiting to be explored. From the pristine beaches
                    of Tanzania (Zanzibar) to the variety of ancient sites in Uganda, from the bustling streets of Nairobi
                    to the vast wilderness of the African savannah, our destinations offer a tapestry of captivating
                    experiences that will captivate your senses and ignite your wanderlust.</p>

            </div>

            <div className='experience-div'>
                <h3>Unforgetable Experiences</h3>
                <p>Our itineraries are meticulously designed to provide you with a seamless blend of iconic
                    attractions and hidden gems, ensuring an enriching and authentic travel experience.
                    Whether you're a history enthusiast, a nature lover, a culinary connoisseur, or an adventure
                    seeker, we have carefully crafted journeys that cater to diverse interests. Engage in cultural
                    exchanges with local communities, embark on thrilling outdoor expeditions, savor mouthwatering
                    flavors, and create memories that will last a lifetime.</p>
                <h3>Expert Guides and Partners</h3>
                <p>To enhance your travel experience, we collaborate with a network of seasoned local guides and
                    experts who are passionate about sharing their knowledge and ensuring your journey is both
                    educational and enjoyable. Our handpicked guides possess a deep understanding of their
                    destinations, providing valuable insights, fascinating anecdotes,
                    and a personalized touch that brings each location to life.</p>
                <h3>Responsible Travel</h3>
                <p className='last'>We believe in responsible and sustainable travel practices. We strive to minimize our
                    environmental footprint, support local communities, and preserve the natural and cultural
                    heritage of the places we visit. We partner with responsible accommodations, promote eco-friendly
                    transportation options, and engage in community-driven
                    initiatives that promote socio-economic development and conservation efforts.</p>              
            </div>

        </div>


    )
}

export default AboutData;