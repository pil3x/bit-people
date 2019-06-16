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
      inputValue: ''
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
    });
  }

  // filterUsers = (e) => {
  //   let updatedUsers = this.state.users;
  //   updatedUsers = updatedUsers.filter(user => user.search(e.target.value) !== -1)
  //   return updatedUsers;
  // }

  // onSearchType = () => {
  //   const bla = this.filterUsers();
  //   return this.setState({ users: bla })
  // }


  //SREDI TOLOWERCASE!!!
  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const { users, inputValue } = this.state;

    const updatedUsers = users.filter((user) => {
      return user.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    });

    return (
      <div className="App">
        <Header onButtonClick={this.onButtonClick} onRefreshClick={this.onRefreshClick} isGrid={this.state.isGrid} title="BitPeople" />
        <Main onInputChange={this.onInputChange} inputValue={inputValue} isGrid={this.state.isGrid} users={updatedUsers} />
        <Footer />
      </div>
    );
  }

}

export default App;
