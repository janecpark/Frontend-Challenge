import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import './NavMenu.css'

/** Navigation component */

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavMenu">
      <Navbar color="white" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='Navbar-toggler'>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="active" href="#">
                Link 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 4</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
          <NavbarBrand href="/" className="btn btn-primary nav-btn">
            Lorem Ipsum
          </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavMenu;
