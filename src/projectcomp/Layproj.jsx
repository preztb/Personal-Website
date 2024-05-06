
import './proj.css'
import Image from 'react-bootstrap/Image'
import Github from '../assets/github-mark.svg'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Layproj = () => {
    
    
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Link to='https://github.com/preztb/Personal-Website'>
                    <div className='image-str'>
                    <Image src={Github} alt="github logo"/>
                    </div>
                </Link>
                </Col>
            </Row>
        </Container>
        
      
    </div>
  )
}

export default Layproj
