import React from "react";
import homeImg from '@/images/home.jpeg';
import './styles.css';
import Image from "next/image";
import Link from "next/link";

const Home = () => {

    return (
        <div className="home-container">
            <Image src={homeImg} alt="Home" className="home-image" />
            <p className="home-p">this is test</p>
            <Link className="start-journey-button" href="/blogs">Start your journey</Link>
        </div>
    );
}

export default Home;
