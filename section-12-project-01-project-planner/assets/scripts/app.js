class Tooltip {

}

class ProjectItem {
    constructor(id) {
        this.id = id
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id)
        const switchButton = document.querySelector('button:last-of-type')
        switchButton.addEventListener('click',)
    }
}

class ProjectList {
    projects = []

    constructor(type) {
        const projectItems = document.querySelectorAll(`#${type}-projects li`)
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id))
        }
        console.log(this.projects)
    }

    addProject() {

    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1)
        this.addProject()
        this.projects = this.projects.filter(p => p.id !== projectId)
    }
}

class App {
    static init() {
        const activeProjects = new ProjectList('active')
        const finishedProjects = new ProjectList('finished')
    }
}

App.init()
