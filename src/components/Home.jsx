import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import CardCarousel from './CardCarousel'
import Latest from './Latest'
import useAllJobs from '@/customHooks/useAllJobs'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


function Home() {
    useAllJobs()
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.role === 'recruiter') {
            navigate("/admin/companies");
        }
    }, []);
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