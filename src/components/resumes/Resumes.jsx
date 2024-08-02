import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'



function Resumes() {
    return (
        <>
            <div >
                <div className='flex justify-end mr-5'>
                    <Input className='w-50 m-3' placeholder='Search' />
                    <Button className='w-50 m-3'>Add Your Resumes Here</Button>
                </div>

                <div>

                </div>
            </div>

        </>
    )
}

export default Resumes