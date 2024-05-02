
import './proj.css'
import Image from 'react-bootstrap/Image'
import Github from '../assets/github-mark.svg'
import { Link } from 'react-router-dom'

const Layproj = () => {
    
    
  return (
    <div>
        <Link to='https://github.com/preztb/Personal-Website'>
            <Image src={Github} alt="github logo"/>
        </Link>
      
    </div>
  )
}

export default Layproj
