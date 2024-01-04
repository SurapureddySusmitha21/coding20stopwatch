// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  update = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  clearTheTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.update, 1000)
  }

  onStopTimer = () => {
    this.clearTheTimer()
  }

  onRestartTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds > 9) {
      return seconds
    }
    return `0${seconds}`
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes > 9) {
      return minutes
    }
    return `0${minutes}`
  }

  render() {
    const {isTimerRunning} = this.state
    const timeMin = this.renderMinutes()
    const timeSeconds = this.renderSeconds()
    return (
      <div className="container">
        <div className="bg-container">
          <div className="stop-and-timer-container">
            <h1 className="stop-heading">Stopwatch</h1>
            <div className="timer-container">
              <div className="image-and-timer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="stopwatch-image"
                />
                <p className="timer-paragraph">Timer</p>
              </div>
              <h1 className="">
                {timeMin}:{timeSeconds}
              </h1>
              <div className="btn-container">
                <button
                  type="button"
                  className="start-btn"
                  onClick={this.onStartTimer}
                  disabled={isTimerRunning}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="stop-btn"
                  onClick={this.onStopTimer}
                  disabled={isTimerRunning}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="restart-btn"
                  onClick={this.onRestartTimer}
                  disabled={isTimerRunning}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
