import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header py-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-muted mb-0 text-center h3"
                        >
                          All vehicle
                        </CardTitle>
                        <p className="h1 font-weight-bold mb-0 text-center text-xl mt-4">
                          35
                        </p>
                      </div>
                    </Row>
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
                          className="text-muted mb-0 text-center h3"
                        >
                          On Trip
                        </CardTitle>
                        <p className="h1 font-weight-bold mb-0 text-center text-xl mt-4">
                          19
                        </p>
                      </div>
                    </Row>
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
                          className="text-muted mb-0 text-center h3"
                        >
                          Idling
                        </CardTitle>
                        <p className="h1 font-weight-bold mb-0 text-center text-xl mt-4">
                          4
                        </p>
                      </div>
                    </Row>
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
                          className="text-muted mb-0 text-center h3"
                        >
                          Parking
                        </CardTitle>
                        <p className="h1 font-weight-bold mb-0 text-center text-xl mt-4">
                          12
                        </p>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
