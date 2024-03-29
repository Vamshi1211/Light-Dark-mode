// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isClicked: false,
  }

  buttonClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getThemeText = () => {
    const {isClicked} = this.state
    return isClicked
      ? {
          text: 'Dark Mode',
          theme: 'light-theme',
          head: 'light-heading',
          button: 'light-button',
        }
      : {
          text: 'Light Mode',
          theme: 'theme-container',
          head: 'heading',
          button: 'button',
        }
  }

  render() {
    const {text, theme, head, button} = this.getThemeText()

    return (
      <div className="bg-container">
        <div className={theme}>
          <h1 className={head}>Click To Change Mode</h1>
          <button type="button" className={button} onClick={this.buttonClicked}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
