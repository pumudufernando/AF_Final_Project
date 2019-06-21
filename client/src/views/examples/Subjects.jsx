import React, { Component } from 'react';
import axios from 'axios'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
// core components
//import UserHeader from "components/Headers/UserHeader.jsx";
import AdminHeader from "components/Headers/AdminHeader.jsx";
import StudentHeader from "components/Headers/StudentHeader.jsx";
import { throws } from 'assert';

class Subjects extends React.Component {
    constructor() {
        super()

        this.state = {
            assignments: [],
            assignments1: [],
            assignments2: '',
            selectedassignment: '',
            studentID: 'stu1',
            status1:"yes",
            checkUploads:[],
            assName: ''
            
        }
        this.cilckLink = this.cilckLink.bind(this)

    }

    // cilckLink() {
    //     //alert(e.target.id)
    //     axios.get('http://localhost:5000/api/checkUploads/xfgfg /'+ this.props.match.params.cName + '/' + this.state.studentID).then(res => {
    //         //console.log(res.data);
    //        // console.log(this.state.status1)
    //         if(res.data==''){
               
    //     this.setState({

    //         status1:"no"
    //     })
    //     alert(this.state.status1)
    //         }
    //     })
    // }

    cilckLink = (e) => {

        this.setState({
            assName: e.target.id
        })

        axios.get('http://localhost:5000/api/checkUploads/'+e.target.id+ '/'+ this.props.match.params.cName + '/' + this.state.studentID).then(res => {

        if(res.data!=''){
           
            confirmAlert({
                title: 'You have allready Uploaded the Assignment',
                message: 'Are you want to Edit.',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => this.props.history.push('/student/studentView/'+ this.props.match.params.cName+'/'+this.state.assName)
                  },
                  {
                    label: 'No',
                    onClick: () => this.props.history.push('/student/subject/'+ this.props.match.params.cName)
                  }
                ]
              })
        }
        else{
            axios.get('http://localhost:5000/assignment/getAssignmentBycName_aName/' + this.props.match.params.cName+'/'+this.state.assName).then(res => {
            console.log(res.data);
            this.setState({
                assignments2: res.data.dueDate
            })
            console.log(this.state.assignments2);

            this.props.history.push('/student/uploadAssignments/'+ this.props.match.params.cName+'/'+this.state.assName+'/'+this.state.assignments2)
        })
        }


    
        })        
      };
    

    componentDidMount() {

        axios.get('http://localhost:5000/assignment/getAssignmentByName/' + this.props.match.params.cName).then(res => {
            console.log(res.data);
            this.setState({
                assignments: res.data
            })
            console.log(this.state.assignments);
        })
    }


    render() {

        return (

            <>
                <AdminHeader />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="8">
                                    <h3 className="mb-0">Module Materials</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            {/* <Form onSubmit={this.onSubmit}> */}
                            <Form>
                                <div className="pl-lg-4">
                                    <FormGroup className="form-group col-md-8">
                                        <div>
                                            {this.state.assignments.map(cassignment => {
                                                return (
                                                    <div>
                                                        {/* <p><a href={`/admin/uploadAssignments/${cassignment.courseName}/${cassignment.assignmentName}/
                                                        ${cassignment.dueDate}`}>{cassignment.assignmentName}</a></p><br /> */}
                                                         <Link to onClick={this.cilckLink} id={cassignment.assignmentName}>{cassignment.assignmentName}</Link>
                                        
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                    </FormGroup>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </>
        )

    }
}
export default Subjects;
