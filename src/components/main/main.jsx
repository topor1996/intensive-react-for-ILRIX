import React, { useEffect } from 'react';
import Card from '../Card/Card';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoctails, selectCoctails } from '../../redux/reducers/filterSlice';
import Empty from '../Card/Empty';


function List() {    
    const dispatch = useDispatch();
    const {status, error, coctails} = useSelector(selectCoctails);

    useEffect(() => {
      dispatch(fetchCoctails());      
    }, [dispatch]);   
   
    if (status === 'loading') {
        return <div classNameName='status'>Загрузка...</div>;
    } else if (status === 'rejected') { 
        return <div classNameName='status'>Ошибка: {error.message}</div>
    } else if (coctails.length === 0) {    
        return (
            <main className="main">
                <div className="container">
                    <section className="main-block__products">
                        <div className="products">
                            <ul className="products__list">
                                <Empty />           
                            </ul>
                        </div>                                                           
                    </section>                         
                </div>
            </main>                       
        )
    } else {      
        return (
            <main className="main">
                <div className="container">
                    <section className="main-block__products">
                        <div className="products">
                            <ul className="products__list">
                            {coctails.map(item => (
                                <Card key={item.id} item={item}/> 
                            ))}                       
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default List;