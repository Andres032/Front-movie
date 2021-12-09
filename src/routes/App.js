
import '../App.css';
import Home from '../components/Home';
import Lista from '../components/Lista';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import Crear from '../components/Crear';
import Editar from '../components/Editar';





const App = () => {
  return (

    <BrowserRouter>
     <Header></Header>

      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/lista" component={Lista} />
        <Route exact path="/crear" component={Crear} />
        <Route exact path="/editar/:id" component={Editar} />
        
       // <Route path="*" component={NotFound} />
      </Switch>

    

    </BrowserRouter>


  );
}

export default App;
