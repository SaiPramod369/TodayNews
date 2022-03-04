import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Navb = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark" fixed='top'>
        <Container style={{ marginLeft:"10px",marginRight:"10px" }}>
          <Link to="/" style={{ textDecoration: 'none',fontFamily: 'Roboto'}}> <Navbar.Brand  href="/" style={{color:'white ',backgroundColor:'#FF5733', padding:'8px',borderRadius:"5px 25px"}} className='hi'><i class="fas fa-newspaper" style={{color:'white '}}></i>  TodayNews</Navbar.Brand></Link>
          <Nav className="me-auto active"style={{marginLeft:"350px",marginRight:"10px" }} >
            <Link to="/india" style={{ textDecoration: 'none', marginRight:"10px",fontFamily: 'Roboto'}}> <Nav.Link  href="/india"  className='hil'>India-News</Nav.Link></Link>
            <Link to="/world" style={{ textDecoration: 'none',marginRight:"10px" ,fontFamily: 'Roboto'}}><Nav.Link href="/world"  className='hil'>World-News</Nav.Link></Link>
            <Link to="/corona" style={{ textDecoration: 'none',marginRight:"10px",fontFamily: 'Roboto' }}><Nav.Link href="/corona"  className='hil'>Corona-News</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navb
