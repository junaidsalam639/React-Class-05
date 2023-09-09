import React from 'react'
import {  Carousel} from 'antd';

const contentStyle = {
    height: '80vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const carouselImage =  {
    height : '80vh',
    width : '100%',
    objectFit : 'cover',
    objectPosition : 'center',
    backgroundPosition : 'center',
    backgroundRepeat : 'no-repeat',
  }

const CarouselComp = () => {
  return (
    <div>
      <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img style={carouselImage} src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=Ko289acalSrEKwYI5sb20u2WQa7KS9L-_0Ug4u2iEmc=" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={carouselImage} src="https://media.istockphoto.com/id/1415862623/photo/outdoor-adventures-in-norway-hammock-relax-in-nature.webp?b=1&s=170667a&w=0&k=20&c=VtHkSkLETb8zaAs3qv1f_q0svzJ4dQ8a2AwDJK32bRQ=" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={carouselImage} src="https://media.istockphoto.com/id/1426025819/photo/empty-boardroom-office-in-urban-city-startup-agency-for-business-meeting-presentation-and.webp?b=1&s=170667a&w=0&k=20&c=sm_Ua4WWdy2dpabgcM31gvqq3vrtH6Z8kP6QCyN-eC4=" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={carouselImage} src="https://media.istockphoto.com/id/1192690741/photo/beautiful-wood-anemone-spring-flowers-in-the-beech-forest-wood-anemone-windflower-thimbleweed.webp?b=1&s=170667a&w=0&k=20&c=-jnfCkCDB0fyTl1IF9p97WzgEX5epAJGSZHnizfQUN4=" alt="" />
      </h3>
    </div>
  </Carousel>
    </div>
  )
}

export default CarouselComp
