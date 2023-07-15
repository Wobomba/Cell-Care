import './ServicesTripStyles.css';

function ServicesTripData(props){
    return(
        <div className='t-card'>
            <div className='t-image'>
                <img alt ='images' src ={props.image}/>
            </div>
            <h4 className='headerss'>{props.heading}</h4>
        </div>
    )
}

export default ServicesTripData;