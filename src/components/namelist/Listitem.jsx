import React from 'react';
import moment from 'moment';
import './LIstitem.css';

function Listitem(props){
    return(
        <React.Fragment>
            <li className='list-group-item'>


                <div className="row align-items-center">
                    <div className="col-2">
                        <p style={{color:'green'}}>
                            <img 
                            src={props.picture} 
                            className="border border-dark rounded-circle"/> 
                        </p>
                    </div>

                    <div className="col-10">
                        <h6>{props.name}</h6>
                        <p>Address: {props.address}</p>
                        <p>Email: {props.email}</p>
                        <p>Birthday: {moment(props.dob).format('DD-MM-YYYY')}</p>  
                    </div>
                </div>
                
                
                
                
                
            </li>
        </React.Fragment>
    );
}


export default Listitem;
