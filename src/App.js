import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Contact from './pages/Contact'
import Login from './pages/AboutUs'
import AboutUs from './pages/AboutUs'
import Pricingplan from './pages/Pricingplan'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Pricingplan' element={<Pricingplan />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
