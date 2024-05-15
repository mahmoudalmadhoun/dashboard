import React from 'react'
import App from './App'
import TheLoading from './Screen/Loading/index'

import Dashboard from './Pages/Home/index'
import ServicesAdmin from './Pages/Services/index'
import ShowWorking from './Pages/ShowWork/index'
import UpdateNavBar from './Pages/UpdateNavBar/index'
import Profile from './Pages/Profile/index'
import Login from './Pages/Profile/Login'
import UserOnline from './Screen/UserOnline/index'
import Article from './Pages/Article'


export const RoutersArray = [
    {
        element: <App.element />,
        path: '/',
        children: [

            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <UserOnline>
                        <Dashboard />
                    </UserOnline>

                </React.Suspense>,
                path: '/',

            },
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <UserOnline>
                        <ServicesAdmin />
                    </UserOnline>

                </React.Suspense>,
                path: '/services',

            },
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <UserOnline>
                        <ShowWorking />
                    </UserOnline>

                </React.Suspense>,
                path: '/lastwork',

            },
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <UserOnline>
                        <UpdateNavBar />
                    </UserOnline>

                </React.Suspense>,
                path: '/navbar',

            },
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <UserOnline>
                        <Profile />
                    </UserOnline>


                </React.Suspense>,
                path: '/profile',

            },
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    
                    <Article />

                </React.Suspense>,
                path: '/article',

            },


            
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <Login />
                </React.Suspense>,
                path: '/login',

            },
            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <UserOnline>
                        <Dashboard />
                    </UserOnline>

                </React.Suspense>,
                path: '*',

            },
        ]
    }
]