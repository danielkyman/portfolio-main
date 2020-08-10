import React from "react";
import "./sass/index.scss";
import banner from "./img/ic-die-format.jpg";
import iconjs from "./img/icons/icons8-js-64.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App user-select-none">
      <Container>
        <header>
          <Card>
            <Card.Img src={banner} />
            <Card.ImgOverlay>
              <Card.Title>
                <h1>Daniel Kyman</h1>
              </Card.Title>
              <Card.Text>Software Engineer</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  “Sometimes it is the people no one can imagine anything of who
                  do the things no one can imagine.”
                </p>
                <footer className="blockquote-footer">
                  <cite>Alan Turing</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </header>
        <main>
          <CardDeck>
            <Col>
              <Row>
                <Card border="dark" style={{ width: "18rem" }}>
                  <Card.Header>
                    <Card.Img id="js-icon" src={iconjs} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Card border="dark" style={{ width: "18rem" }}>
                  <Card.Header>
                    <Card.Img id="js-icon" src={iconjs} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Row>
              <Row>
                <Card border="dark" style={{ width: "18rem" }}>
                  <Card.Header>
                    <Card.Img id="js-icon" src={iconjs} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Card border="dark" style={{ width: "18rem" }}>
                  <Card.Header>
                    <Card.Img id="js-icon" src={iconjs} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Row>
            </Col>
          </CardDeck>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h2>References</h2>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      “Clever rockstar of a coder with a magnetic personality
                      and the strongest work ethic you will ever find in a
                      candidate.”
                    </p>
                    <footer className="blockquote-footer">
                      <cite>Team Lead</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Daniel is someone who always pushes for the best. He would
                      be the first person I would think to partner with on any
                      project and he is an ideal team mate.
                    </p>
                    <footer className="blockquote-footer">
                      <cite>Peer / Colleague</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Daniel embraces challenges instead of avoiding them. When
                      he worked on our team, he always insisted on doing things
                      properly. He refused to take the easy way out. I admire
                      his determination to maintain high standards and never
                      compromise the project’s integrity.
                    </p>
                    <footer className="blockquote-footer">
                      <cite>Peer / Colleague</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Daniel is one of the strongest coders that I have met in
                      my time at Lambda. I think he is a tremendously hard
                      worker and an asset for any team.
                    </p>
                    <footer className="blockquote-footer">
                      <cite>Peer / Colleague</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Card>
            <Card.Header as="h2" className="text-center">
              Get In Touch
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column sm={2}>
                    Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="name" placeholder="Name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalMessage">
                  <Form.Label column sm={2}>
                    Message
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      type="message"
                      placeholder="Message"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </main>
      </Container>
    </div>
  );
}

export default App;
