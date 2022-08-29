import React from 'react';
import '../Header.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categoryNew, categoryAll, categorySweet, categoryTop, categoryStrong } from '../../../redux/reducers/filterSlice';

function Categories({category}) {    
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    const dispatch = useDispatch(); // eslint-disable-next-line 
       
    useEffect(() => {
        switch(activeItem) {            
            case 0: 
                dispatch(categoryNew()); 
            break; 
            case 1: 
                dispatch(categorySweet()); 
            break; 
            case 2: 
                dispatch(categoryTop()); 
            break; 
            case 3: 
                dispatch(categoryStrong()); 
            break; 
            default:
                dispatch(categoryAll()); 
        }               
    }, [activeItem])

    return (
        <ul className='header-menu__list'>
            <li className='header-menu__item'>
                <a href='/#' className={activeItem === null ? 'header-menu__link active' :'header-menu__link'} onClick={() => onSelectItem(null)}>Все</a>
            </li>            
            {category.map((name, index) => (
                <li className='header-menu__item'>
                    <a href='/#' key={index} className={activeItem === index ? 'header-menu__link active' :'header-menu__link'} onClick={() => onSelectItem(index)} >{name}</a>
                </li>
                
            ))} 
        </ul>        
    );
}

export default Categories;