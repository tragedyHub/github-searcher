import { Routes, Route } from 'react-router-dom'
import Last from './pages/Last'
import Home from './pages/Home'
import Navbar from '@components/shared/Navbar'

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/last-queries" element={<Last />} />
            </Routes>
        </>
    )
}

export default AppRouter
