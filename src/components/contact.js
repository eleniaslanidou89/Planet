import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Grid, Cell, Layout } from 'react-mdl';

class App extends Component {
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

        render() {
            return ( 
            
                   <div className="app">
                        <h1 className="app-title">Contact</h1>
                            <ul className="app-info">
                                <i class="fas fa-phone-volume"></i> 08 400 548 02 <br/>
                                Questions & support <br/>
                                <i class="fas fa-envelope-open"></i> info@Vinden.com<br/>
                                Partnership & Sales <br/>
                                <i class="fas fa-envelope-open"></i> partnership@Vinden.com<br/>
                                Press<br/>
                                <i class="fas fa-envelope-open"></i> press@Vinden.com
                            </ul>
                   <div className="container">
                        <div
                            style={{
                            padding: 10,
                            textAlign: "left",
                            maxWidth: 800
                            }}
                        >
                        Add a Comment...
                            <br />
                            <input
                            type="text"
                            placeholder="Type comment here..."
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
                    </div>
    );
}
}


export default App;