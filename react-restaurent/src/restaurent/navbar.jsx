import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <ol>
                <li><Link to="/menu"></Link>menu</li>
                <li><Link to="/products"></Link>products</li>
                <li><Link to="/reviews"></Link>reviews</li>
                <li><Link to="/address"></Link>address</li>
                <li><Link to="/photos"></Link>photos</li>

            </ol>

        </>
    )
}
export default Navbar;