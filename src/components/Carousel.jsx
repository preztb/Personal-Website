import Carousel from 'react-bootstrap/Carousel';
import Image18 from '../assets/me-and-renee.png'
import Texas from '../assets/texas-me.png';
import Image from 'react-bootstrap/esm/Image';
import Pop from '../assets/pop.png';
import './custom.css';

function HomeScroll() {
  return (
    <Carousel fade data-bs-theme='light' className='h-text'>
      <Carousel.Item>
        <Image src={Image18} className='item' />
        <Carousel.Caption >
          <div className='main-border'>
          <h1 className='main-text'>Tyler Beck</h1>
          </div>
          <div className='background-box'>
          <h3>My girlfriend, Renee, and I</h3>
          <p>On our trip to Jupiter, Florida.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Texas} className='item'/>
        <Carousel.Caption>
        <div className='main-border'>
        <h1 className='main-text'>Tyler Beck</h1>
        </div>
          <div className='background-box'>
            <h3>My parents, younger brother, Cam, and I</h3>
            <p>At the University of Texas football game where my Uncle Tim was coaching.</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeScroll;