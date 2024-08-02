import React, { useState, useEffect } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/authSlice.js'
import { Toaster } from '../ui/sonner.jsx'
import { USER_API_END_POINT } from './apiEndPoint.js'
import { toast } from 'sonner'
import { setUser } from '../../../store/authSlice.js'

function Login() {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
    })

    const handleInput = (e) => (
        setInput({ ...input, [e.target.name]: e.target.value })
    )

    const { loading, user } = useSelector(state => state.auth)  //false
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })
            if (res.data.success) {
                dispatch(setUser(res.data.user));  //true
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])


    return (
        <>
            <div>
                <div className='flex items-center justify-center max-w-7xl mx-auto'>
                    <form onSubmit={handleSubmit} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                        <h1 className='font-bold text-xl mb-5'>Login</h1>
                        <div className='my-2'>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={handleInput}
                                placeholder="patel@gmail.com"
                            />
                        </div>

                        <div className='my-2'>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={handleInput}
                                placeholder="patel@gmail.com"
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <RadioGroup className="flex items-center gap-4 my-5">
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value={"student"}
                                        onChange={handleInput}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r1">Student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        onChange={handleInput}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2">Recruiter</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> :
                                <Button type="submit" className="w-full my-4">Login</Button>
                        }
                        <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login