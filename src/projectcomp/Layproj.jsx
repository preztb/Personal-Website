
import './proj.css'
import Github from '../assets/github-mark.png'
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
                
                <ul>
                  <li>
                  <div className='image-str'>
                    <Link to='https://github.com/preztb/Personal-Website'>
                      
                      <img alt="github logo"  className='img-sz' src={Github}/>
                      
                    </Link>
                  </div>
                  </li>
                  
                <div className='image-str '>

                
                <p>The repository for this website</p>
                </div>
                  <li>
                  <div className='image-str'>
                  <Link to='https://github.com/preztb/Personal-Website'>
                    
                    <img alt="github logo"  className='img-sz' src={Github}/>
                    
                  </Link>
                  </div>
                  



                  </li>
                </ul>
                
                
                </Col>
            </Row>
        </Container>
        
      
    </div>
  )
}

export default Layproj
