import React, { Component } from 'react';
import { Grid, Cell, Layout, Button, Link } from 'react-mdl';
import 'leaflet/dist/leaflet.css';



class landingpage extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
               <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            <img src="soup1.jpg" alt="soup" className="image"/> 
                            <p className="text">Craving a soup?</p>
                            <p className="text">+46 767 676 348 </p>
                            <p className="text">or</p>
                            <button className="btnSocialMedia"><i class="fab fa-facebook-square"></i>Continue with facebook</button>
                        </Cell>         
                    </Grid>
                </Layout>
                <div style={{width: '60%', height: '400px', marginLeft: 'auto', marginRight: 'auto'}}>
               <myMap />
               </div>
            </div>   
        )
    }
}
export default landingpage;

