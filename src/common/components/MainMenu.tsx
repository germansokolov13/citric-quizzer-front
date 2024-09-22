import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaCheck, FaCog, FaHome } from 'react-icons/fa';

const items = [
  {
    key: 'home',
    icon: <FaHome />,
    label: (
      <Link to="/" >Home</Link>
    )
  },
  {
    key: 'results',
    icon: <FaCheck />,
    label: (
      <Link to="/results" >Results</Link>
    )
  },
  {
    key: 'settings',
    icon: <FaCog />,
    label: (
      <Link to="/settings" >Settings</Link>
    )
  },
];

export default function MainMenu() {
  const location = useLocation();
  let currentMenuItem = items.find(item => location.pathname === `/${item.key}`);
  if (location.pathname === '/') {
    currentMenuItem = items[0];
  }
  const [menuItem, setMenuItem] = useState(currentMenuItem?.key);

  const onMenuClick = (event: any) => {
    setMenuItem(event.key);
  };

  return <>
    <Menu
      onClick={onMenuClick}
      selectedKeys={menuItem ? [menuItem] : []}
      mode="horizontal"
      items={items}
    />
  </>
}