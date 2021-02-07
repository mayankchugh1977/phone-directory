import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import {Link} from 'react-router-dom';

class AddSubscriber extends Component {

    constructor () 
    {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
        // console.log(this.state);
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        // console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        // console.log("before call default",this.state)
        this.setState(
                {
                    id:0, 
                    name: '', 
                    phone: 0
                }
            )
            // console.log("after call default",this.state)
            this.props.history.push("/");
    }

    render(){

        const {name, phone} = this.state;
        return (
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container" >
                    <Link to="/" ><button className="custom-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control"> Name: </label> <br/>
                        <input type="text" id="name" className="input-control" name="name" onChange={this.inputChangedHandler}/> <br/> <br/>
                        <label htmlFor="phone" className="label-control"> Phone: </label> <br/>
                        <input type="text" id="phone" className="input-control" name="phone" onChange={this.inputChangedHandler}/> <br/> <br/>

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                            <span className="subscriber-info">Name: {this.state.name}</span><br/>
                            <span className="subscriber-info">Phone: {this.state.phone}</span>
                        </div>
                        
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default AddSubscriber;