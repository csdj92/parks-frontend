import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
return (
<div>
    <nav className="navbar navbar-light" style={{
                background: '#000',
                height: '100px'
                                }}>
        <Link to='/'>
        <h1>Home</h1>
        </Link>
        
        <Link to='/campgrounds'>
        <h1>Campgrounds</h1>
        </Link>
    </nav>
</div>
)
}
export default Navbar