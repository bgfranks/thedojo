import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

// component imports
import Avatar from '../avatar/Avatar';

// Styles and Images
import './Sidebar.css';
import DashboardIcon from '../../assets/dashboard_icon.svg';
import AddIcon from '../../assets/add_icon.svg';

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        {user && (
          <div className='user'>
            <Avatar src={user.photoURL} />
            <p>Hey {user.displayName}</p>
          </div>
        )}
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/'>
                <img src={DashboardIcon} alt='Dashboard Icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='Add Project Icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
