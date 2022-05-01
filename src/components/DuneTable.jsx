import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap"

let DuneTable = ({duneQuotes}) => {
    return (
        <Container >
        <Row>
            {duneQuotes.map((quotes) => (
               
                        <Col className="col-4" key={quotes.id} >
                            <Card>
                        <Card.Header>Dune Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {quotes.quote}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                        </Card>
                        </Col>

             
            ))}
            </Row>
        </Container>

    )
}

export default DuneTable