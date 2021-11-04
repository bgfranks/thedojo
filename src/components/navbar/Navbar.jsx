import { Link } from 'react-router-dom';

// Styles and Images
import './Navbar.css';
import Temple from '../../assets/temple.svg';

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Dojo Logo' />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <button className='btn'>Log Out</button>
        </li>
      </ul>
    </div>
  );
}
