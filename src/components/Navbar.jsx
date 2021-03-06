import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>User Management System</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
      
      </Menu>
    )
  }
}
