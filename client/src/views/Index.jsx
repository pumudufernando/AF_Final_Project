import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

//images
import Background from "../assets/img/brand/Image2.jpg";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  FormGroup,
  Form,
  Input,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";
/*import Footer from "../components/Footers/AdminFooter";*/

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        {/* <Container className="mt--7" fluid>
          <Card className="bg-secondary shadow">
            <CardBody>
              <Container fluid>
                <div style={{ height: 500 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={Background}
                    alt="background"
                  />
                </div>
              </Container>
            </CardBody>
          </Card>
        </Container> */}
      </>
    );
  }
}

export default Index;
