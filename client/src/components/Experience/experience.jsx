import React from 'react';
import { Col, Form, Row , Container, Dropdown } from 'react-bootstrap';
import styles from './experience.module.css';
import Navbar from '../../uikit/Navbar/Navbar';
import { Link } from 'react-router-dom';

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employer : '',
            job_title : '',
            city_job : '',
            city_state : '',
            start_month : 'January',
            start_year : '2022',
            end_month : 'January',
            end_year: '2030',
            isChecked: false
        };
      }
  
      saveAndContinue = (e) => {
        this.props.nextStep();
      };

      getMonth=(i)=>{
        const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[i];
      }

      getYear(i){
        const d = new Date();
        let year = d.getFullYear();
        let year_list=[];

        for(let i=0;i<10;i++)
          year_list.push(year+i);

        return(year_list[i])
      }

      toggleChange=()=>{
        this.setState({
          isChecked: !this.state.isChecked
        })
      }

    render() { 
        return (
      <div className={styles.container}>
      <div><Navbar array={["Personal Details > Education > Experience"]}/></div>
      <div className={styles.main}>
      <Container>
        <Form onSubmit={this.handleSubmit} ref={(el)=> this.myFormRef=el}>
            <h1>Experience</h1>
            <Form.Group className="p-3">
              <Row>
              <Col>
              Employer
              <Form.Control name="employer" value={this.state.employer} placeholder="Ex : Oracle" onChange={this.handleChange}></Form.Control>
              </Col>
              <Col>
              Job Title
              <Form.Control name="job_title" value={this.state.job_title} placeholder="Ex : FrontEnd Developer" onChange={this.handleChange}></Form.Control>
              </Col>
              </Row>
            </Form.Group>
            <Form.Group className="p-3">
            <Row>
              <Col>
              City
              <Form.Control name="city_job" value={this.state.city_job} onChange={this.handleChange}></Form.Control>
              </Col>
              <Col>
              State
              <Form.Control name="city_state" value={this.state.city_state} onChange={this.handleChange}></Form.Control>
              </Col>
            </Row>
            </Form.Group>
            <Form.Group className="p-3">
            <Row>
              <Col>
            Start Month
            <Dropdown>
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.start_month}
                  </Dropdown.Toggle> 
              <Dropdown.Menu name="start_month" value={this.state.start_month} onChange={this.handleChange}>
                <Dropdown.Item value={this.getMonth(0)}>{this.getMonth(0)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(1)}>{this.getMonth(1)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(2)}>{this.getMonth(2)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(3)}>{this.getMonth(3)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(4)}>{this.getMonth(4)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(5)}>{this.getMonth(5)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(6)}>{this.getMonth(6)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(7)}>{this.getMonth(7)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(8)}>{this.getMonth(8)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(9)}>{this.getMonth(9)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(10)}>{this.getMonth(10)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(11)}>{this.getMonth(11)}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
              <Col>
              Start year
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.start_year}
              </Dropdown.Toggle>
              <Dropdown.Menu name="start_year" value={this.state.start_year} onChange={this.handleChange}>
                  <Dropdown.Item value={this.getYear(0)}>{this.getYear(0)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(1)}>{this.getYear(1)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(2)}>{this.getYear(2)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(3)}>{this.getYear(3)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(4)}>{this.getYear(4)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(5)}>{this.getYear(5)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(6)}>{this.getYear(6)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(7)}>{this.getYear(7)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(8)}>{this.getYear(8)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(9)}>{this.getYear(9)}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              <Col>
              End month
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.end_month}
                </Dropdown.Toggle>
                <Dropdown.Menu name="end_month" value={this.state.end_month} onChange={this.handleChange} disabled={ (this.state.isChecked!==true) }>
                <Dropdown.Item value={this.getMonth(0)}>{this.getMonth(0)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(1)}>{this.getMonth(1)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(2)}>{this.getMonth(2)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(3)}>{this.getMonth(3)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(4)}>{this.getMonth(4)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(5)}>{this.getMonth(5)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(6)}>{this.getMonth(6)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(7)}>{this.getMonth(7)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(8)}>{this.getMonth(8)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(9)}>{this.getMonth(9)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(10)}>{this.getMonth(10)}</Dropdown.Item>
                <Dropdown.Item value={this.getMonth(11)}>{this.getMonth(11)}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              <Col>
            End Year        
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.end_year}
                </Dropdown.Toggle>    
              <Dropdown.Menu name="end_year" value={this.state.end_year} onChange={this.handleChange} disabled={ (this.state.isChecked!==true) }>
                  <Dropdown.Item value={this.getYear(0)}>{this.getYear(0)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(1)}>{this.getYear(1)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(2)}>{this.getYear(2)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(3)}>{this.getYear(3)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(4)}>{this.getYear(4)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(5)}>{this.getYear(5)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(6)}>{this.getYear(6)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(7)}>{this.getYear(7)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(8)}>{this.getYear(8)}</Dropdown.Item>
                  <Dropdown.Item value={this.getYear(9)}>{this.getYear(9)}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
            </Row>
              </Form.Group>
                  <p className="p-3">
                  <Form.Check type='checkbox' id={`default-checkbox`} value={this.props.isChecked} label={`currently working`} onClick={()=>this.toggleChange()}/>
                      <Form.Group htmlFor="group"> 
                  </Form.Group>
                  </p>
            <Form.Group className='m-5'>
              <Link className={styles.link} to="/education">Back</Link>
              <Link className={styles.link1} to="/project" onClick={this.saveAndContinue}>Save and Continue</Link>   
            </Form.Group>  
        </Form>
        </Container>
        </div>
        </div>
    )}
}
 
export default Experience;