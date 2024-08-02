import React from 'react'
import { Carousel, CarouselItem, CarouselContent } from './ui/carousel'
import { Button } from './ui/button'

const Job = ["Frontend", "Backend", "fullStack", "Data Analyst"];

function CardCarousel() {

    return (
        <>
            <div>
                <Carousel className="w-full max-w-xl mx-auto my-20" >
                    <CarouselContent>
                        {Job.map((job, index) => (<CarouselItem className="md:basis-1/2 lg-basis-1/3"><Button variant="outline" className="rounded-full">{job}</Button></CarouselItem>))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}

export default CardCarousel