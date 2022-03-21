import React, { useState } from "react";

function Dropdown({ CONTENT }) {
    const [open, setOpen] = useState(false);
    const elements = CONTENT.items[0];

    const items = [];

    for (const [i, value] of Object.entries(elements)) {
        if (i == (Object.entries(elements).length - 1)) {
            items.push(<a key={i} href="#" className='DropItem finalItem'>{value}</a>)
        }
        else if (i == 0) {
            items.push(<a key={i} href="#" className='DropItem firstItem'>{value}</a>)
        }
        else {
            items.push(<a key={i} href="#" className='DropItem'>{value}</a>)
        }
    }
    return (
        <div className='OptionMenu'>
            <div className='OptionMenuTitle' onClick={() => setOpen(!open)}>
                <img src={CONTENT.img} />
                {CONTENT.title}
            </div>
            {open && (
                <div className='DropdownContent'>
                    {items}
                </div>
            )}
        </div >
    )
}

export default Dropdown;