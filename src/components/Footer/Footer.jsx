import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="main_containeer">
            <div class="contact_us">
                <p>Contact Us</p>
                <div class="box1">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+91 123456789">+91 123456789</a>
                </div>
                <div class="box1">
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.7901042,17z/data=!3m1!4b1!4m5!3m4!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929" target="_blank">NIT SILCHAR</a>
                </div>
                <div class="box1">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto: ecoclubactivity@nits.ac.in" target="blank">ecoclubactivity@nits.ac.in</a>
                </div>
                <div class="box1">
                    <i class="fa-brands fa-instagram"></i>
                    <a href="https://www.instagram.com/eco_club_nits/" target="blank">eco_club_nits</a>
                </div>
                <div class="box1">
                    <i class="fa-brands fa-facebook"></i>
                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fm.facebook.com%2Fnitsecoclub%2F%3Ftsid%3D0.7935080479496242%26source%3Dresult&e=ATP7jhg69HRisUR1Cv9UkrgE14602QuQBSYfivVTCdVj7Sg0bUUJuJAGhLgxOqhLhkexllnJJsnX4qKnBHr7Qw&s=1" target="_blank">@nitsecoclub</a>
                </div>
                <div class="box1">
                    <i class="fa-brands fa-twitter"></i>
                    <a href="https://twitter.com/NitsEco" target="_blank">@NitsEco</a>
                </div>
            </div>
            <div class="quick_links">
                <p>Quick Links</p>
                <div class="box2">
                    <i class="fa-solid fa-minus"></i>
                    <a href="#">Noixorgo</a>
                </div>
                <div class="box2">
                    <i class="fa-solid fa-minus"></i>
                    <a href="#">Our Events</a>
                </div>
                <div class="box2">
                    <i class="fa-solid fa-minus"></i>
                    <a href="#">Our Blogs</a>
                </div>
                <div class="box2">
                    <i class="fa-solid fa-minus"></i>
                    <a href="#">Our Gallery</a>
                </div>
                <div class="box2">
                    <i class="fa-solid fa-minus"></i>
                    <a href="#"> Our Team</a>
                </div>
            </div>
            <div class="developers">
                <p>Developers</p>
                <div class="box3">
                    <i class="fa-solid fa-minus"></i>
                    <a href="#">Members</a>
                </div>
            </div>
            <div class="mail_us">
                <p>Mail Us</p>
                <div class="box4">
                    <form action="">
                        <input type="mailid" name="mailid" id="mailid" required placeholder="@your email.com"/>
                        <i class="fa-solid fa-paper-plane"></i>
                    </form>
                </div>
            </div>
        </div>
        </footer> 
    )
}

export default Footer
