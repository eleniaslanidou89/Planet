import React, { Component } from 'react';
import { Grid, Cell, Layout, Textfield, Button } from 'react-mdl';

class card extends Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }

    updateInput(key, value){
        //update react state
        this.setState({
            [key]: value
        });
    }
        addItem(){
            //create item with unique id
            const newItem={
                id: 1 + Math.random(),
                value: this.state.newItem.slice()
            };

            //copy of current list of items
            const list = [...this.state.list];

            //add new item to list
            list.push(newItem);

            //update state with new list and reset newItem input
            this.setState({
                list,
                newItem: ""
            });
        }

        deleteItem(id){
            //copy current list of items
            const list= [...this.state.list];


            //filter out item being deleted
            const updateList = list.filter(item => item.id !== id);

            this.setState({list: updateList});
        }

    render () {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout >
                    <Grid className="landing-grid">
                        <Cell col={7}> 
                            
                            <h1>Customize your card</h1>
                            <h5>Choose bouquet size</h5>
                           
      <input type="radio" value="small" name="gender" /> Small
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2446/2446709.svg" style={{width: '10%', margin: 'auto'}}/>
                            <p> 59;-</p>
                            <input type="radio" value="medium" name="gender" /> Medium
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2446/2446709.svg" style={{width: '10%', margin: 'auto'}}/>
                            <p> 79;-</p>
                            <input type="radio" value="big" name="gender" /> Big
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2446/2446709.svg" style={{width: '10%', margin: 'auto'}}/>
                            <p> 89;-</p><br/>

                            <div className="container">
                        <div
                            style={{
                            padding: 10,
                            textAlign: "left",
                            maxWidth: 800
                            }}
                        >
                        Add a greeding...
                            <br />
                            <input
                            type="text"
                            placeholder="Type greeding here..."
                            value={this.state.newItem}
                            onChange={e => this.updateInput("newItem", e.target.value)}
                            />
                                <button className="add-btn btn-floating"
                                        onClick={() => this.addItem()}
                                        disabled={!this.state.newItem.length}
                                    >
                                    <i class="far fa-plus-square"></i>
                                </button>
                                    <br/> <br/>
                                    <ul>
                                        {this.state.list.map(item =>{
                                        return(
                                        <li key={item.id}>
                                            {item.value}
                                            <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                                                <i class="fas fa-times"></i>
                                            </button>                                      
                                        </li>
                                        );
                                        })}
                                    </ul>
                            </div>
                    </div> 
                           
                           <br/>
                            <Button className="submit"  href="/paymentMethod">Submit</Button>
                        </Cell>    
                    </Grid>
                </Layout>
            </div>   
        )
    }
}
export default card;