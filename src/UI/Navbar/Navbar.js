import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <Sidebar
      as={Menu}
      icon='labeled'
      inverted
      vertical
      visible={true}
      width='thin'
    >
      <Menu.Item as={Link} to='/'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to='/user'>
        <Icon name='user' />
        User
      </Menu.Item>
      <Menu.Item as={Link} to='/wantajob'>
        <Icon name='user' />
        Want a job
      </Menu.Item>
      <Menu.Item as={Link} to='/wanttohire'>
        <Icon name='user' />
        Want to Hire
      </Menu.Item>
    </Sidebar>
    )
  }
}
