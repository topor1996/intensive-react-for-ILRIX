import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

function Card({item}) {   

    return (
        <li class="products__item" >
            <NavLink key={item.id} to={`/about/${item.id}`}>
                <div class="products__item-block">
                    <div className='products__item-image__wrapper'>
                        <img className='products__item-image' src={item.thumb} alt={item.alt} />
                    </div>
                    <div class="products__item-discount ">
                        <div class="products__item-discount-procents">
                            <p>{item.procent}%</p>
                        </div>
                        <div class="products__item-discount-desc">
                            <p>{item.alcohol}</p>
                        </div>
                    </div>
                    <div class="products__item-name">
                        <div class="products__item-name-title">
                            <p>{item.name}</p>
                        </div>
                        <div class="products__item-name-desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

export default React.memo(Card);