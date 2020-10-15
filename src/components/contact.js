import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Grid, Cell, Layout } from 'react-mdl';

export default function App() {
 
    return (
        <div  className="container" style={{width: '100%', margin: 'auto'}}>
            <Layout >
                <Grid className="landing-grid">
                    <Cell className="banner-text" style={{fontSize: '25px', color: 'black' }}>
                        <p>Contact Us <br/>
                            <i class="fas fa-phone-volume"></i> 08 444 154 14 <br/>
                            Questions & support <br/>
                            <i class="fas fa-envelope-open"></i> info@planet.com<br/>
                            Partnership & Sales <br/>
                            <i class="fas fa-envelope-open"></i> partnership@planet.com<br/>
                            Press<br/>
                            <i class="fas fa-envelope-open"></i> press@planet.com
                        </p>
                    </Cell>
                </Grid>
            </Layout>
        </div>
    );
}
