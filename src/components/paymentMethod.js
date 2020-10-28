import React, { Component } from 'react';
import { Grid, Cell, Layout, Button, Textfield} from 'react-mdl';

class paymentMethod extends Component {
    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        <h1>Choose paymnet method</h1>
                        <Cell col={7}> 
                            <input type="radio" value="small" name="gender" /><i class="fab fa-apple-pay"></i> Apple pay
                            <br/>
                            <input type="radio" value="small" name="gender" /><i class="fab fa-cc-paypal"></i>Paypal 
                            
                            <br/>
                            <input type="radio" value="small" name="gender" /><i class="far fa-credit-card"></i>Credit card 
                          
                            <br/>
                            <input type="radio" value="small" name="gender" /><i class="far fa-credit-card"></i>Swish
                            
                            <p>Add discount code</p>
                            <br/> <br/>
                            <Textfield
                                value="add code"
                                onChange={() => {}}
                                label=""
                                expandable
                                expandableIcon=""
                                style={{color: 'black'}}
                            /><br/>
                            <Button className="submit"  href="/shareSoup">Submit</Button>
                        </Cell>             
                    </Grid>
                </Layout>
                <div>
                    
                </div>
            </div>   
        )
    }
}
export default paymentMethod;