import React, {Component} from 'react';

class Item extends Component {
    
    
    render() {
        
        return (
            <div>
                <div>
                <div className="container-fluid ">
                    <div className="row" >
                        
                        <div className="col-4 ">
                           
                        <strong>{this.props.item.name}</strong>
                        
                        </div>
                        <div className="col-4">
                       
                        <strong>{this.props.item.price}</strong>
                        
                        </div>
                       
                       
                        <div className="col-4">
                          
                       
                        <strong>{this.props.item.tax_pct}</strong>  
                        </div>
                    </div>
                    </div>
                </div>
              

            </div>
        );
    }
}

export default Item;