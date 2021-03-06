import {
  Navbar,
  Nav,
  FormControl,
  Form,
  NavDropdown,
  Container,
  Col,
} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/linkedin.png";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

const NavBar = () => {

  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      let response = await fetch(
        `http://localhost:5001/profiles/61eab4dedad7a313cd107fb4`
      );
      if (response.ok) {
        let data = await response.json()

        console.log(data)
        setProfile(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile()
  }, [])




  return (
      <Navbar bg="light" expand="lg" className="row" fixed="top">
        <Container>
        <Col md={6} className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img src={logo} style={{ width: "36px" }}></img>
          </Navbar.Brand>
          <i className="bi bi-search  mr-2"></i>
          <Form inline className="border-non">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/feed/">
            <Nav.Link
              href="#home"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-home"></i>Home
            </Nav.Link>
            </Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-user-friends"></i>My Network
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-suitcase"></i>Jobs
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-comment-dots"></i>Messaging
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <i class="fas fa-bell"></i>Notications
            </Nav.Link>
            <div className="d-flex flex-column align-items-center">

            
            <img src={profile.image} alt=" " className="profile-img ml-1 mr-2" style={{width:"25px" , height:"25px"}} />
            <NavDropdown title="Me" style={{fontSize:"13px"}} id="basic-nav-dropdown">
              
                <div className="d-flex">
                  <div>
                     <img src={profile.image} alt=" " className="profile-img ml-1 mr-2" style={{width:"40px" , height:"40px"}} /> 
                  </div>
                  <div className="d-flex flex-column">
                    <span className="span-big" style={{fontSize:"14px"}}>{profile.name}{" "}{profile.surname}</span>
                    <span className="span-small text-muted">{profile.title}</span>
                  </div>
                </div>
              <NavDropdown.Item>
                
                <Link to="/profile/619234e538541a787a13c554">
                  <div className="button-blue" style={{width:"100%"}}>View Profile</div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
