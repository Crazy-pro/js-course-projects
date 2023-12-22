class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true)
        element.replaceWith(clonedElement)
        return clonedElement
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId)
        const destinationElement = document.querySelector(newDestinationSelector)
        destinationElement.append(element)
    }
}

class Tooltip {
    constructor(closeNotifierFunction) {
        this.closeNotifierHandler = closeNotifierFunction
    }

    closeTooltip = () => {
        this.detach()
    }

    detach() {
        this.element.remove()
        // this.element.parentElement.removeChild(this.element)
    }

    attach() {
        const tooltipElement = document.createElement('div')
        tooltipElement.className = 'card'
        tooltipElement.textContent = 'DUMMY!'
        tooltipElement.addEventListener('click', this.closeTooltip)
        this.element = tooltipElement
        document.body.append(tooltipElement)
    }
}

class ProjectItem {
    hasActiveTooltip = false

    constructor(id, updateProjectsFunction, type) {
        this.id = id
        this.updateProjectsHandler = updateProjectsFunction
        this.connectMoreInfoButton()
        this.connectSwitchButton(type)
    }

    showMoreInfoHandler() {
        if (hasActiveTooltip) {
            return
        }
        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false
        })
        tooltip.attach()
        this.hasActiveTooltip = true
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id)
        const moreInfoButton = projectItemElement.querySelector('button:first-of-type')
        moreInfoButton.addEventListener('click', this.showMoreInfoHandler)
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id)
        let switchButton = projectItemElement.querySelector('button:last-of-type')
        switchButton = DOMHelper.clearEventListeners(switchButton)
        switchButton.textContent = type === 'active' ? 'Finish' : 'Activate'
        switchButton.addEventListener('click', this.updateProjectsHandler.bind(null, this.id))
    }

    update(updateProjectsFunction, type) {
        this.updateProjectsHandler = updateProjectsFunction
        this.connectSwitchButton()
    }
}

class ProjectList {
    projects = []

    constructor(type) {
        this.type = type
        const projectItems = document.querySelectorAll(`#${type}-projects li`)
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)), this.type)
        }
        console.log(this.projects)
    }

    setSwitchHandler(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction
    }

    addProject(project) {
        this.projects.push(project)
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`)
        project.update(this.switchProject.bind(this), this.type)
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1)
        this.switchHandler(this.projects.find(p => p.id === projectId))
        this.projects = this.projects.filter(p => p.id !== projectId)
    }
}

class App {
    static init() {
        const activeProjects = new ProjectList('active',)
        const finishedProjects = new ProjectList('finished')
        activeProjects.setSwitchHandler(finishedProjects.addProject.bind(finishedProjects))
        finishedProjects.setSwitchHandler(activeProjects.addProject.bind(activeProjects))
    }
}

App.init()
