import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import './components/css/main.css';
/*COMPONENTS */
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import  { Showcase, Resorts} from './components/Showcase';

const App = () => {

    const container = {
        
        fontFamily: "'Montserrat', sans-serif",
        margin: '0',
        padding: '0'
    }
  


    return(
       
        <BrowserRouter>
        <div style={container}>
            
            <Nav />
            
            <Switch>
                
            <Route exact path="/" component={Showcase}></Route>
            <Route exact path="/resorts" component={Resorts} />
            
            <Route path="/:id" component={NotFound}></Route>
            </Switch>
            
            
        </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));