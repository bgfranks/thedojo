import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { timestamp } from '../../firebase/config';

// styles
import './Create.css';

// select options
const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

export default function Create() {
  // gets the url history
  const history = useHistory();

  // getting the user doc
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  // getting the current user
  const { user } = useAuthContext();

  // getting the add doc function from the firestore hook
  const { addDocument, response } = useFirestore('projects');

  // form state
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  // maps through users to get a new array to set to the user options
  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  // handles form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    // checks to see if the category and a user is selected
    if (!category) {
      setFormError('Please select a project category');
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError('please assign the project to at least 1 user');
      return;
    }

    // creates author object
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    // maps through assigned users to gather user data for firestore
    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    // gathering the data to get ready for firestore
    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    // save project to firestore collection
    await addDocument(project);

    // if no error, redirect to the homepage
    if (!response.error) {
      history.push('/');
    }
  };

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            required
            type='text'
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Set due date:</span>
          <input
            required
            type='date'
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className='btn'>Add Project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
}
