import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


const ControlledCarousel=({source})=> {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
        {source.map(item=>(
            <Carousel.Item>
            <Image src={item}fluid />
          </Carousel.Item>
        )
        )}
    </Carousel>
  );
}

export default ControlledCarousel;