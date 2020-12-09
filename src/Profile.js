import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';



class Profile extends Component {
  
    
   
    render (){
        
        return (
           
         
            <div>
                <div className="container-fluid profile">
                <div className="row header" >
                <div className="col-sm-4 name">
                  
                 <p> Okunniga Omolola </p>
                </div>
                <div className="col-sm-6 customerprofile">
                    <strong>My Profile</strong>
                </div>
                </div>
                <div className="row header2">
                    <div className="col-sm-4 name2">
                    <dd><a href="profile">My profile</a></dd>
                       <dd><a href="details">My order</a></dd>
                       <dd><a href="#/">Notification</a></dd>
                       <dd><a href="#/">Settings</a></dd>
                       <dd><a href="#/">Log out</a></dd>
                       
                                
                           
                    </div>
                    <div className="col-sm-6 customerprofile2">
                    <div className="col-sm-8 customerprofile4">
                        
                       
                    <h6> Name <br/><strong>Okunniga Mary Omolola.</strong> </h6>
                   
                <h6> Email <br/><strong>okunnigaomolola@gmail.com</strong></h6>
               
                <h6> Phone Number <br/><strong>07035764622</strong></h6>
               
                <h6>Address <br/><strong>60, Modupe Johnnson, Adeniran Ogunsanya Street, Surulere, lagos</strong></h6> 
                </div>
                    <div className="col-sm-4 customerprofile3">
                    <h6> Profile image </h6>
                    <img src="https://res.cloudinary.com/morayo/image/upload/v1607277253/IMG_20201203_132823_wti8cy.jpg" alt="profile"/><br/><br/>
                   
                  
                
               
                    <Button variant="success" type="file" id="myFile">Upload</Button>
                    
                    <div>
                    
   
                 </div>
                </div>
                    
              
                </div>
                </div>
                
                </div>
               
              
                
            </div>
             
        )
        
    }
    
}

export default Profile;