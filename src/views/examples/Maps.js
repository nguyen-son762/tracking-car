import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import Map from "./Map";
const REACT_GOOGLE_KEYS = {
  mapsKey: "AIzaSyAuqtG8XhmKQPGoYpFi9dqZmhZTDWGCxE0",
  mapsOtherkey: "AIzaSyA5Lt3E5gYb-lfogvaSpCrvCpocLqHwNOI",
};

const Maps = () => {
  return (
    <div>
      <Header />
      {/* Page content */}
      <Container className="mt-2" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${REACT_GOOGLE_KEYS.mapsKey}&callback=initMap`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div
                    style={{
                      height: `600px`,
                      margin: `auto`,
                    }}
                  />
                }
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Maps;
