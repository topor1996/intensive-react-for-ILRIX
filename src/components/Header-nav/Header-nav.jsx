import React, {Component} from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Новинки'
                },
                {
                    key: 'Hit',
                    name: 'Хит'
                },{
                    key: 'Sugar',
                    name: 'Сладкие'
                },{
                    key: 'Strong',
                    name: 'Крепкие'
                },

            ]
        }
    }
    render() {
        return (
            <ul className='header-menu__list'>
                {this.state.categories.map(el => (
                    <li className='header-menu__item'>
                        <button className='header-menu__link' key={el.key}>{el.name}</button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Categories