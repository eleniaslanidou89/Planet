import React, { Component } from 'react';
import { Grid, Cell, Layout, Button } from 'react-mdl';

class order extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            <p className="text">Your order</p>
                            <p className="text">Is everything correct? <i class="fab fa-facebook-square"></i></p>
                            <p>or</p>
                            <button className="btnSocialMedia"><i class="fab fa-facebook-square"></i>Continue with facebook</button>
                        </Cell>              
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default order;