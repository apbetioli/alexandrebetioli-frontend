import React from "react";
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";

class LoginForm extends React.Component {
    render() {
      return (
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-2">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="btn-wrapper text-center"> 
                      <button onClick={() => {localStorage.removeItem('userLogged'); window.location.reload();}}>logout</button>
                      <br/>
                      <br />
                      <Facebook />
                      <br/>
                      <br/>
                      <br/>
                      <Google />
                      <br/>
                      <br/>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }
}

export default LoginForm;
