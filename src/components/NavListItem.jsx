import React from 'react'
import './navListItem.css'

function NavListItem({ nav, navOnclick }) {
    return (
        <li>
            <a 
                href={nav.link} 
                className={`${nav.active ? 'active' : undefined}`}
                onClick={()=> {
                    navOnclick(nav._id);
                }} 
            >
                {nav.name}
            </a>
        </li>
    );
}

export default NavListItem;