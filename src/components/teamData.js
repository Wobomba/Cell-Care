import './teamStyles.css';

function teamData(props){
    return(
        <div className='t-card'>
            <div className='t-image'>
                <img alt ='images' src ={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default teamData;