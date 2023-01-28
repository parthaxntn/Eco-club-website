import React from "react";
import "./Blog.css";
import { Blogdata } from "./Dataset";
import { BsCalendar } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <>
      <div className="main-blog">
        <div className="blog-top">
          <h1>Blog</h1>
        </div>

        <div className="blog-heading">
          <h2>
            Blogs are a newly released module under the NITS Eco Club, that
            pledges to enlighten the eco enthusists on different aspects of the
            environment. Some of the segments for this module will be Explore
            Wild, Eco Agitations and The Eco Stand. These segments will be
            updated every week, releasing educative and intriguing content which
            is bound to captivate the minds of it’s readers.
          </h2>
        </div>

        <div className="blog-container">
          <h3>New releases</h3>

          <div className="blog-list">
            {Blogdata.map((item) => {
              return (
                <div className="blog-indi" key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <h4 className="blog-indi-title">{item.title}</h4>
                  <h5 className="blog-cont-short">{item.content}</h5>

                  <div className="date-continue">
                    <div className="bsca">
                      <BsCalendar />{" "}
                      <h5 className="greaterthan date-blog-pub">{item.date}</h5>
                    </div>

                    <Link to={`/blog/${item.id}`}>
                      <div className="bsca">
                        <h4> Continue </h4>
                        <FaGreaterThan size={10} className="greaterthan" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Blogs
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Did you know?
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Eco Agitations
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Eco-vation
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Explore wild
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Exploring NIT Silchar
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Greenovation
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Know your herbs
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Mythbuster
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  On thin ice
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Eco stand
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
