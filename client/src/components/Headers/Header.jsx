import React from "react";
import { withRouter } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


class Header extends React.Component {
  constructor() {
    super()

    this.routeChange = this.routeChange.bind(this);

  }
  routeChange() {
    this.props.history.push('/auth/login');
  }

  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "800px",
            backgroundImage:
              "url(" + require("assets/img/theme/sliit-login-page-bg.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <span className="mask bg-gradient-default opacity-2" />

          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've
                made with your work and manage your projects or assigned tasks
                </p>
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      {/* <input type="button"
                        style={{
                          minHeight: "50px",
                          backgroundImage:
                            "url(" + require("assets/img/theme/sliit-login-page-bg.jpg") + ")",
                        }}
                      /> */}
                      <CardTitle
                        tag="h2"
                        className="text-uppercase text-muted mb-0"
                      >
                        Login as a Student
                          </CardTitle><br></br>

                      <button type="button" class="btn btn-link"
                        style={{
                          minHeight: "228px",
                          minWidth: "230px",
                          backgroundImage:
                            "url(" + require("assets/img/theme/teacher_837826.png") + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                        onClick={this.routeChange}
                      ></button>
                      {/* <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Traffic
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <img  alt="..." src={require("assets/img/brand/download.jpg")} />
                            <i className="ni ni-delivery-fast" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sales
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" /> 1.10%
                        </span>{" "}
                        <span className="text-nowrap">Since yesterday</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Performance
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            49,65%
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> 12%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
