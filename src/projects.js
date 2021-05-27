import {addTodo, displayTodo, createTodo, editTodo, deleteTodo} from './DOM'
import {Todo, Project} from './objects'
import notie from 'notie'

const containerProjects = document.querySelector('.containerProjects');

const displayAllProjects = () => {
    Object.keys(localStorage).forEach(function(projectName){

        if(document.querySelector(`[data-project="${projectName}"]`) == null)
        {
            const project = document.createElement('div');
            project.setAttribute('class', 'project');
            project.setAttribute('data-project', `${projectName}`);
    
            project.innerHTML = 
            `
                <p class = 'projectTitle'>${projectName}</p>
                <i class="far fa-edit iEdit" title="Edit" ></i>
                <i class="far fa-trash-alt iDelete" title="Delete todo"></i>
            `;
            containerProjects.append(project);
        }

    });
}



export{displayAllProjects}