import React from 'react'
import JobCards from './JobCards'


const randomJob = [1, 2, 3]

function Browse() {
    return (
        <>
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({randomJob.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        randomJob.map(() => {
                            return (
                                <JobCards />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Browse