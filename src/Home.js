import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div style={{ fontFamily: 'Roboto', marginTop: "7%" }} className='container'>
            <h4 className='ho'><i class="fas fa-grip-lines-vertical"></i> NEWS</h4>
            <Container>
                <Row >
                    <Link to="/india" style={{ width: '350px', height: '200px', textDecoration: 'none' }}>
                        <Col style={{ backgroundColor: "black", width: '267px', height: '200px', borderRadius: "5px 25px" }} className='ind' md={3} >
                            <h4 className='centered' style={{ color: '#FF5733' }}><center>INDIA</center></h4>
                        </Col>
                    </Link>
                    <Link to="/world" style={{ width: '350px', height: '200px', textDecoration: 'none' }}>
                        <Col md={{ span: 3, offset: 1 }} style={{ backgroundColor: "black", width: '267px', height: '200px',borderRadius: "5px 25px" }} className='wod'>
                            <h4 className='centered' style={{ color: '#FF5733' }}><center>WORLD</center></h4>
                        </Col>
                    </Link>
                    <Link to="/corona" style={{ width: '350px', height: '200px', textDecoration: 'none' }}>
                        <Col md={{ span: 3, offset: 1 }} style={{ backgroundColor: "black", width: '267px', height: '200px', borderRadius: "5px 25px" }} className='cor'>
                            <h4 className='centered' style={{ color: '#FF5733' }}><center>CORONA</center></h4>
                        </Col>
                    </Link>
                </Row>
            </Container>

        </div>
    )
}

export default Home