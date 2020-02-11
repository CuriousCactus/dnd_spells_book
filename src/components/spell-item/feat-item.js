import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'

class featItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showList: false,
      toggled: true,
     }

    this.addClassName = this.addClassName.bind(this)
    this.onPinClick = this.onPinClick.bind(this)
  }

  addClassName(e, i) {
    let spellState = this.state
    spellState.showList = spellState.showList === i ? false : i
    this.setState(spellState)
  }

  spellDescription(featItem, i) {
    if (this.state.showList === i) {
      return (
        <div className={"spell-definitions"}>
          <div className={"spell-top-level"}>
            <i>Prerequisites:</i>
          </div>
          <div className={"spell-details"}>
            <div className={"spell-prerequisite-race"}><b>Race:</b> {Array.isArray(featItem.f_prerequisite_race) ? featItem.f_prerequisite_race.join(", ") : featItem.f_prerequisite_race}</div>
            <div className={"spell-prerequisite-skill"}><b>Skill:</b> {Array.isArray(featItem.f_prerequisite_skill) ? featItem.f_prerequisite_skill.join(", ") : featItem.f_prerequisite_skill}</div>
          </div>
          <div className={"spell-description"}>{ReactHtmlParser(featItem.f_description)}</div>
        </div>
      )
    }
  }

  onPinClick() {
    this.props.pinStatus(this.state.toggled, this.props.spell.f_id)
    this.setState({
      toggled: this.state.toggled === false
    })

  }

  render() {
    let featItem = this.props.spell
    let i = featItem.f_id

    return (
      <div className={this.state.showList === i ? "spell-dropdown" : "spell-dropdown hide-child"}>
        <div className={"spell-name"} onClick={(e) => {this.addClassName(e, i)}}>
          <span>{featItem.f_name}</span>
          <svg className={this.state.showList === i ? "chevron opened" : "chevron"} width="30" height="30" viewBox="0 0 10 16"><path fillRule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"></path></svg>
        </div>

        <div onClick={this.onPinClick.bind(this)} className={"spell-pin"}>
          <svg width="40" height="40" viewBox="0 0 8 16"><path fillRule="evenodd" d="M4 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM4 12a4 4 0 100-8 4 4 0 000 8z"></path></svg>
        </div>
        {this.spellDescription(featItem, i)}
      </div>
    )
  }

}

export default featItem