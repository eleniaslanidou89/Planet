import React, { Component } from 'react';
import { Grid, Cell, Layout, Button } from 'react-mdl';

class skip2 extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            <img src="soup3.jpg" alt="soup" className="image"/> 
                            <p className="text">We deliver the soup!</p>
                            <p className="text">+46 767 676 348 <i class="fab fa-facebook-square"></i></p>
                            <p>or</p>
                            <Button className="btnSocialMedia"><i class="fab fa-facebook-square"></i>Continue with facebook</Button>
                           

                           
                        </Cell> 
                           
                                    
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default skip2;