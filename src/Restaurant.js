import React, {Component} from 'react';

class Restaurant extends Component {
    
    render() {
        return (
            <div>
                <p>{this.restaurant.name}</p>
                <p>{this.restaurant.state}</p>
                <p>${this.restaurant.city}</p>
            </div>
        );
    }
}

export default Restaurant;