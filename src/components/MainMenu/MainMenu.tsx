"use client";

import React from 'react';
import MainMenuData from '@/data/main-menu-data.json';
import './MainMenu.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type MainMenuList = {
  name: string,
  url: string,
}


function MainMenu() {
  const pathname = usePathname();
  const menuList: MainMenuList[] = MainMenuData;

  return (
    <div className="main-menu">
      <nav className="main-menu__nav">
        <ul>
          {
            menuList.map((item) => {
              return (
                <li key={item.name}>
                  <Link 
                    datatype={item.name}
                    className={`${pathname === item.url ? "_is-active" : ""}`} 
                    href={item.url}
                  >
                    {item.name}
                  </Link>
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