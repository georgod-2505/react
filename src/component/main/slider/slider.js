import React from 'react';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../../styles/slider.css'
function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <></>
    // <Carousel 
    //   responsive={responsive}
    //   centerMode={true}
    //   infinite={true}
    //   containerClass="carousel-container"
    //   itemClass="carousel-item-padding-40-px"
    // >
    //   <div className='card'>
    //     <img src="https://www.vollversion-software.de/cdn/shop/files/VS-Banner_Windows_11_3e9baea2-afdf-447b-948d-a4d763b205c8_1200x.png?v=1636378657"/>
    //   </div>
    //   <div className='card'>
    //     <img src="https://softwaresolution24.com/cdn/shop/files/SS24-W11-banner_4ba722c8-a8b1-4fe9-bd55-dfeca1e0c1f8_1200x.png?v=1636379946"/>
    //   </div>
    //   {/* {data.map((item) => (
    //     <div key={item.id}>
    //       <h3>{item.content}</h3>
    //     </div>
    //   ))} */}
    // </Carousel>

  );
}

export default Slider;
