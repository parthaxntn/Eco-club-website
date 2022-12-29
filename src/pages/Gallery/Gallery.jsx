import React from 'react'
import '../Gallery/Gallery.css'

const Gallery = () => {
  return (
    <div>
        <div className="container1">
            <div className="name">
                <h2 className="Photos">
                    Event Photos
                </h2>
            </div>
            <div className="card_s01 row">
                <div className="card my-3 my-xl-0" style={{Width: "28rem"}}>
                    <a href="swacchta_pakhwada.html"><img src="./images/Swacchta Pakhwada.png" className="card-img-top" alt="Swacchta Pakhwada"/></a>
                    <div className="card-body">
                        <p className="card-text">Swacchta Pakhwada</p>
                    </div>
                </div>
                <div className="card my-3 my-xl-0" style={{Width: "28rem"}}>
                    <a href="North_East_Green_summit.html"><img src="./images/North East Green Summit.png" className="card-img-top" alt="North East Green Summit"/></a>
                    <div className="card-body">
                        <p className="card-text">North-East Green Summit</p>
                    </div>
                </div>
            </div>
            <div className="card_s1 row">
                <div className="card my-3 my-xl-0" style={{Width: "28rem"}}>
                    <a href="gandhi_jayanti.html"><img src="./images/Gandhi Jayanti.png" className="card-img-top" alt="Gandhi Jayanti"/></a>
                    <div className="card-body">
                        <p className="card-text">Gandhi Jayanti</p>
                    </div>
                </div>
                <div className="card my-3 my-xl-0" style={{Width: "28rem"}}>
                    <a href="World-Environment-Day.html"><img src="./images/World Environment Day.jpg" style={{Width: "26rem",Height: "17rem"}} className="card-img-top" alt="World Environment Day"/></a>
                    <div className="card-body">
                        <p className="card-text">World Environment Day</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container2">
            <div className="name">
                <h2 className="Photos">
                    Nature's Click
                </h2>
            </div>

            <div className="card_s02 row">
                <div className="card col-xs-12 my-3 my-xl-0" style={{Width: "23rem"}}>
                    <img src="./images/Bird.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{Width: "23rem"}}>
                    <img src="./images/Animal.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{Width: "23rem"}}>
                    <img src="./images/Fox.png" className="card-img-top0" alt="..."/>
                </div>
            </div>

            <div className="card_s2 row">
                <div className="card col-xs-12 my-3 my-xl-0" style={{Width: "23rem"}}>
                    <img src="./images/Bird.png" className="card-img-top0" alt="..."/>
                <div className="card col-xs-12 my-3 my-xl-0" style={{Width: "23rem"}}>
                    <img src="./images/Animal.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{Width: "23rem"}}>
                    <img src="./images/Fox.png" className="card-img-top0" alt="..."/>
                </div>
            </div>
        </div>

        <div className="container3">
            <div className="name">
                <h2 className="Photos">
                    Beauty of NITS
                </h2>
            </div>

            <div className="card_s03 row">
                <div className="card col-xs-12 my-3 my-xl-0" style={{"Width": "23rem"}}>
                    <img src="./images/Bird.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{"Width": "23rem"}}>
                    <img src="./images/Animal.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{"Width": "23rem"}}>
                    <img src="./images/Fox.png" className="card-img-top0" alt="..."/>
                </div>
            </div>

            <div className="card_s3 row">
                <div className="card col-xs-12 my-3 my-xl-0" style={{"Width": "23rem"}}>
                    <img src="./images/Bird.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{"Width": "23rem"}}>
                    <img src="./images/Animal.png" className="card-img-top0" alt="..."/>
                </div>
                <div className="card col-xs-12 my-3 my-xl-0" style={{"Width": '23rem'}}>
                    <img src="./images/Fox.png" className="card-img-top0" alt="..."/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Gallery