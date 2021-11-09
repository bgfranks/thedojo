import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

// Styles and Images
import './Navbar.css';
import Temple from '../../assets/temple.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Dojo Logo' />
          <span>The Dojo</span>
        </li>
        {!user && (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className='btn' onClick={logout}>
                Log Out
              </button>
            )}
            {isPending && (
              <button className='btn' disabled>
                Logging Out
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
