import React from 'react'
import JobCards from './JobCards'


function Latest() {
    const job = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <div className=''>
                <h1 className='text-5xl m-8 text-fuchsia-900'>Latest Job</h1>
                <div className='flex m-3 p-2 justify-center flex-wrap '>
                    {
                        job.map((job, index) => {
                            return <JobCards key={index} />
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Latest