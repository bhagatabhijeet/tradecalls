import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import LogoTrans from "../assets/images/LogoTrans.png";
import Logo from "../assets/images/Logo.png";
import "../assets/styles/home.css";
import { useEffect } from "react";
import axios from "axios";
import HomePageFooter from "../components/HomePageFooter";

export default function HomePage() {
  // useEffect(()=>{
  //   console.log("Getting data");
  //   const options = {
  //     method: 'GET',
  //     url: 'https://yahoo-finance-low-latency.p.rapidapi.com/ws/insights/v1/finance/insights',
  //     params: {symbol: 'AAPL'},
  //     headers: {
  //       'x-rapidapi-key': '58b1a6b911msh8d6a4bf24d013e8p172b22jsn5450aa41aa26',
  //       'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com'
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   },[]);

  // });

  return (
    <>
      <div className="top-bar">
        <img src={LogoTrans} alt="TrAdvise logo" className="logo" />
      </div>
      {/* <Navbar className="navbar" expand="lg">
  <Navbar.Brand href="#home"><img src={Logo} alt="TrAdvise logo" className="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}
      <Container fluid="lg">
        {/* <Row>
        <Col>1 of 1</Col>
      </Row> */}
        <Jumbotron fluid className="cutomjumbotron">
          {/* <Container> */}
            {/* <div className="jumbotron"> */}
              <img
                src={Logo}
                alt="Tradvise logo"
                id="homelogomain"            
              />
              <div className="home-bright">Welcome to TrAdvise</div>
              {/* <p>
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p> */}
             
            {/* </div> */}
          {/* </Container> */}
          <Button id="signupButton">Sign Up</Button>
        </Jumbotron>
      </Container>
      <HomePageFooter />
    </>
  );
}
