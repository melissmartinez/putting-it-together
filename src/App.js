import React, { Component } from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          firstName: "Jane",
          lastName: "Doe",
          hairColor: "Black",
          age: 45
        },
        {
          firstName: "John",
          lastName: "Smith",
          hairColor: "Brown",
          age: 88
        }
      ]
    }
    this.haveBDay = this.haveBDay.bind(this);
  }

  haveBDay = (index) => {
    this.setState(prevState => {
      return {
        age: prevState.users[index].age++
      };
    })
  }
  render() {
    return (
      <div className="App">
        {
          this.state.users.map(
            (user, i) => {
              return (
                <PersonCard
                  firstName={user.firstName}
                  lastName={user.lastName}
                  hairColor={user.hairColor}
                  age={user.age}
                  haveBDay={this.haveBDay}
                  key={i}
                  index={i}
                />
              );
            }
          )
        }
      </div>
    );

  }
}


export default App;

