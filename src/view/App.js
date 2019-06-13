import React from 'react';
import { Header } from './partials/Header.js';
import { Footer } from './partials/Footer.js';
import { Main } from './partials/Main.js';
// import Counter from './partials/Counter.js';
// import Likes from './partials/Likes.js';
import { fetchUsers } from '../services/userService.js'


import '../App.css';

// const App = (props) => {
//   fetchUsers()
//   return (
//     <div className="App">
//       <Header title="BitPeople" />
//       <Main users={users.results} />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      layout: ''
    }
  }

  onListButtonClick = (e) => {

  }

  componentDidMount() {
    fetchUsers()
      .then(users => this.setState({ users: users }))
  }

  render() {
    return (
      <div className="App">
        <Header title="BitPeople" />
        <Main users={this.state.users} />
        <Footer />
      </div>
    );
  }

}

export default App;
