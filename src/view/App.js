import React from 'react';
import { Preloader } from './partials/Preloader.js'
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
      loading: true,
      users: [],
      isGrid,
      inputValue: ''
    }
  }

  loadUsers() {
    fetchUsers()
      .then(users => this.setState({ users }))
  }

  onLoadUsers = () => {
    this.setState(prevState => {
      return {
        loading: !prevState.loading
      }
    })

  }

  onRefreshClick = () => {
    this.setState({loading : true}, () => {
      fetchUsers()
      .then(users => this.setState({ loading: false , users}))
    })
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

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  componentDidMount() {
    this.onLoadUsers();
    this.loadUsers();
  }

  render() {
    const { loading, users, inputValue } = this.state;

    const updatedUsers = users.filter((user) => {
      return user.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    });

    return (
      <div className="App">
        <Header onButtonClick={this.onButtonClick} onRefreshClick={this.onRefreshClick} isGrid={this.state.isGrid} title="BitPeople" />
        {users.length === 0 || loading?
          <Preloader />
          :
          <Main onInputChange={this.onInputChange} inputValue={inputValue} isGrid={this.state.isGrid} users={updatedUsers} />
        }        
        <Footer />
      </div>
    );
  }

}

export default App;
