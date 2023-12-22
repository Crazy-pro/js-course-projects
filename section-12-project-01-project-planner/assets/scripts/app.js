class Tooltip {

}

class ProjectItem {
    constructor(id) {
        this.id = id
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
}

class App {
    static init() {
        const activeProjects = new ProjectList('active')
        const finishedProjects = new ProjectList('finished')
    }
}

App.init()
