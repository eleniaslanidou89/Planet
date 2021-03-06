import React, { Component } from 'react';
import { Grid, Cell, Layout, Button } from 'react-mdl';

class aboutus extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            <img src="soup2.jpg" alt="soup" className="image"/> 
                            <p className="text">Having a friend in need of a boost?</p>
                            <p className="text">+46 767 676 348 <i class="fab fa-facebook-square"></i></p>
                            <p>or</p>
                            <button  className="btnSocialMedia"><i class="fab fa-facebook-square"></i>Continue with facebook</button>
                        </Cell>              
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default aboutus;