document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        title: 'Project One',
        description: 'Description of project one.',
        link: '#'
      },
      {
        title: 'Project Two',
        description: 'Description of project two.',
        link: '#'
      },
      // Add more projects here
    ];
  
    const projectsContainer = document.getElementById('projects-container');
  
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('bg-white', 'p-5', 'rounded-lg', 'shadow-md');
      
      projectCard.innerHTML = `
        <h3 class="text-xl font-semibold">${project.title}</h3>
        <p class="mt-2">${project.description}</p>
        <a href="${project.link}" class="text-blue-500 hover:underline mt-2 inline-block">View Project</a>
      `;
      
      projectsContainer.appendChild(projectCard);
    });
  });
  