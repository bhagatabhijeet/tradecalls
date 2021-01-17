import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/home.css";

export default function HomePageFooter() {
  return (
    <>
      {/* <Container fluid="lg"> */}
        <footer className="home-footer">
          <Row>
            <Col md>
              <h6>Pres Release</h6>
              <div className="footer-link-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, perspiciatis accusantium? Enim dolores, eaque error sequi, optio excepturi quia nam dolore placeat sunt nostrum reprehenderit aperiam praesentium laboriosam officia molestias labore reiciendis eum. Laboriosam repellendus enim neque omnis iusto nisi ex officiis delectus eius labore. Officia, dolorem hic quidem molestiae, vero, id error minus deserunt ab qui praesentium nisi nesciunt! Sed officiis possimus iure excepturi beatae voluptas recusandae sunt porro, doloremque quam mollitia culpa dolore enim perspiciatis. Illo laborum consequatur laboriosam! Nobis, quisquam illum fugiat quasi debitis nisi ullam repudiandae odit corrupti repellendus vel porro quis natus esse! Sit, rem.</div>
            </Col>
            <Col md>
              <h6>What's New</h6>
              <div className="footer-link-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, perspiciatis accusantium? Enim dolores, eaque error sequi, optio excepturi quia nam dolore placeat sunt nostrum reprehenderit aperiam praesentium laboriosam officia molestias labore reiciendis eum. Laboriosam repellendus enim neque omnis iusto nisi ex officiis delectus eius labore. Officia, dolorem hic quidem molestiae, vero, id error minus deserunt ab qui praesentium nisi nesciunt! Sed officiis possimus iure excepturi beatae voluptas recusandae sunt porro, doloremque quam mollitia culpa dolore enim perspiciatis. Illo laborum consequatur laboriosam! Nobis, quisquam illum fugiat quasi debitis nisi ullam repudiandae odit corrupti repellendus vel porro quis natus esse! Sit, rem.</div>
            </Col>
            <Col md>
              <h6>Developers</h6>
              <div className="footer-link-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, perspiciatis accusantium? Enim dolores, eaque error sequi, optio excepturi quia nam dolore placeat sunt nostrum reprehenderit aperiam praesentium laboriosam officia molestias labore reiciendis eum. Laboriosam repellendus enim neque omnis iusto nisi ex officiis delectus eius labore. Officia, dolorem hic quidem molestiae, vero, id error minus deserunt ab qui praesentium nisi nesciunt! Sed officiis possimus iure excepturi beatae voluptas recusandae sunt porro, doloremque quam mollitia culpa dolore enim perspiciatis. Illo laborum consequatur laboriosam! Nobis, quisquam illum fugiat quasi debitis nisi ullam repudiandae odit corrupti repellendus vel porro quis natus esse! Sit, rem.</div>
            </Col>
            <Col md>
              <h6>Company</h6>
              <div className="footer-link-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, perspiciatis accusantium? Enim dolores, eaque error sequi, optio excepturi quia nam dolore placeat sunt nostrum reprehenderit aperiam praesentium laboriosam officia molestias labore reiciendis eum. Laboriosam repellendus enim neque omnis iusto nisi ex officiis delectus eius labore. Officia, dolorem hic quidem molestiae, vero, id error minus deserunt ab qui praesentium nisi nesciunt! Sed officiis possimus iure excepturi beatae voluptas recusandae sunt porro, doloremque quam mollitia culpa dolore enim perspiciatis. Illo laborum consequatur laboriosam! Nobis, quisquam illum fugiat quasi debitis nisi ullam repudiandae odit corrupti repellendus vel porro quis natus esse! Sit, rem.</div>
            </Col>
            <Col md>5 of 5</Col>
              <div className="footer-link-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, perspiciatis accusantium? Enim dolores, eaque error sequi, optio excepturi quia nam dolore placeat sunt nostrum reprehenderit aperiam praesentium laboriosam officia molestias labore reiciendis eum. Laboriosam repellendus enim neque omnis iusto nisi ex officiis delectus eius labore. Officia, dolorem hic quidem molestiae, vero, id error minus deserunt ab qui praesentium nisi nesciunt! Sed officiis possimus iure excepturi beatae voluptas recusandae sunt porro, doloremque quam mollitia culpa dolore enim perspiciatis. Illo laborum consequatur laboriosam! Nobis, quisquam illum fugiat quasi debitis nisi ullam repudiandae odit corrupti repellendus vel porro quis natus esse! Sit, rem.</div>
          </Row>
          <Row>
            <Col lg>
              <nav className="footer-nav">
                <ul className="footer-nav-ul">
                  <li>Terms of Use</li>
                  <li>Trademarks</li>
                  <li>&copy; TrAdvise {new Date().getFullYear()}</li>
                </ul>
              </nav>
            </Col>
          </Row>
        </footer>
      {/* </Container> */}
    </>
  );
}
