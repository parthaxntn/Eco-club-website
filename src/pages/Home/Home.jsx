import React, { useEffect, useRef } from 'react'
import './Home.css'
import achievements from '../../Assets/Home/achievements.jpg'
import director from '../../Assets/Home/director.png'
import events from '../../Assets/Home/events.png'
import initiatives from '../../Assets/Home/initiatives.jpg'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';


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

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://picsum.photos/1800/700?nature" class="d-block w-100" alt="https://picsum.photos/1800/700" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://picsum.photos/1800/700?nature" class="d-block w-100" alt="https://picsum.photos/1800/700" />
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/1800/700?nature" class="d-block w-100" alt="https://picsum.photos/1800/700" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {/* <!-- About Us starts --> */}
      <section class="container">
        <h2>About Us</h2>
        <p class="homeContent">
          NITS Eco Club is an officially recognised club under the Gymkhana Union Body, NIT Silchar. The principal objective
          of this club is to keep the campus clean, and preserve the diverse flora and fauna our institution has to offer.
          Under this club, NIT Silchar has achieved greater heights. It has been placed 200th among 956 universites
          worldwide, and 5th among universities in India by the UI Green Metric World University Rankings, 2021, which is a
          matter of great pride for the fraternity of NIT Silchar.
        </p>
      </section>
      {/* <!-- About Us ends --> */}
      {/* <!--From the Director's Desk starts--> */}
      <section class="container">
        <h2>From the Director's Desk</h2>
        <div class="row gx-5">
          <div class="col-lg-4 text-center">
            <img src={director} class="img-fluid rounded-circle mb-3" widthalt="" />
            <h5>Sivaji Bandyopadhyay</h5>
            <p>Director, Nit Silchar</p>
          </div>
          <div class="col-lg-8 d-flex justify-content-center">
            <p class="homeContent">
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
      <section class="container">
        <h2>Achievements</h2>
        <div class="row gx-5">
          <div class="col-sm-4 col-xs-12 py-3 py-sm-0">
            {/* <!--One achievement card--> */}
            <div class="card card-shadow">
              <img class="card-img-top" src={achievements} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">District Green Champion Award</h5>

              </div>
            </div>
            {/* <!--Card ends--> */}
          </div>
          <div class="col-sm-4 col-xs-12 py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={achievements} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">UI Green Metric Ranking 200 in 2021</h5>

              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12 py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={achievements} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">6 glorious years of existence</h5>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Achivements ends --> */}

      {/* <!-- Green initiatives starts --> */}
      <section class="container">
        <h2>Green Initiatives</h2>
        <div class="row gx-5">
          <div class="col-sm-6 col-xs-12 py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={initiatives} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">Solar Panel</h5>
                <div class="card-content">
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={initiatives} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-center">Solar Panel</h5>
                <div class="card-content">
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- green initiatives ends --> */}


      {/* <!-- upcoming events starts --> */}
      <section class="container">
        <h2>Upcoming Events</h2>
        <div class="row gx-5">
          <div class="col-sm-4 col-xs-12  py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={events} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">A walk for healthy environment</h5>
                <div class="card-content">
                  <p class="event-header">Paul Walker, CEO of Green Organization</p>
                  <p class="event-time"><i class="fa-regular fa-calendar"></i>Sunday 2 Dec 2022 <i
                    class="fa-regular fa-clock"></i>10 A.M.</p>
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12  py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={events} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">A walk for healthy environment</h5>
                <div class="card-content">
                  <p class="event-header">Paul Walker, CEO of Green Organization</p>
                  <p class="event-time"><i class="fa-regular fa-calendar"></i>Sunday 2 Dec 2022 <i
                    class="fa-regular fa-clock"></i>10 A.M.</p>
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12  py-3 py-sm-0">
            <div class="card card-shadow">
              <img class="card-img-top" src={events} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">A walk for healthy environment</h5>
                <div class="card-content">
                  <p class="event-header">Paul Walker, CEO of Green Organization</p>
                  <p class="event-time"><i class="fa-regular fa-calendar"></i>Sunday 2 Dec 2022 <i
                    class="fa-regular fa-clock"></i>10 A.M.</p>
                  <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliq</p>
                </div>
              </div>
            </div>
          </div>
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
            <img src="https://picsum.photos/1800/700?nature" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 2" />
          </SplideSlide>
        </Splide>

        <Splide
          hasTrack={true}
          options={ thumbsOptions }
          ref={ thumbsRef }
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 3" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 4" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 5" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 6" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://picsum.photos/1800/700?nature" alt="Image 2" />
          </SplideSlide>
        </Splide>


      
    </div>

  )
}

export default Home
