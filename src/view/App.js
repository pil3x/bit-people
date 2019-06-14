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
    this.state = {
      users: [],
      isGrid: false,

    }
  }

  onButtonClick = () => {
    this.setState((prevState, props) => {
      return {
        isGrid: !prevState.isGrid
      }
    })
  }

  componentDidMount() {
    fetchUsers()
      .then(users => this.setState({ users: users }))

  }

  render() {
    return (
      <div className="App">
        <Header onButtonClick={this.onButtonClick} isGrid={this.state.isGrid} title="BitPeople" />
        <Main isGrid={this.state.isGrid} users={this.state.users} />
        <Footer />
      </div>
    );
  }

}

export default App;
