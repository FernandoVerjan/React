import React, { Component } from 'react'
import UserCard from './UserCards';

interface NavbarProps {
  imageUrl: string
}



export default class NavbarClass extends Component<NavbarProps,{}> {
  constructor(props: NavbarProps) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a href="#">
      <img className='ms-4' src={this.props.imageUrl} alt="" width="200" height="120"/>
      </a>
      <ul className="navbar-nav ms-auto">
        <li className='me-5'>
          <span><UserCard/></span>
        </li>
      </ul>
  </div>
</nav>
    )
  }
}