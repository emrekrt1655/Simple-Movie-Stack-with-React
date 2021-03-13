import React from 'react'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Movie from './Movie'
import Navbar from './components/Navbar/Navbar'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Aboutus from './Aboutus'
import Contact from './Contact'


const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch>
         <Route path='/detail/:id' component={MovieDetails} exact />
         <Route path='/aboutus' component={Aboutus} exact />
         <Route path='/contact' component={Contact} exact />
         <Route  path='/' component={Movie} />
        </Switch>
        </BrowserRouter>
    )
}

export default App
