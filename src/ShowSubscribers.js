import React, { Component } from 'react';
import Header from "./Header";
import "./ShowSubscribers.css";


class ShowSubscribers extends Component {


  // constructor()
  // {
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  //   console.log("construtor called ")
  // }

  clickHandler (message){
    alert(message );
  }

  // componentDidMount() {
  //   let newSubscribers = 
  //       {
  //         id: 1,
  //         name: "Shipla Bhatt",
  //         phone: "8888888888"
  //       }

  //       let subscribersList = this.state.subscribersListToShow;
  //       subscribersList.push(newSubscribers);
  //       this.setState({subscribersListToShow: subscribersList});
  //       console.log("componentDidMount called")
  //       console.log("State ",this.state)
    
  // }

  render() {
    console.log("render called")
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shipla Bhatt",
    //     phone: "8888888888"
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti",
    //     phone: "9999999999"
    //   }
    // ]

    return (
      <div className="component-container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn"> Add </button>
          
          <div className="grid-container heading-container">
            <span className="grid-item name-heading" > Name </span>
            <span className="grid-item phone-heading"> Phone </span>
          </div>  

          {
            // this.state.subscribersListToShow.map(sub => {
            this.props.subscribersList.map(sub => {
              return  <div key = {sub.id} className="grid-container">
                        <span className="grid-item" > {sub.name} </span>
                        <span className="grid-item"> {sub.phone}  </span>
                        <span className="grid-item action-btn-container">
                          <button className="del-custom-btn delete-btn" onClick={this.clickHandler.bind(this, sub.id)} > Delete</button>
                        </span>
                       
                      </div>
            })
          }

        </div>  
      </div>
    );
  }
}

export default ShowSubscribers;
