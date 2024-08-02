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
            <div className='flex mt-5 w-full bg-white p-3 rounded-md'>

                <div className='ml-20 font-bold  w-40 rounded-lg p-5 hover:bg-slate-100 font-bold text-lg'>
                    <h1 className='font-bold text-lg'>Filter Jobs</h1>
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

                <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            job.map((job, index) => (<JobCards />))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs