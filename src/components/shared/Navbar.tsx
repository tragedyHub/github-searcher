import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-center	text-center py-10 gap-10 border-gray-500 border-solid border-b-2">
            <NavLink to="/" className="text-2xl hover:text-gray-100">
                Find Repo
            </NavLink>
            <NavLink to="/last-queries" className="text-2xl hover:text-gray-100">
                Lasets Queryes
            </NavLink>
        </div>
    )
}

export default Navbar
