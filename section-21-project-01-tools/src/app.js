// import * as _ from 'lodash'
import { ProjectList } from './App/ProjectList'

// console.log(_.difference([1, 3, 4, 6, 7, 4], [5, 6, 7, 4, 3]))

class App {
  static init() {
    const activeProjectsList = new ProjectList('active')
    const finishedProjectsList = new ProjectList('finished')
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    )
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    )

    // const timerId = setTimeout(this.startAnalytics, 3000)

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId)
    // })
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script')
    analyticsScript.src = 'assets/scripts/Utility/Analytics'
    analyticsScript.defer = true
    document.head.append(analyticsScript)
  }
}

App.init()
