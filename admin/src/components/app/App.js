import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import NotFound from '../../pages/not-found'
import HomePage from '../../pages/home/Home'
import PhotosPage from '../../pages/photos'

function App() {
    // const [isOn, setIsOn] = useState(false)
    return (
        <div className="app">
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="w-64 min-h-screen bg-gray-800 sm:mt-0">
                    <div className="flex items-center justify-center bg-white py-2">
                        <img className="h-8" src="https://avalon-ruse.com/staging/wp-content/themes/avalon/assets/images/logo.png" alt="Logo" />
                    </div>
                    <nav className="">
                        <NavLink to='/' exact className='nav-item' activeClassName='selected'><span className="mx-4 font-medium">Dashboard</span></NavLink>
                        <NavLink to='/photos' exact className='nav-item' activeClassName='selected'><span className="mx-4 font-medium">Photos</span></NavLink>
                    </nav>
                </div>
                <div className='w-full p-4'>
                    <div className='page-content'>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/photos" exact component={PhotosPage} />

                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default App
