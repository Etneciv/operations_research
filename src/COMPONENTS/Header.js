import '../STYLE/Header.scss'
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import MenuItem from './MenuItem'
import DATA from '../UTILS/HeaderInfo'
function Header({ title }) {
    return (
        <header className="HeaderBody">
            <h1>{title}</h1>
            <Dropdown CONTENT={DATA[0]} />
            <Dropdown CONTENT={DATA[1]} />
            <MenuItem title="In progress" icon={require('../img/prog.png')} />
            <MenuItem title="help" icon={require('../img/help.png')} />
            <MenuItem title="About Us" icon={require('../img/aus.png')} />

        </header>
    )
}
export default Header;