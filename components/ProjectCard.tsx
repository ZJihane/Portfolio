import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectCard = ({ project }: any) => {
  const renderDescription = () => {
    return project.description?.map((item: any) => (
      <p key={uniqid()}>{item}</p>
    ));
  };

  const renderStack = () => {
    return project.stack?.map((item: any) => (
      <li key={uniqid()} className='project__stack-item'>
        {item}
      </li>
    ));
  };

  const renderLink = (href: string, label: string, IconComponent: any) => {
    return href ? (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        aria-label={label}
        className='link link--icon'
      >
        <IconComponent />
      </a>
    ) : (
      <span
        aria-label={label}
        className='link link--icon disabled'
      >
        <IconComponent />
      </span>
    );
  };

  return (
    <div className='project'>
      <div>
        {project.thumbnail && (
          <img
            className='project__thumbnail'
            src={project.thumbnail}
            alt='thumbnail'
          />
        )}

        {project.name && <h3>{project.name}</h3>}

        {project.description && (
          <div className='project__description paragraph__list'>
            {renderDescription()}
          </div>
        )}
      </div>

      <div>
        {project.stack && (
          <ul className='project__stack'>
            {renderStack()}
          </ul>
        )}

        {renderLink(project.sourceCode, 'source code', GitHubIcon)}
        
      </div>
    </div>
  );
};

export default ProjectCard;
