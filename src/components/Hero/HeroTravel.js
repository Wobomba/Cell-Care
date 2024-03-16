import './HeroTravelStyle.css';

// using props to make the section dynamic
function HeroTravel(props) {
    return (
        <>
        <div className = {props.cName}>
            <img alt = "HerpImg" 
            src = {props.heroImg}/>
            <div className = 'hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href = {props.url} className = {props.btnClass}> {props.buttonText}</a>

            </div>
        </div>
        </>
    );
}

export default HeroTravel;