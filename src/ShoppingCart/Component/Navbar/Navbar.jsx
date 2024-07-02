import "./Navbar.css"
const Navbar = ({cart}) => {
    return (
        <div className="navbar">
            <p>Cart</p>
            <p>{cart}</p>
        </div>
    )
}

export default Navbar