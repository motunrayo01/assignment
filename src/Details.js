import React, {Component} from 'react';
import Detail from './Detail'
import User from './User'
import Order from './Order';



class Details extends Component{
render(){ 

    return(
        <div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-3">
                <Order/>
            </div>
            <div className="col-sm-3">
                <User/>
            </div>
            <div className="col-sm-6">
                <Detail/>
            </div>
            </div>
          </div>
               
            
                    
       </div>
    )
}
}


export default Details;