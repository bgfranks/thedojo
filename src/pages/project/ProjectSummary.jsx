import Avatar from '../../components/avatar/Avatar';

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className='project-summary'>
        <h2 className='page-title'>{project.name}</h2>
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
    </div>
  );
}
