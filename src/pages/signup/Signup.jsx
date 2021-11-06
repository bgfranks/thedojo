import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import './Signup.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  // handles the file upload for the profile pic
  const handleFileChange = (e) => {
    setThumbnail(null);

    // grabs the first file selected incase the select multiple
    let selected = e.target.files[0];

    //check to see if they select a file
    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }

    // checks to see if its is an image
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }

    // checks the file size
    if (selected.size > 100000) {
      setThumbnailError('File size must be lest than 100kb');
      return;
    }

    setThumbnailError(null);

    setThumbnail(selected);
  };

  // Handles the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
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
        <input type='file' required onChange={handleFileChange} />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading
        </button>
      )}
      {error && <div className='error'>{error}</div>}
    </form>
  );
}
