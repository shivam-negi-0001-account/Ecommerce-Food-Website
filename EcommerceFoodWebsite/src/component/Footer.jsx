import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="container-fuild mt-3 p-4 footerSection">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footerIcons text-center">
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-pinterest'></i>
                            <i className='fab fa-linkedin'></i>
                        </div>
                        <div className="list  ">
                            <ul className='d-flex align-item-center justify-content-evenly '>
                                <li><NavLink to="/" className='nav-link '>Home</NavLink></li>
                                <li><NavLink to="/about" className='nav-link '>About</NavLink></li>
                                <li><NavLink to="/menu" className='nav-link '>Menu</NavLink></li>
                                <li><NavLink to="/products" className='nav-link '>Product</NavLink></li>
                                <li><NavLink to="/review" className='nav-link '>Review</NavLink></li>
                                <li><NavLink to="/contact" className='nav-link '>Contact</NavLink></li>
                                <li><NavLink to="/blog" className='nav-link '>Blog</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
