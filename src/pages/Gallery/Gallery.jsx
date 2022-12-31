import React from 'react'
import '../Gallery/Gallery.css'
import GalleryImageCard from './GalleryImageCard'

const Gallery = () => {

    const eventPhotos = [
        {
            title: 'Swacchta Pakhwada',
            image: 'swacchta-pakhwada.png'
        },
        {
            title: 'North-East Green Summit',
            image: 'north-east-green-summit.png'
        },
        {
            title: 'Gandhi Jayanti',
            image: 'gandhi-jayanti.png'
        },
        {
            title: 'World Environment Day',
            image: 'world-environment-day.jpg'
        }
    ]

    const natureClick = [
        {
            image: 'nature-click-1.jpg'
        },
        {
            image: 'nature-click-1.jpg'
        },
        {
            image: 'nature-click-1.jpg'
        },
        {
            image: 'nature-click-1.jpg'
        },
        {
            image: 'nature-click-1.jpg'
        },
        {
            image: 'nature-click-1.jpg'
        },
    ]

    const beautyofNits = [
        {
            image: 'beauty-of-nits-1.jpg'
        },
        {
            image: 'beauty-of-nits-1.jpg'
        },
        {
            image: 'beauty-of-nits-1.jpg'
        },
        {
            image: 'beauty-of-nits-1.jpg'
        },
        {
            image: 'beauty-of-nits-1.jpg'
        },
        {
            image: 'beauty-of-nits-1.jpg'
        },
    ]

    return (
        <>
            <>

                {/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles/gallery.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./styles/footer.css">
    <title>Gallery</title>
</head>
<body>

    <div class="navbar-container">

        <div class="navbar-logo-name">
    
          <img id="logo-img" src="./images/eco-club-logo.jpg" alt="">
    
          <h3 id="club-name">eco club</h3>
    
        </div>
    
    
    
        <a href="./home.html">HOME</a>
    
    
        <a href="./nox.html">NOIXORGO</a>
    
    
    
        <a href="./Gallery.html">GALLERY</a>
    
    
        <a href="./Event_photos.html">EVENTS</a>
    
    
        <a href="./blog.html">BLOG</a>
    
    
        <a href="./members.html">TEAM</a>
    
    
    
      </div>

    <!-- for event photos -->

    <div class="container1">
        <div class="name">
            <h2 class="Photos">
                Event Photos
            </h2>
            <!-- <hr class="line" /> -->
        </div>

        <!-- for 1st row of cards -->

        <div class="card_s01 row">
            <div class="card my-3 my-xl-0" style="width: 28rem;">
                <img src="./images/Swacchta Pakhwada.png" class="card-img-top" alt="Swacchta Pakhwada">
                <div class="card-body">
                <p class="card-text">Swacchta Pakhwada</p>
                </div>
            </div>
            <div class="card my-3 my-xl-0" style="width: 28rem;">
                <img src="./images/North East Green Summit.png" class="card-img-top" alt="North East Green Summit">
                <div class="card-body">
                <p class="card-text">North-East Green Summit</p>
                </div>
            </div>
        </div>
        <div class="card_s1 row">
            <div class="card my-3 my-xl-0" style="width: 28rem;">
                <img src="./images/Gandhi Jayanti.png" class="card-img-top" alt="Gandhi Jayanti">
                <div class="card-body">
                <p class="card-text">Gandhi Jayanti</p>
                </div>
            </div>
            <div class="card my-3 my-xl-0" style="width: 28rem;">
                <img src="./images/World Environment Day.jpg" style="width: 26rem; height: 17rem;" class="card-img-top" alt="World Environment Day">
                <div class="card-body">
                <p class="card-text">World Environment Day</p>
                </div>
            </div>
        </div>
    </div>


    <!-- for nature's click -->

    <div class="container2">
        <div class="name">
            <h2 class="Photos">
                Nature's Click
            </h2>
            <!-- <hr class="line" /> -->
        </div>

        <!-- for 1st row of cards -->

        <div class="card_s02 row">
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Bird.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Animal.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Fox.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
        </div>

        <!-- for 2nd row of cards -->

        <div class="card_s2 row">
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Bird.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Animal.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Fox.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
        </div>
    </div>
    
    <!-- for beauty of nits -->

    <div class="container3">
        <div class="name">
            <h2 class="Photos">
                Beauty of NITS
            </h2>
            <!-- <hr class="line" /> -->
        </div>

        <!-- for 1st row of cards -->

        <div class="card_s03 row">
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Bird.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
               <img src="./images/Animal.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Fox.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
        </div>

        <!-- for 2nd row of cards -->

        <div class="card_s3 row">
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Bird.png" class="card-img-top0" alt="..."></a>
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Animal.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
            <div class="card col-xs-12 my-3 my-xl-0" style="width: 23rem;">
                <img src="./images/Fox.png" class="card-img-top0" alt="...">
                <!-- <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> -->
            </div>
        </div>
    </div>

    <footer>
        <div class="footer_containeer">
            <div class="footer_box"><p>Contact Us</p>
            <div class="footer_box_1">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:123-456-7890" target="_blank">+91 1234567890</a>
            </div>
            <div class="footer_box_1">
                <i class="fa-solid fa-location-dot"></i>
                <a href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.7901042,17z/data=!3m1!4b1!4m5!3m4!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929" target="_blank">NIT SILCHAR</a>
            </div>
            <div class="footer_box_1">
                <i class="fa-regular fa-envelope"></i>
                <a href="mailto: ecoclubactivity@nits.ac.in" target="blank">ecoclubactivity@nits.ac.in</a>
            </div>
            <div class="footer_box_1">
                <i class="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/eco_club_nits/" target="blank">eco_club_nits</a>
            </div>
            <div class="footer_box_1">
                <i class="fa-brands fa-facebook"></i>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fm.facebook.com%2Fnitsecoclub%2F%3Ftsid%3D0.7935080479496242%26source%3Dresult&e=ATP7jhg69HRisUR1Cv9UkrgE14602QuQBSYfivVTCdVj7Sg0bUUJuJAGhLgxOqhLhkexllnJJsnX4qKnBHr7Qw&s=1" target="_blank">@nitsecoclub</a>
            </div>
            <div class="footer_box_1">
                <i class="fa-brands fa-twitter"></i>
                <a href="https://twitter.com/NitsEco" target="_blank">@NitsEco</a>
            </div>
        </div>
        <div class="footer_box"><p>Quick Links</p>
            <ul>
                <li><span>-</span><a href="#">Noixorgo</a></li>
                <li><span>-</span><a href="#">Our Events</a></li>
                <li><span>-</span><a href="#">Our Blogs</a></li>
                <li><span>-</span><a href="#">Our Gallery</a></li>
                <li><span>-</span><a href="#">Our Team</a></li>
            </ul>
        </div>
        <div class="footer_box"><p>Developers</p>
            <ul>
                <li><span>-</span><a href="#">Members</a></li>
            </ul>
        </div>
        <div class="footer_box"><p>Mail Us</p>
            <div class="footer_box_1" id="mail">
        <form action="">
            <input type="email" name="email" id="email" required placeholder="@your email.com">
        </form>
        <i class="fa-solid fa-paper-plane"></i>
        </div>
        </div>
        </div>
    </footer>

</body>
</html>




 */}</>
            <div class="container-gallery">
                <div class="name">
                    <h2 class="Photos">
                        Event Photos
                    </h2>
                    {/* <!-- <hr class="line" /> --> */}
                </div>

                {/* <!-- for 1st row of cards --> */}

                <div class="card_s01 d-flex flex-wrap">
                    {eventPhotos.map((e) => {
                        return (
                            <div class="card my-3 my-xl-0" style={{ width: '28rem' }}>
                                <img src={`/imgs/Gallery/${e.image}`} class="card-img-top" alt="Swacchta Pakhwada" />
                                <div class="card-body">
                                    <p class="card-text">{e.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div class="container-gallery">
                <div class="name">
                    <h2 class="Photos">
                        Nature's Click
                    </h2>
                    {/* <!-- <hr class="line" /> --> */}
                </div>
                <div className="card_s02 d-flex flex-wrap">

                    {natureClick.map((e) => {
                        return (
                            <GalleryImageCard image={e.image} />
                        )
                    })}

                </div>

            </div>

            <div class="container-gallery">
                <div class="name">
                    <h2 class="Photos">
                        Beauty of NITS
                    </h2>
                    </div>
                    <div className="card_s03 d-flex flex-wrap">
                        {beautyofNits.map((e) => {
                            return (
                                <GalleryImageCard image={e.image} />
                            )
                        })}
                    </div>
                </div>

        </>
    )
}

export default Gallery