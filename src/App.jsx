import './App.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Jobs from './components/jobs/Jobs'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import AdminJob from './components/admin/AdminJob'
import Companies from './components/admin/companies/Companies'
import Profiles from './components/profiles/Profiles'
import Browse from './components/Browse'
import Descripation from './components/Descripation'
import CompanyCreate from './components/admin/companies/CompanyCreate'
import CompanySetup from './components/admin/companies/CompanySetup'


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/descripation/:id' element={<Descripation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/jobs' element={<AdminJob />} />
        <Route path='/admin/companies' element={<Companies />} />
        <Route path='/admin/companiesCreate' element={<CompanyCreate />} />
        <Route path='/admin/companiesCreate/:id' element={<CompanySetup />} />
        <Route path='/profile' element={<Profiles />} />
        <Route path='/browse' element={<Browse />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
