import React , { Component } from "react";
import  "./Business.css"



class Business extends Component {
    
    render () {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.imageSrc} alt=''/>
                </div>
                <h2>{this.props.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                    <p>{this.props.address}</p>
                    <p>{this.props.city}</p>
                    <p>{this.props.state}</p>
                    </div>
                    <div className="Business-reviews">
                    <h3>{this.props.category}</h3>
                    <h3 className="rating">{this.props.rating}</h3>
                    <p>{this.props.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }


}

export default Business;