import React from 'react'

class DropDown extends React.Component {
  constructor(props) {
    super()
    this.state = {
      toggled: true
    }
  }

  onClickDropDown() {
    this.props.onClick(this.props, this.state)

    this.setState({
      toggled: this.state.toggled === true ? false : true,
    })
  }

  render() {
    const classNames = ['drop-down']

    if (this.state.toggled === false) {
      classNames.push('selected')
    }

    return (
      <div key={this.props.c} className={classNames.join(' ')} onClick={this.onClickDropDown.bind(this)}>{this.props.type}</div>
    )
  }
}

export default DropDown
