import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Grid, Cell, Layout } from 'react-mdl';


class App extends Component {

    constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
  }
  
      render() {
  
          var { isLoaded, items} = this.state;
          if(!isLoaded){
            return <div>Loading...</div>;
  
          }
  
          else{
  
          return (
              <div className="App">
                  
                  <ul>
                    {items.map(item => (
                      <li key={item.id}>
                        {item.id} | {item.title}
                      </li>
                  
                      ))}  
                  </ul>
            </div>
        );
    }

  }
}
export default App;