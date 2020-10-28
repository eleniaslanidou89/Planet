import React, { Component } from 'react';
import { Grid, Cell, Layout, Button, Text, View } from 'react-mdl';

class checkorder2 extends Component {
    render () {
        return(
            <div  className="container" >
                <Layout >
                    <Grid className="landing-grid"><img src="soupOrange.jpg" alt="soup" className="soupMENU"/>
                        <Cell col={10}> 
                            <p className="textMenu" style={{width: '100%', fontSize: '50px', fontFamily: 'Krona One', color: 'pink'}}>Check your order</p>
                            <br/>
                            <p className="textBrocolli">Brocolli Soup<i class="fas fa-leaf"></i>99;-<i class="fas fa-shopping-basket"></i></p>
                            <br/>
                            <img src="RamenSoup.jpg" alt="soup" className="Soup"/>
                            <p className="description">Creamy Ramen soup with tomatoes</p>
                        </Cell>           
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default checkorder2;

