//import Images
import RecipeSearchEngine from '../img/project-img/recipe-search-engine.WebP';
import StayStoked from '../img/project-img/stayStoked.WebP';
import SmartPizza from '../img/project-img/smartpizza.WebP';
import Waves from '../img/project-img/waves.WebP';
import Capture from '../img/project-img/capture.WebP';
//uuidv4
import { v4 as uuidv4 } from 'uuid';

function projectData() {
  return [
    {
      name: 'Waves Music Player',
      image: Waves,
      text:
        'A lightweight, responsive and scalable lofi-hiphop streaming website.',
      technologies: ['React', 'Sass'],
      hasGithub: true,
      github: 'https://github.com/NikStires/Waves',
      hasLink: false,
      link: '',
      id: uuidv4(),
    },
    {
      name: 'Smart Pizza menu website',
      image: SmartPizza,
      text:
        'Website created for local business where I worked closely with the owner of the resturant to achieve a design and function that suited their needs.',
      technologies: ['Html5', 'Sass', 'Javascript'],
      hasGithub: false,
      github: null,
      hasLink: true,
      link: 'https://www.smartpizzamenu.com/',
      id: uuidv4(),
    },
    {
      name: 'Capture',
      image: Capture,
      text: 'A multipage fully animated mock cinematography portfolio website.',
      technologies: ['React Styled Components', 'Framer Motion'],
      hasGithub: true,
      github: 'https://github.com/NikStires/capture',
      hasLink: false,
      link: null,
      id: uuidv4(),
    },
    {
      name: 'Stay Stoked',
      image: StayStoked,
      text:
        'Keep the fire burning to ward away evil spirits in this game jam submission for Ludem Dare 46, created in 48 hours.',
      technologies: ['C#', 'Unity', 'Aesprite'],
      hasGithub: true,
      github: 'https://github.com/NikStires/StayStoked',
      hasLink: false,
      link: '',
      id: uuidv4(),
    },
    {
      name: 'Recipe Search Engine',
      image: RecipeSearchEngine,
      text:
        'Not sure to cook with what you have in your fridge? Look up an ingredient and see what you can make with it!',
      technologies: ['React', 'Edmame-API', 'Sass'],
      hasGithub: true,
      github: 'https://github.com/NikStires/RecipeSearchEngine',
      hasLink: false,
      link: '',
      id: uuidv4(),
    },
  ];
}

export default projectData;
