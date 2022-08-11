import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer-wrapper ">
                    <form class="footer-wrapper__form footer-form" action="" method="get">
                        <input class="footer-form__input" type="text" placeholder="Поиск"></input>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;