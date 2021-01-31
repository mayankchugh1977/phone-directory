import React from 'react';
import './Header.css';

const Header = function(){

    const headerStyle = {textAlign: 'center', padding:20, background: '#000', color: '#FFF', textTransform: 'uppercase'};
    return(
        <div className="header">
            Phone Directory
        </div>
    )
}

// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// }

export default Header;