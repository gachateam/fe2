import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundCSS } from './NotFoundElement'

const NotFound = () => {
    return (
        <NotFoundCSS className="error_page_start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>OOPS! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
                        <div className="hom_btn">
                            <Link to="/" className="btn-secondary">Back to home page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </NotFoundCSS>
    )
}

export default NotFound
