import React, { Component } from 'react';
import { Grid, Cell, Layout, Button } from 'react-mdl';

class landingpage extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            <img src="planet.jpg" alt="planet" className="image"/>  
                        </Cell> 
                        <div className="banner-text">
                            <h1 className="banner-text">Our Planet<br/>Solar System Planets</h1>
                            <hr/>
                            <h3 className="banner-text"> GALLERY | COMPANY | PARTNERS </h3>                            
                            <div className="social-links">
                                {/*facebook*/}
                                <a href=""  rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-facebook-square"></i>
                                </a>
                                {/*instagram*/}
                                <a href=""  rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-instagram"></i>
                                </a>
                                {/*twitter*/}
                                <a href=""  rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-twitter-square"></i>
                                </a>
                            </div>
                        </div>             
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default landingpage;