const containerProjects = document.querySelector('.containerProjects');
const title = document.querySelector('.title');

const displayProjects = () => {
    title.textContent = 'Projects';

    Object.keys(localStorage).forEach(function(projectName){

        if(document.querySelector(`[data-project="${projectName}"]`) == null)
        {
            const project = document.createElement('div');
            project.setAttribute('class', 'project');
            project.setAttribute('data-project', `${projectName}`);
    
            project.innerHTML = 
            `
                <p class = 'projectTitle'>${projectName}</p>
                <i class="far fa-trash-alt iDelete" title="Delete todo"></i>
            `;
            containerProjects.append(project);
        }

    });
}

const deleteProject = (project) =>{
    localStorage.removeItem(project);
    document.querySelector(`[data-project="${project}"]`).remove();
}

export{displayProjects, deleteProject}