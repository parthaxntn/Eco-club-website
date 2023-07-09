import React, { useEffect, useRef } from 'react'
import './Home.css'
import director from '../../Assets/Home/director.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import AchievementsCards from '../../components/Home/Achievements/AchievementsCards';
import GreenInitiatives from '../../components/Home/GreenInitiatives/GreenInitiatives'
import UpcomingEvents from '../../components/Home/Events/UpcomingEvents';


const Home = () => {

  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(()=>{
    if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
      mainRef.current.sync( thumbsRef.current.splide );
    }
  },[])

  // const renderSlides = () => {
  //   return generateSlides().map( slide => (
  //     <SplideSlide key={ slide.src }>
  //       <img src={ slide.src } alt={ slide.alt }/>
  //     </SplideSlide>
  //   ) );
  // }

  const mainOptions = {
    type      : 'loop',
    perPage   : 1,
    perMove   : 1,
    gap       : '1rem',
    pagination: false,
    height    : '600px',
    width: '90%'
  };

  const thumbsOptions = {
    type        : 'slide',
    rewind      : true,
    gap         : '1rem',
    pagination  : false,
    fixedWidth  : 110,
    fixedHeight : 70,
    cover       : true,
    // focus       : 'center',
    
    isNavigation: true,
  };


  return (
    <div className='home'>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://picsum.photos/1800/700?nature" className="d-block w-100" alt="https://picsum.photos/1800/700" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://picsum.photos/1800/700?nature" className="d-block w-100" alt="https://picsum.photos/1800/700" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/1800/700?nature" className="d-block w-100" alt="https://picsum.photos/1800/700" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* <!-- About Us starts --> */}
      <section className="container">
        <h2 className='About'>About Us</h2>
        <p className="homeContent">
          NITS Eco Club is an officially recognised club under the Gymkhana Union Body, NIT Silchar. The principal objective
          of this club is to keep the campus clean, and preserve the diverse flora and fauna our institution has to offer.
          Under this club, NIT Silchar has achieved greater heights. It has been placed 200th among 956 universites
          worldwide, and 5th among universities in India by the UI Green Metric World University Rankings, 2021, which is a
          matter of great pride for the fraternity of NIT Silchar.
        </p>
      </section>
      {/* <!-- About Us ends --> */}
      {/* <!--From the Director's Desk starts--> */}
      <section className="container">
        <h2 className='About'>From the Director's Desk</h2>
        <div className="row gx-5">
          <div className="col-lg-4 text-center">
            <img src={director} className="img-fluid rounded-circle mb-4" widthalt="" alt='Director NIT Silchar'/>
            <h5>Sivaji Bandyopadhyay</h5>
            <p>Director, Nit Silchar</p>
          </div>
          <div className="col-lg-8 d-flex justify-content-center">
            <p className="homeContent">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
              rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
              sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
              ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
              eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
              consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate
              eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem
              in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia Curae; In ac dui quis mi
            </p>
          </div>
        </div>
      </section>
      {/* <!--From the Director's Desk ends-->
  <!-- Achivements starts --> */}
      <section className="container">
        <h2>Achievements</h2>
        <div className="row gx-5">
          <AchievementsCards/>
          <AchievementsCards/>
          <AchievementsCards/>
        </div>
      </section>
      {/* <!-- Achivements ends --> */}

      {/* <!-- Green initiatives starts --> */}
      <section className="container">
        <h2>Green Initiatives</h2>
        <div className="row gx-5">
          <GreenInitiatives/>
          <GreenInitiatives/>
        </div>
      </section>
      {/* <!-- green initiatives ends --> */}


      {/* <!-- upcoming events starts --> */}
      <section className="container">
        <h2>Upcoming Events</h2>
        <div className="row gx-5">
          <UpcomingEvents/>
          <UpcomingEvents/>
          <UpcomingEvents/>
        </div>
      </section>
      {/* <!-- upcoming events ends --> */}

      <h2>Beauty of NITS</h2>

      <Splide
          options={ mainOptions }
          ref={ mainRef }
          aria-labelledby="thumbnail-slider-example"
        >
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
        </Splide>

        <Splide
          hasTrack={true}
          options={ thumbsOptions }
          ref={ thumbsRef }
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="https://picsum.photos/1800/700" />
          </SplideSlide>
        </Splide>


      
    </div>

  )
}

export default Home
