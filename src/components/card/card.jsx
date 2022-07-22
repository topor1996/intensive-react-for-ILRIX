import React from 'react';


function Card() {
    return (
        <li class="products__item">
            <div class="products__item-block blackberry">
                <div class="products__item-discount ">
                    <div class="products__item-discount-procents">
                        <p>30%</p>
                    </div>
                    <div class="products__item-discount-desc">
                        <p>Алкоголь</p>
                    </div>
                </div>
                <div class="products__item-name">
                    <div class="products__item-name-title">
                        <p>Blackberry</p>
                    </div>
                    <div class="products__item-name-desc">
                        <p>Освежающий напиток</p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Card;