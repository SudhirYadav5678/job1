import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import JobCards from '../JobCards';

const Location = ["Delhi", "Mumbai", "Chennai", "Bangeluru", "London"];
const Salary = ["10k-20k", "20k-30k", "30k-40k"];
const position = ["FullStack", "Frontend", "Backend", "Data Anaylist"]
const job = [1, 2, 3, 45, 6, 6]
function Jobs() {
    return (
        <>
            <div className='flex mt-5'>
                <div className='ml-20 border-solid border-2 border-sky-500 w-40 rounded-lg p-5 hover:bg-slate-300'>
                    {/* Location */}
                    <div>Location</div>
                    <RadioGroup defaultValue="Delhi">
                        {
                            Location.map((loc, index) => (<div className="flex items-center space-x-2 m-1">
                                <RadioGroupItem value={loc} id={loc} />
                                <Label htmlFor={loc}>{loc}</Label>
                            </div>))
                        }
                    </RadioGroup>

                    <div>Salary</div>
                    <RadioGroup defaultValue="10k-20k">
                        {
                            Salary.map((sal, index) => (<div className="flex items-center space-x-2 m-1">
                                <RadioGroupItem value={sal} id={sal} />
                                <Label htmlFor={sal}>{sal}</Label>
                            </div>))
                        }
                    </RadioGroup>

                    <div>Position</div>
                    <RadioGroup defaultValue="FullStack">
                        {
                            position.map((pos, index) => (<div className="flex items-center space-x-2 m-1">
                                <RadioGroupItem value={pos} id={pos} />
                                <Label htmlFor={pos}>{pos}</Label>
                            </div>))
                        }
                    </RadioGroup>
                </div>

                <div className='flex'>
                    {
                        job.map((job, index) => (<JobCards />))
                    }
                </div>
            </div>
        </>
    )
}

export default Jobs