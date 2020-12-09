import React from 'react';
import Profile from './Profile';

import Details from './Details';

import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
    return(
            <div className='container-fluid'>
           
                
            <BrowserRouter>
                <Nav/>
                
                <Route>
                <Route path='/Profile'  component={Profile}/>
                <Route path='/Details' component={Details}/>
                
               
                
                </Route>
                
                
               
                 
                       
                   
                                
            </BrowserRouter>
            
           
            </div>
       
    )

}

export default App;