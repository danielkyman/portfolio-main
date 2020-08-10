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
        </main>
      </Container>
    </div>
  );
}

export default App;
