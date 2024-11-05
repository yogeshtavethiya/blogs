import React from "react";
import Image from "next/image";
import './styles.css';
import Blogs from './Blogs';
import LoaderSpinner from "@/app/Components/Loader";

const Blogs = ({ blogs }) => {
    return (
        <div className="home">
            <div className="blogs">
                {blogs?.length === 0 ? (
                    <LoaderSpinner />
                ) : (
                    blogs?.map((item, idx) => (
                        <div className="blog-container" key={idx}>
                            <Image
                                className="blog-image"
                                src={item?.image || '/images/dummy.jpg'}
                                alt={item?.title}
                                width={600}
                                height={400}
                            />
                            <div className="blog-content-wrapper">
                                <h4 className="blog-title">{item?.title}</h4>
                                <p className="blog-excerpt">{item?.content?.substring(0, 70)}...</p>
                                <div className="blog-meta">
                                    <span>{item?.date_published}</span>
                                    <span className="claps">{item?.claps || '3K'}</span>
                                    <span className="comments">{item?.comments || '48'}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="featured">
                <h4>This is featured content</h4>
                <h5>meet the team</h5>
            </div>
        </div>
    );
};

export default Blogs;

export async function getServerSideProps() {
    let blogs = [];
    try {
        const res = await fetch('https://dummyapi.online/api/blogposts');
        if (res.ok) {
            blogs = await res.json();
        }
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
    
    return {
        props: { blogs },
    };
}
