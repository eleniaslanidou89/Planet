import React, { Component } from 'react';
import { Grid, Cell, Layout, Button, Link } from 'react-mdl';

class shareSoup extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        
                        <Cell col={9}> 
                        <h1>Enjoy your soup!</h1>
                            <img src="shareSoup.jpg" alt="soup" className=""/> <br/>
                            <p className="text">Share your soup on your social media and get 10% off next order!</p>
                            
                            <img src="brocolliSoup.jpg" alt="soup" className="Soup"/>
                            <a href="/checkorder"  rel="noopener noreferrer" target="_blank">
                                   <i className="fas fa-share-alt" aria-hidden="true" />
                            </a>
                           
                            <img src="RamenSoup.jpg" alt="soup" className="Soup"/>
                            <a href="/checkorder2"  rel="noopener noreferrer" target="_blank">
                                   <i className="fas fa-share-alt" aria-hidden="true" />
                            </a>
                        </Cell>
                        <Cell col={7}>follow us<i class="fab fa-instagram"></i><i class="fab fa-facebook"></i> </Cell>        
                    </Grid> 
                </Layout>
            </div>   
        )
    }
}
export default shareSoup;