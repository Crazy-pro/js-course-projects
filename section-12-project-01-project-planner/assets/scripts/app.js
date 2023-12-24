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

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId)
        } else {
            this.hostElement = document.body
        }
        this.insertBefore = insertBefore
    }

    detach() {
        if (this.element) {
            this.element.remove()
            // this.element.parentElement.removeChild(this.element)
        }
    }

    attach() {
        this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element)
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFunction) {
        super('active-projects', true)
        this.closeNotifier = closeNotifierFunction
        this.create()
    }

    closeTooltip = () => {
        this.detach()
        this.closeNotifier()
    }

    create() {
        const tooltipElement = document.createElement('div')
        tooltipElement.className = 'card'
        tooltipElement.textContent = 'Dummy Tooltip Text!'
        tooltipElement.addEventListener('click', this.closeTooltip)
        this.element = tooltipElement
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
        if (this.hasActiveTooltip) {
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
        moreInfoButton.addEventListener('click', this.showMoreInfoHandler.bind(this))
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
        this.connectSwitchButton(type)
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
        const activeProjects = new ProjectList('active')
        const finishedProjects = new ProjectList('finished')
        activeProjects.setSwitchHandler(finishedProjects.addProject.bind(finishedProjects))
        finishedProjects.setSwitchHandler(activeProjects.addProject.bind(activeProjects))
    }
}

App.init()
