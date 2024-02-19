import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { RegisterPage, FormikBasicPage } from '../forms/pages';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/custom-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Custom Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/basic-formik" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Basic Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="about" element={ <h1>About Page</h1> } />
                    <Route path="users" element={ <h1>Users Page</h1> } />
                    <Route path="custom-form" element={ <RegisterPage/> } />
                    <Route path="basic-formik" element={ <FormikBasicPage/> } />
                    
                    <Route path="/*" element={ <Navigate to="/users" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
