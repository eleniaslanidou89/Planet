import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


import { Button } from '@material-ui/core';


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

     
        

        return (
            <div className="App">

           
                <div className="demo-big-content">
    <Layout>
       
        <Header title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Planet</Link>} scroll>

            <Navigation>
            <Link to="/aboutus">About us</Link>
            <Link to="/contact">Contact</Link>
                <Button color="primary">BLOG</Button>
                <Textfield
                                value=""
                                onChange={() => {}}
                                label="Search2"
                                expandable
                                expandableIcon="search"
                                style={{color: 'black'}}
                            />
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'blue', fontSize: '25px'}} to="/">Planet</Link>} >
            <Navigation>
            <Link to="/aboutus">About us</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        <Main/>
        </Content>
    </Layout>
</div>

            </div>
        );
    }

  }

export default App;
