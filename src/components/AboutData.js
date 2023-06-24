import Portfolio from '../assets/Exp72.jpeg'
import './AboutData.css'
function AboutData() {
    return (
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <img src={Portfolio} alt='TLC' />
                </div>

                <div className='flex-item-right'>
                    <h2>TLC Safaris</h2>
                    <p>TLC Safaris is the best tour and travel agency in East Africa that
                        has experience in organizing affordable safaris in Uganda, Kenya,
                        Tanzania (Zanzibar) and Rwanda.</p>
                    <p>With a commitment to safety, quality and value for money, TLC Safaris
                        focuses on providing for our clients the best experience in all the
                        services we offer, all over East Africa.</p>
                </div>

            </div>
    )
}

export default AboutData;