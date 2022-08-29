import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

function About({item}) {     
    const navigate = useNavigate();             
    
    return (
        <main className="main">
            <div className="container">  
                <section className='main-block__about'>
                    <button className="button__back" onClick={() => navigate(-1)}></button> 
                    <div className='about__image-wrapper'>
                        <img className='about__image' src={item.thumb} alt={item.alt}/>
                    </div>    
                    <div className='about__description'>
                        <h3 className='about__title'>
                            {item.name}
                        </h3>
                        <h4 className='about__subtitle'>
                            {item.desc}
                        </h4>
                    </div>   
                    <div className='about__info'>
                        <p className='about__info-title'>Ингредиенты</p>
                        <div className='about__info-content'>                               
                            {item.ingredients?.map(item => (
                                <div className='about__info-list' key={item.ingredient}>
                                    <span className='about__info-item'>{item.ingredient}</span> 
                                    <span className='about__info-value'>{item.amount}</span>
                                </div>
                            ))}                                                                                     
                        </div>
                    </div> 
                    <div className='about__cooking'>
                        <p className='about__cooking-title'>Как готовить</p>
                        {item.cooking}
                    </div> 
                                       
                </section>                         
            </div> 
        </main>
    );
}


export default React.memo(About);