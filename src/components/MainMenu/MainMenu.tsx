import React from 'react';
import MainMenuData from '@/data/main-menu-data.json';
import './MainMenu.scss'
import Link from 'next/link';

type MainMenuList = {
  name: string,
  url: string,
}


function MainMenu() {
  
  const menuList: MainMenuList[] = MainMenuData;

  return (
    <div className="main-menu">
      <nav className="main-menu__nav">
        <ul>
          {
            menuList.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default MainMenu;