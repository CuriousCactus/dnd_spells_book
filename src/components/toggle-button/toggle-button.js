import React from 'react'

class ToggleButton extends React.Component {
  constructor(props) {
    super()
    this.state = {
      toggled: true
    }
  }

  onClickButton() {
    this.props.onClick(this.props, this.state)

    this.setState({
      toggled: this.state.toggled === true ? false : true,
    })
  }

  // cFC - capitalize First Character
  cFC(string) {
    var capital = string.charAt(0).toUpperCase() + string.slice(1)
    return capital
  }

  render() {
    const classNames = ['btn']

    if (this.state.toggled === false) {
      classNames.push('selected')
    }

    return (
      <div key={this.props.c} className={classNames.join(' ')} onClick={this.onClickButton.bind(this)}>{this.cFC(this.props.type.toString())}</div>
    )
  }

}

export default ToggleButton
