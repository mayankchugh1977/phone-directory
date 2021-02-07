import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            subscribersList: [
                {
                id: 1,
                name: 'pipa',
                phone: '0909'
                },
                {
                    id: 2,
                    name: 'abcd',
                    phone: '02292'
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0){
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
         }else{
            newSubscriber.id = 1;
         }
         subscribersList.push(newSubscriber);
         this.setState({subscribersList: subscribersList})
        //  console.log("Phone Directory")
        //  console.log(this.state.subscribersList)
    }

    render() {
        return (
                // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
                // <ShowSubscribers subscribersList={this.state.subscribersList}/>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} /> } />
                        <Route exact path='/add' render={({history}, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler} /> } />
                    </div>
                    
                </Router>
        )
    }
}

export default PhoneDirectory;