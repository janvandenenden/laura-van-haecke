import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import contactStyles from "../styles/contact.module.scss"

const contactPage = () => {
    return (
      <Layout>
        <Container className={contactStyles.content}>
         
            <h1>Contact</h1>
  
            <Form method="post" action="https://formspree.io/lauravhaecke@gmail.com">
              <Form.Row>
                <Form.Group className="col-xs-12 col-md-6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="What's your name?" required />
                </Form.Group>
  
                <Form.Group
                  className="col-xs-12 col-md-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="_replyto"
                    placeholder="What's your email address?"
                    required
                  />
                </Form.Group>
              </Form.Row>
  
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows="3"
                  placeholder="So what do you want to know?"
                  required
                />
              </Form.Group>
  
              <Form.Group style={{textAlign:"center"}}>
                <Button className={contactStyles.button} type="submit">
                  send
                </Button>
              </Form.Group>
            </Form>
          
        </Container>
      </Layout>
    )
  }
  
  export default contactPage