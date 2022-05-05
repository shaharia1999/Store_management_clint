
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/1280x720-dddf.jpg';
import img2 from '../../images/download.jpg';
import img3 from '../../images/istockphoto-877238326-612x612.jpg';
import './Banner.css'


const Banner = () => {
     return(
      <div className='banner'>
      <Carousel>
<Carousel.Item interval={1000}>
<img
className="d-block w-100 "
src={img1}
alt="First slide"
/>
<Carousel.Caption>
<h1 className='text-white  zindex'> WareHouse Store Management</h1>
<p>Warehouse Mobile 2022 all rights reserved</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
<img
className="d-block w-100 "
src={img2}
alt="Second slide"
/>
<Carousel.Caption>
<h1>WareHouse Store Management</h1>
<p>Warehouse Mobile 2022 all rights reserved</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 "
src={img3}
alt="Third slide"
/>
<Carousel.Caption>
<h1>WareHouse Store Management</h1>
<p>Warehouse Mobile 2022 all rights reserved</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
  </div>
     )
}



export default Banner;