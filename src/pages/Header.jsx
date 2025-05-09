import React from 'react'
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './Header.css'
import Search from '../components/Search';
import Button from '../components/Button';


const Header = ({ scroll }) => {
    const [navList, setNavList] = React.useState(navListData);

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => {
            if (nav._id === id) nav.active = true;
            return nav;
        });

        setNavList(newNavList);
    };
    return (
        <header className={`${scroll > 100 ? 'scrolled' :undefined}`}>
            <a href="/" className="logo">
                Cinema
            </a>
            <ul className="nav">
                {
                    navList.map(nav => (
                        <NavListItem key={nav._id} nav={nav} navOnclick={handleNavOnClick} />
                    ))
                }
            </ul>
            <Search />
            <Button 
                icon={<ion-icon name="log-in-outline"></ion-icon>} 
                name='Sign In' 
            />
        </header>
    );
}

export default Header;