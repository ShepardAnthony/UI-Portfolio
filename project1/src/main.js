import './project.css'
import Project from './Project.svelte'

export let activeUser = 'sheparaj';

const project = new Project({
  target: document.getElementById('project'),
})

export default project