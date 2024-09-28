import uniqid from 'uniqid'
import ProfessionalExperienceCard from './ProfessionalExperienceCard'
import Spacer from './Spacer'
import { professionalExperiences } from '../data/portfolio'

const Projects = () => {
  if (!professionalExperiences.length) return null

  return (
    <section id='professionalExperiences' className='section professionalExperiences'>
      <Spacer height={2} />
      <h2 className='section__title'>Professional Experience</h2>

      <div className='professionalExperiences__grid'>
        {professionalExperiences.map((professionalExperience) => (
          <ProfessionalExperienceCard key={uniqid()} professionalExperience={professionalExperience} />
        ))}
      </div>
    </section>
  )
}

export default Projects
