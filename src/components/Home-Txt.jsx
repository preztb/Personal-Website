import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './custom.css'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import YountT from '../assets/tyler-young.png'
import { useEffect, useRef } from 'react';




function Homebox() {
    const blockRef = useRef(null);
    const imageRef = useRef(null);
    


    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: '0px', // no margin
            threshold: 0.5, // when half of the block is visible
        };

        const longs = {
            root: null, // viewport
            rootMargin: '0px', // no margin
            threshold: 0.01, // when half of the block is visible
        };


        
       
        

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in'); // Add slide-in class when block is visible
                } else {
                    entry.target.classList.remove('slide-in');
                }
            });
        }, longs);

        const blockObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                } else {
                    entry.target.classList.remove('slide-in');
                }
            });
        }, options);

        imageObserver.observe(imageRef.current);
        blockObserver.observe(blockRef.current);
       

        return () => {
            imageObserver.unobserve(imageRef.current);
            blockObserver.unobserve(blockRef.current);
            
        };
    }, []);

    
    
    return(
    <Container>
       
        <Row className='h-text'>
            <Col>
            <div className='space-block' >
            <Image src={YountT} alt='Me as a child' className='young-image off-screen2' ref={imageRef}/>
            </div>
           
            <h1 className='about-center'>About Me</h1>
            
            <p className='p-indent'>My name is Tyler Beck, I am currently a Junior at the University of Cincinnati studying Computer Science at the college of
                Engineering and Applied Sciences. Some of my career intrests are Data Science, Artificial Intelligence, App Developement, Full Stack Development, and Financial
                Services. I love to challange myself and learn new things, as overcoming obstacles is something I take great pride in. Some of my hobbies include
                reading, playing basketball, coding, traveling, investing, and generally trying new things, such as playing guitar or woodworking.</p>
              
                
                <div className='block-pad off-screen' ref={blockRef}>
                <blockquote>"Don't listen to the person who has the answers; listen to the person who has the questions." -Albert Einstein</blockquote> 
                </div>
                
                
            <p className='p-indent'>My previous work experiences include: Warehouse Asscoiate at <a href='https://www.emscorporate.com/nannicola'>Nannicola Inc</a>
            , IT Intern at <a href='https://www.cafarocompany.com/'>Cafaro Company</a>, English Tutor at <a href='https://www.uc.edu/campus-life/learning-commons/programs/writing-center/meet-the-tutors.html'>
                University of Cincinnati</a>, and Computer Science co-op at <a href='https://www.copeland.com/en-us'>Copeland</a>. 
                I would love to work for a company that challenges me everyday, so that I can not only become a better programmer, but a better person. Throughout my
                 young life I have experienced many trials, and with that experience I have come to understand that success does not come without failure. Since those 
                 encounters, I have been actively seeking for discomfort, both in my career and my personal life, and I can honesty say this realization has completely 
                 changed my life for the better. </p> 
                 <p className='p-indent'>


                 </p>
                  
            </Col>
        </Row>
    </Container>
        
  );
}

export default Homebox;