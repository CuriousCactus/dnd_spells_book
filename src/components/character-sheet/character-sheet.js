import React, { Component } from 'react'
import Data from '.././../data/warlock.json'
import DropDown from '../drop-down/drop-down'

class CharacterSheet extends Component {
  constructor(props) {
    super()
    this.state = {
      data: Data,
      classes: ["warlock"]
    }
  }

  render() {
    return (
      <div className={"dndapp-character-sheet"}>
        <div className={"dndapp-selectors"}>
          <DropDown title={'Class'} values={this.state.classes} setFilter={this.setFilter} />
          <DropDown title={'Sub-class'} values={this.state.subclasses} setFilter={this.setFilter} />
          <DropDown title={'Level'} values={this.state.levels} setFilter={this.setFilter} />
        </div>
        <div className={"dndapp-data"}>
        </div>
      </div>
    )
  }
}

export default CharacterSheet
