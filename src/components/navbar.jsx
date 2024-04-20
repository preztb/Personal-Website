import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import House from'../assets/house.png'
import './custom.scss'
import './custom.css'
import Divider from './Divider';

function BasicExample() {
  return (
    
    <Navbar sticky='top' className='nav-color' data-bs-theme='light'>
        <Container>
          <Navbar.Brand href="/"><Image src={House} width='10%'/></Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href='/hobbies'>Hobbies</Nav.Link>
            <Nav.Link href='/family'>Family</Nav.Link>
        
            
          </Nav>
        </Container>
      </Navbar>
  );
}

export default BasicExample;