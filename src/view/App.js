import React from 'react';
import { Header } from './partials/Header.js';
import { Footer } from './partials/Footer.js';
import { Main } from './partials/Main.js';
// import Counter from './partials/Counter.js';
// import Likes from './partials/Likes.js';
import { fetchUsers } from '../services/userService.js'
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const isGrid = JSON.parse(localStorage.getItem('isGrid')) || false;

    this.state = {
      users: [],
      isGrid,
    }
  }

  loadUsers() {
    fetchUsers()
      .then(users => this.setState({ users }))
  }

  onRefreshClick = () => {
    this.loadUsers();
  }

  onButtonClick = () => {
    this.setState((prevState, props) => {

      const isGrid = !prevState.isGrid;

      localStorage.setItem('isGrid', isGrid);

      return {
        isGrid
      }
    })
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {

    return (
      <div className="App">
        <Header onButtonClick={this.onButtonClick} onRefreshClick={this.onRefreshClick} isGrid={this.state.isGrid} title="BitPeople" />
        <Main isGrid={this.state.isGrid} users={this.state.users} />
        <Footer />
      </div>
    );
  }

}

export default App;
