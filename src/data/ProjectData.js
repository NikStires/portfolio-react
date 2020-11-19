//import Images
import RecipeSearchEngine from '../img/project-img/recipe-search-engine.png';
import StayStoked from '../img/project-img/stayStoked.jpg';
import SmartPizza from '../img/project-img/smartPizza.jpg';
import Waves from '../img/project-img/waves.png';

function projectData() {
  return [
    {
      name: 'Recipe Search Engine',
      image: RecipeSearchEngine,
      text:
        'Not sure to cook with what you have in your fridge? Look up an ingredient and see what you can make with it!',
      technologies: ['React.js', 'Edmame API', 'Sass'],
    },
    {
      name: 'Stay Stoked',
      image: StayStoked,
      text:
        'Keep the fire burning to ward away evil spirits in this game jam submission for Ludem Dare 46, created in 48 hours.',
      technologies: ['C#', 'Unity', 'Aesprite'],
    },
    {
      name: 'Smart Pizza menu website',
      image: SmartPizza,
      text:
        'Website created for local business where I worked closely with the owner of the resturant to achieve a design and function that suited their needs.',
      technologies: ['Html5', 'Sass', 'Javascript'],
    },
    {
      name: 'Waves Music Player',
      image: Waves,
      text:
        'A lightweight, responsive and scalable lofi-hiphop streaming website.',
      technologies: ['React.js', 'Sass'],
    },
  ];
}

export default projectData;
