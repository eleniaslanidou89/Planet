import React, { Component } from 'react';
import { Grid, Cell, Layout, Button, Text, View } from 'react-mdl';

class menu extends Component {
    render () {
        return(
            <div  className="container" >
                <Layout >
                    <Grid className="landing-grid"><img src="soupOrange.jpg" alt="soup" className="soupMenu"/>
                        <Cell col={10}> 
                            
                        </Cell> 
                        <Cell col={10}> 
                            <p className="textMenu" style={{width: '100%', fontSize: '50px', fontFamily: 'Krona One', color: 'pink'}}>Menu</p>
                            <br/>
                            <p className="textBrocolli">Brocolli Soup<i class="fas fa-leaf"></i>99;-<i class="fas fa-shopping-basket"></i></p>
                            <br/>
                            <img src="brocolliSoup.jpg" alt="soup" className="Soup"/>
                            <p className="description">Creamy brocolli soup with onions</p>
                        </Cell>
                        
                        <Cell col={10}> 
                            <p className="textBrocolli">Ramen soup<i class="fas fa-leaf"></i>99;-</p>
                            <a href="/brocolliSoup"  rel="noopener noreferrer" target="_blank">
                                    <i class="fas fa-shopping-basket" aria-hidden="true" />
                                </a>
                            <br/>
                            <img src="ramenSoup.jpg" alt="soup" className="Soup"/>
                            <p className="description">Creamy soup with fresh tomatoes</p>
                        </Cell>
                           
                                    
                        <Cell col={10}> 
                            <p className="textBrocolli">Pumkin Soup<i class="fas fa-leaf"></i>99;-<i class="fas fa-shopping-basket"></i></p>
                            <br/>
                            <img src="pumkinSoup.jpg" alt="soup" className="Soup"/>
                            <p className="description">Pumkip soup with fresh tomatoes</p>  <Button className="submit"  href="/brocolliSoup">continue</Button>  
                        </Cell>
                           
                              
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default menu;

