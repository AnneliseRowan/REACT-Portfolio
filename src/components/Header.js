import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'; 

const Header = () => {

    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/" style={{marginLeft:"20px", fontWeight:"bolder"}}>ANR</NavbarBrand>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Resume</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
        </div>
    );
}

export default Header; 