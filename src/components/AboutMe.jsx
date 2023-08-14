import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutMe() {
  return (
    <section id="aboutme">
      <Container className='my-3'>
        <Row className="align-items-center">
          <Col md={6} className="p-6">
            <img
            //   src="src/assets/images/photo/innafedorenko3.jpg"
              src="https://github.com/InnaFedorenko/if_portfolio_react/blob/main/src/assets/images/photo/innafedorenko3.jpg"
              alt="Inna Fedorenko"
              className="rounded-full shadow-md img-fluid"
            />
          </Col>
          <Col md={6} className="p-6 ">
            <h3 className="text-3xl text-gray-1000 font-bold leading-none mb-3">
              Hi, I'm Inna Fedorenko
            </h3>
            <p className="text-gray-800 mb-8">
              I am a Full Stack Web Developer with a background in Business
              Administration and Management. I have a passion for learning and
              creating new things. I am a hard worker, a team player, and I am
              always looking for ways to improve my skills and knowledge. I am
              currently looking for a position as a Full Stack Web Developer.
            </p>
            <div >
                    <a href="/contact" className="btn btn-dark btn-lg">
                        Get in Touch
                    </a>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
