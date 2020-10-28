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

           
                <div className="demo">
    <Layout>
       
        <Header className='header-color' style={{backgroundColor: 'whitesmoke'}} title={<Link style={{ textDecoration: 'none',  color:'black' }} ></Link>} scroll >

            <Navigation>
            <Link to="/aboutus"></Link>
            <Link to="/contact"></Link>
            <Link style={{color:'black'}} to="/menu">Skip</Link>
                <Button color="primary"></Button>
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
        <Drawer title={<Link style={{textDecoration: 'none', color: 'blue', fontSize: '25px'}} to="/">Soup Online</Link>} >
            <Navigation>
            <Link to="/"><i class="fas fa-bars"></i>Go to food menu</Link>
            <Link to="/"><i class="fas fa-user"></i>My account</Link>
            <Link to="/"><i class="fas fa-soup"></i>My orders</Link>
            <Link to="/"><i class="fas fa-heart"></i>Favorites</Link>
            <Link to="/"><i class="fas fa-gift"></i>Coupons</Link>
            <Link to="/"><i class="far fa-question-circle"></i>Help</Link>
            <Link to="/"><i class="fas fa-angle-double-right"></i>More</Link>
            <Link to="/"><i class="far fa-sign-out"></i>Sign out</Link>
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
