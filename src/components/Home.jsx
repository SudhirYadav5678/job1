import React from 'react'
import HeroSection from './HeroSection'
import CardCarousel from './CardCarousel'
import Latest from './Latest'
import useAllJobs from '@/customHooks/useAllJobs'


function Home() {
    useAllJobs()
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