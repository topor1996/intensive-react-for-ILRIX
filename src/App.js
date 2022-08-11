// import logo from './logo.svg';
import './style.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import React from 'react';

// function App() {
//   return (
//     <div className="app">
//       <Header />      
//       <Main />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items : [
        {
          id:1,
          title: 'Мохито',
          desc: 'Описание',
          category: 'Новинки'
        },
        {
          id:2,
          title: 'Банан',
          desc: 'Описание',
          category: 'Хит'
        },
        {
          id:3,
          title: 'Водка',
          desc: 'Описание',
          category: 'Крепкие'
        },
        {
          id:4,
          title: 'Лайм',
          desc: 'Описание',
          category: 'Сладкие'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory(this)
  }
  render() {
    return (
    <div className="app">
      <Header />      
      <Main />
      <Footer />
    </div>
  ); 
  }
  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el =>el.category === category)
    })
  }
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    let isInArray =false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
