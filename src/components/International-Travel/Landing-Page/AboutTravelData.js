import { Component } from 'react';
import './AboutTravelDataStyle.css'


class AboutTravelData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>

        </div>
        )
    }
}

export default AboutTravelData;