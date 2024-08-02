import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from "./ui/avatar.jsx"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { User2, LogOut } from 'lucide-react'
import { Input } from './ui/input'


function Navbar() {
    return (
        <>
            <div className='bg-white'>
                <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                    <div>
                        <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Pe</span></h1>
                    </div>
                    {/* navbutton */}
                    <div className='flex items-center gap-12'>
                        <ul className='flex font-medium items-center gap-5'>
                            <li><Link to="/admin/companies">Companies</Link></li>
                            <li><Link to="/admin/jobs">Jobs</Link></li>

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/resumes">Resumes</Link></li>

                        </ul>

                        <div className='flex items-center gap-2'>
                            <Link to="/login"><Button variant="outline">Login</Button></Link>
                            <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                        </div>

                        {/* search */}
                        <div>
                            <Input type="text" placeholder="Search" />
                        </div>


                        {/* avatar */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    {<AvatarImage src="https://images.pexels.com/photos/18173391/pexels-photo-18173391/free-photo-of-modern-colonnade-along-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="@shadcn" /> /*{user?.profile?.profilePhoto} */}
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className=''>
                                    <div className='flex gap-2 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://images.pexels.com/photos/18173391/pexels-photo-18173391/free-photo-of-modern-colonnade-along-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Nmae</h4>
                                            <p className='text-sm text-muted-foreground'>bio</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                        </div>

                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar