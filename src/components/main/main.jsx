import React from 'react';
import './main.css';
import Card from '../card/card';

function Main() {
    return (
        <main class="main">
            <div class="container">
                <section class="main-block">
                    <div class="main-block__products">
                        <div class="products">
                            <ul class="products__list">
                                <Card items={this.state.currentItems} onAdd={this.addToOrder}/>
                                <Card items={this.state.currentItems} onAdd={this.addToOrder}/>
                                <Card items={this.state.currentItems} onAdd={this.addToOrder}/>
                                <Card items={this.state.currentItems} onAdd={this.addToOrder}/>
                                <Card items={this.state.currentItems} onAdd={this.addToOrder}/>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;