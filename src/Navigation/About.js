import React,{useContext} from 'react'
import Context  from "../context/UserContext";
import Carousel from 'react-bootstrap/Carousel';
import chandigarh from '../images/chandigarh.png';
import delhi from '../images/delhi.png';
import weather from '../images/weather1.jpeg';
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';


import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
function About() { 
  const {userName}=useContext(Context);
  return (
 <>

 <h1>welcome {userName}</h1> 
 <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={weather}
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h3>Weather</h3>
          <p>lorea</p>
          <LoremIpsum p={2} />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={delhi}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chandigarh}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 </>
  )
}

export default About;
