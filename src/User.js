import React, {Component} from 'react';
import axios from 'axios';

class User extends Component{
    state={ 
      
       
        user:{}

       
};
componentDidMount() {
axios.get("https://indapi.kumba.io/webdev/assignment")



.then (response => this.setState({user:response.data.user}))
}
//constructor(props) {
    //super(props);

  
   

  



render(){
  
   
    const {name, address, phone}= this.state.user
    
 
    
    return(
        
        <div>
           <div className="container details">
                <div className="row">
                    <div className="col-sm-3 ">
                       
                       
                    <h4>Customer Details</h4>
                    <p>Name:<strong>{name}</strong></p>
                    <p>Address:<strong>{address}</strong></p>
                    <p>Phone:<strong>{phone}</strong></p> 
                    </div>
                    </div>
                    </div>
                   
    </div>
    )
}
}


export default User;