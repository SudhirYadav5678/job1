import { JOB_API_END_POINT } from '../urls/apiEndPoint'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllJob } from '../../store/jobSlice.js'

function useAllJobs() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setAllJob(res.data.jobs))
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchJob();
    }), []
}

export default useAllJobs