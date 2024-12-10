fetch('../wk_13_portfolio/wk_13_portfolio.json')
    .then(response => response.json())
    .then(projects => {
        console.log(projects);
        parseData(projects);
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });

function parseData(data) {
    const projectsContainer = document.getElementById("projects");

    data.projects.forEach(project => {
        const projectHTML = `
            <div class="row project" id="${project.subdomain}">
                <div class="projimg">
                    <img src="${project.mainimg[0]}" alt="${project.mainimg[1]}">
                </div>
                <div class="description">
                    <h2>${project.name}</h2>
                    <p class="subtitle">${project.description}</p>
                </div>
            </div>
        `;

        projectsContainer.innerHTML += projectHTML;
    });
}
