import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import {
    FormikAbstract,
    FormikBasicPage,
    FormikComponents,
    FormikYup,
    RegisterPage,
    RegisterFormikPage,
    DynamicForm
} from '../forms/pages';

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
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstract</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-formik" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Formikt</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Formik Form</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="custom-form" element={ <RegisterPage/> } />
                    <Route path="basic-formik" element={ <FormikBasicPage/> } />
                    <Route path="formik-yup" element={ <FormikYup/> } />
                    <Route path="formik-components" element={ <FormikComponents/>} />
                    <Route path="formik-abstract" element={ <FormikAbstract/> } />
                    <Route path="formik-abstract" element={ <FormikAbstract/> } />
                    <Route path="register-formik" element={ <RegisterFormikPage/> } />
                    <Route path="dynamic-form" element={ <DynamicForm/> } />
                    
                    <Route path="/*" element={ <Navigate to="/basic-formik" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
