import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <div className="entete">
                <figure className="ContImg">
                    <img src="https://ar-web-ouest.fr/wp-content/uploads/2022/02/cropped-Logo-Alex.png" />
                </figure>
                <nav className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav> 
            </div>
            
            <Outlet />
        </>
    )
}

export default Layout