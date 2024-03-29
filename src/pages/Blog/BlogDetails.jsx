import React from 'react'
import { Blogdata } from './Dataset'
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import './Blog.css';
import { BsCalendar } from 'react-icons/bs';
const BlogDetails = () => {
    const { id } = useParams();
    return (
        <>
            {Blogdata
                .filter((item) => item.id === id)
                .map((item) => (
                    <>
                        <Helmet>
                            <title>{item.title}</title>
                        </Helmet>
                        <div className="blog-detail">
                            <div className="img-blog-detail">
                                <h1>{item.title}</h1>
                                <img style={{pointerEvents:'none'}} src={item.img0} alt={item.title} />
                            </div>

                            <div className='bsca bsca-blog-detail'>
                                <BsCalendar className='bscal'/> <h5 className='greaterthan date-blog-pub'>{item.date}</h5>
                            </div>

                            <p>{item.blogdetail}</p>

                        </div>
                    </>
                ))}
        </>
    )
}

export default BlogDetails