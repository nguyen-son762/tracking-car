import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
const REACT_GOOGLE_KEYS = {
  mapsKey: "AIzaSyDZfVO29Iytspv4xz7S68doIoiztiRLhbk",
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
              {/* <APIProvider apiKey={REACT_GOOGLE_KEYS.mapsKey}>
                <Map
                  style={{ width: "100%", height: "600px" }}
                  defaultCenter={{ lat: 22.54992, lng: 0 }}
                  defaultZoom={3}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                />
              </APIProvider> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.232017641082!2d105.83771318512251!3d20.98333463947274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac42eb8919b9%3A0x6b6a3f524a46ddbe!2zNiBQLiBLaW0gxJDhu5NuZywgR2nDoXAgQsOhdCwgSG_DoG5nIE1haSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711789649828!5m2!1svi!2s"
                width="100%"
                height="600px"
                loading="lazy"
                className="min-h-[260px] rounded-[20px]"
              ></iframe>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Maps;
