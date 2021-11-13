import { useCollection } from '../../hooks/useCollection';

// components
import ProjectList from '../../components/projectList/ProjectList';
import ProjectFilter from '../../components/projectFilter/ProjectFilter';

// styles
import './Dashboard.css';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}
