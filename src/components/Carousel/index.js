import Carousel from "react-bootstrap/Carousel";
import { Ratio } from "react-bootstrap";
import image1 from "../../assets/img/01.jpg"
import image2 from "../../assets/img/02.png"
import image3 from "../../assets/img/03.jpg"

function Highlights() {
  return (
    <Carousel style={{marginTop:"4.5rem"}}>
      <Carousel.Item interval={3500}>
        <Ratio aspectRatio="21x9">
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Ratio>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <Ratio aspectRatio="21x9">
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Ratio>
        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <Ratio aspectRatio="21x9">
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Ratio>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Highlights;
