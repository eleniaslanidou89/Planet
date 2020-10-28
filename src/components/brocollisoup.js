import React, { Component } from 'react';
import { Grid, Cell, Layout, Link, Button, Textfield, View , ListItem, CardText, List, ListItemContent, Navigation} from 'react-mdl';

class brocollisoup extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                
                <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            <img src="brocolliSoup.jpg" alt="soup" className="brocolli"/>
                             <p className="textIng">Brocolli Soup<i class="fas fa-leaf"></i>99;</p>
                            <p className="text">Creamy brocolli soup with fresh onions</p>
                            <br/>
                        </Cell> 
             
                  
                        <Cell col={7}> 
                            <p className="textIng">Ingredients</p>
                            
                            <img src="https://images.unsplash.com/photo-1580910365203-91ea9115a319?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="soup" className="bs"/>
                            <p className="description">Spinach</p>
                            <br/>
                            <img src="https://images.unsplash.com/photo-1507633698035-8e4bd1573e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="soup" className="bs"/>
                            <p className="description">Yellow onion</p>
                            <br/>
                            <img src="https://images.unsplash.com/photo-1518164147695-36c13dd568f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="soup" className="bs"/>
                            <p className="description">Brocolli</p>
                            <br/>
                            <img src="brocolliSoup.jpg" alt="soup" className="bs"/>
                            <p className="description">Heavy Cream</p>
                            <br/>
                            <button className="submit" href="/card"><i class="fas fa-shopping-cart"></i>Add to basket</button>
                            <Button className="submit"  href="/card"><i class="fas fa-shopping-cart"></i>Add to Basket</Button>
               
                        </Cell>
                     </Grid>      
                                    
                    
                </Layout>
            </div>   
        )
    }
}
export default brocollisoup;
