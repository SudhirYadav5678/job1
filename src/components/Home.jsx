import React from 'react'
import HeroSection from './HeroSection'
import CardCarousel from './CardCarousel'
import Latest from './Latest'


function Home() {
    return (
        <>
            <div>
                <HeroSection />
                <CardCarousel />
                <Latest />
            </div>
        </>
    )
}

export default Home