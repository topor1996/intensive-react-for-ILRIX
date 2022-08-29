import React, { useState, useEffect } from 'react';
import './Footer.css';
import { useDispatch } from 'react-redux';
import { filteredCoctails } from '../../redux/reducers/filterSlice';


function Footer() {    
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filteredCoctails(value))
    })
 
    return (
        <footer className="footer">
            <div className="container">                
                <input className="search" placeholder='Поиск' onChange={(event) => setValue(event.target.value)}></input>                              
            </div>         
        </footer>
    );
}

export default Footer;