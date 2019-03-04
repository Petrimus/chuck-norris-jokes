import React from 'react'
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap/'
import Button from 'react-bootstrap/Button'

const PersonalizeForm = (props) => {


  return (
    <div>
    <Form onSubmit={props.submit} >
      <Form.Row>
        <Col>
          <Form.Control name="firstName" placeholder="First name" />
        </Col>
        <Col>
          <Form.Control name="lastName" placeholder="Last name" />
        </Col>
        <Button type="submit">change name</Button>
      </Form.Row>
    </Form>
    <Button  onClick={props.handleReturn}>set name back to Chuck Norris</Button>
    </div>
  )
}

export default PersonalizeForm