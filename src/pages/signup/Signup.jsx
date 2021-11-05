import { useState } from 'react';

// styles
import './Signup.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [tumbnail, setTumbnail] = useState(null);

  return (
    <form className='auth-form'>
      <h2>Sign Up</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type='text'
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
          value={displayName}
          required
        />
      </label>
      <label>
        <span>profile image:</span>
        <input type='file' required />
      </label>
      <button className='btn'>Sign Up</button>
    </form>
  );
}
