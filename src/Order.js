import React, {Component} from 'react';
import axios from 'axios';



class Order extends Component{
    state={ restaurant:{},
   
};
componentDidMount() {
axios.get("https://indapi.kumba.io/webdev/assignment")
.then (response => this.setState({restaurant:response.data.restaurant}))
}

render(){
    const {name, state, city}= this.state.restaurant

    return(
        
        <div>
            <div className="container-fluid details">
                <div className="row ">
                    <div className="col ">
                    <h4><center>Restaurant Details</center></h4>
                    <p>Restaurant name:<strong>{name}</strong></p>
                    <p>State:<strong>{state}</strong></p>
                    <p>City:<strong>{city}</strong></p>  
                    
                    </div>
                    </div>
                  
                    
                     </div>
                    
                 
                   
    </div>
    )
}
}


export default Order;