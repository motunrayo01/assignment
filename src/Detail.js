import React, {Component} from 'react';
import axios from 'axios';
import Item from './Item';




class Detail extends Component{
    state={ assignment:[{}],
       items:[{}],
       user:[],
       restaurant:[{}],
    }
    sum(key) {
        return this.reduce((a, b) => a + (b[key] || 0), 0);
    }
       
    

       

componentDidMount() {
axios.get("https://indapi.kumba.io/webdev/assignment")
.then (response => this.setState({assignment:response.data.items}))

};

render(){ 
    return(
        <div>
            
           
            <div className="container-fluid details">
            <h4><center>Order Details</center></h4>
            <div className="row">
                        <div className="col-sm-4">
                            <div className="description"><h5>Item Description</h5></div>
                        </div>
                        <div className="col-sm-4">
                            <div className="description"><h5>Price</h5></div>
                        </div>
                        <div className="col-sm-4">
                            <div className="description"><h5>Tax</h5></div>
                        </div>
                    </div>
                    
                        {this.state.assignment.map((item)  =>
                    <Item key={item.id} item={item}/>
                        )} 
                        <hr/>
                        <div className="container-fluid">
                        <div className="row">
                                        <div className="col-sm-4 ">
                        <div >Total quantity:</div>
                        {this.state.assignment.length}
                        </div>
                        <div className="col-sm-4 ">
                        
                        <div >Total Amount :</div>
                       { this.state.assignment.reduce((a,v) =>  a = a + v.price , 0 ) }
                        </div>
                        <div className="col-sm-4">
                            <div>Total tax:</div>
                            { this.state.assignment.reduce((a,v) =>  a = a + v.tax_pct , 0 ) }
                           
                        </div>
                        </div>
                    </div>
                    </div>
           
           
           
               
            
                    
       </div>
    )
}
}


export default Detail;