import React from 'react';
import './Card.css';
import empty  from '../../image/empty.png'


function Empty() {   

    return (       
        <li class="products__item" >
            <div class="products__item-block">
                <div className='products__item-image'>
                    <img src={ empty } alt="Изображение напитка" />
                </div>
                <div class="products__item-title">
                    <p>Ничего не найдено</p>
                </div>
                <div class="products__item-name">
                    <div class="products__item-name-title">
                        <p>Пусто</p>
                    </div>
                    <div class="products__item-name-desc">
                        <p>Попробуйте изменить запрос</p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default React.memo(Empty);