import Head from 'next/head'
import { about } from '../data/portfolio'
import { ThemeProvider } from '../contexts/theme'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectCard.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/Skills.css'
import '../styles/ProfessionalExperiences.css'
import '../styles/professionalExperienceCard.css'
import 'animate.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
 

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{about.name || 'Portfolio'}</title>
        <meta name='description' content='Jihane Zouahri Software Developer, Software Development, Portfolio' />
        <meta name='keywords' content='Software Developer, Software Development, Portfolio' />
        <meta name='author' content='Jihane Zouahri' />
        <meta name='robots' content='index, follow' />
        <link rel="icon" href="software-application.ico" type="image/x-icon" />

      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
