import React from 'react'
import '../Gallery/Gallery.css'
import GalleryImageCard from '../../components/Gallery/GalleryImageCard'

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
                            <div class="card my-1 my-xl-0" style={{ width: '26rem', height: '23rem' }}>
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

