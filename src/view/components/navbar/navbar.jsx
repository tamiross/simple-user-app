import React from 'react';

const Navbar = props => {
    return (
        <ul style={{ display: 'inline-flex', listStyleType: 'none', padding: 0 }}>
            <li>Grid View</li>
            <li>User View</li>
            <li>Actions Page</li>
            <li>Info</li>
        </ul>
    )
}

export default Navbar;