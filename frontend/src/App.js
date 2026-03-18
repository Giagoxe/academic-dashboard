import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <h1>Bienvenido al Panel de Control Académico</h1>
                </Route>
                <Route path="/acerca-de">
                    <h1>Página Acerca de</h1>
                </Route>
                {/* Agregar más rutas según sea necesario */}
            </Switch>
        </Router>
    );
};

export default App;