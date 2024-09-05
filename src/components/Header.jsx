import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div>header</div>
            <Link to = '/'>Home</Link>
            <Link to = '/comp1'>comp1</Link>
            <Link to = '/comp2'>comp2</Link>
            <Link to = '/comp3'>comp3</Link>
        </div>
    );
};

export default Header;