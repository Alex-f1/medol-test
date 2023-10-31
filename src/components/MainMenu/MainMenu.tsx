import React from 'react';
import MainMenuData from '@/data/main-menu-data.json';
import './MainMenu.scss'

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
                  <a href={item.url}>{item.name}</a>
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