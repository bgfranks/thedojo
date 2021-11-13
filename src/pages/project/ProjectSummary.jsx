import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useHistory } from 'react-router';

// components
import Avatar from '../../components/avatar/Avatar';

export default function ProjectSummary({ project }) {
  // get the collection for deletion
  const { deleteDocument } = useFirestore('projects');

  // gets the current user
  const { user } = useAuthContext();

  // gets the history
  const history = useHistory();

  const handleClick = (e) => {
    deleteDocument(project.id);

    history.push('/');
  };

  return (
    <div>
      <div className='project-summary'>
        <h2 className='page-title'>{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className='due-date'>
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className='details'>{project.details}</p>
        <h4>Project is aassigned to:</h4>
        {project.assignedUsersList.map((user) => (
          <div className='assigned-users' key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
      {user.uid === project.createdBy.id && (
        <button onClick={handleClick} className='btn'>
          Mark as Complete
        </button>
      )}
    </div>
  );
}
