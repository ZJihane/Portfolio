import uniqid from 'uniqid';

interface ExperienceProps {
  logo: string; 
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  details: string;
  tools: string[];
}

const ProfessionalExperienceCard = ({ professionalExperience }: { professionalExperience: ExperienceProps }) => {
  const renderTools = () => {
    return professionalExperience.tools.map((tool: string) => (
      <li key={uniqid()} className='experience__tool-item'>
        {tool}
      </li>
    ));
  };

  return (
    <div className='experience'>
      {professionalExperience.logo && (
        <img
          className='experience__logo'
          src={professionalExperience.logo}
          alt={`${professionalExperience.company} logo`} // Use double quotes around the string
        />
      )}
      <h3>{professionalExperience.position}</h3>
      <p className='experience__company'>{professionalExperience.company}</p>
      <p className='experience__dates'>
        {professionalExperience.startDate} - {professionalExperience.endDate}
      </p>
      <p className='experience__details'>{professionalExperience.details}</p>
      
      <div className='experience__tools'>
        <ul className='experience__tools-list'>
          {renderTools()}
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalExperienceCard;
