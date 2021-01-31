// import React from 'react';
// import './Header.css';
// 
// const Header = function(props){
// 
//     const headerStyle = {textAlign: 'center', padding:20, background: '#000', color: '#FFF', textTransform: 'uppercase'};
//     return(
//         <div className="header">
//             {props.heading}
//         </div>
//     )
// }

import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.heading}
            </div>
        )
    }
}

export default Header;