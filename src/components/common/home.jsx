import React, { Component } from 'react'

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'LP Shivan',
      user: {}
    };

    this.changeName = this.changeName.bind(this);
  }
  
  componentDidMount() {
    console.log('ComponentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount')
  }

  changeName() {
    this.setState({ name: 'LP Venkat'});
  }

  render() {
    console.log('Render');
    
    return (
      <div>
        <div>
          Collabera React Training
        </div>
        <ul>
          <li>React.js Fundamentals</li>
          <li>React Router, Rest Http Fundamentals</li>
          <li>Redux Fundamentals</li>
        </ul>

        <button onClick={this.changeName}>
          Change Name
        </button>
        
        <br/>
        <br/>        
        {JSON.stringify(this.state.user)}
      </div>
    )
  }
}
