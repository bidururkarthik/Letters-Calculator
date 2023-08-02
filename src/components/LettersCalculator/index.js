import React, {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  handleInputChange = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    const letterCount = count.replace(/[^a-zA-Z]/g, '').length

    return (
      <div className="bgcontainer">
        <div className="mycontainer">
          <div className="lettercountcontainer">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="connect" className="labelname">
              Enter the phrase
            </label>
            <input
              type="text"
              id="connect"
              placeholder="Enter the phrase"
              className="inputSize"
              onChange={this.handleInputChange}
              value={count}
            />

            {/* Display the letter count only if the count is greater than 0 */}

            <p className="button">No. of letters: {letterCount}</p>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="imagesize"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
