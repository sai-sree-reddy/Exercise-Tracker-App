import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.csss"
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";


import Navbar from "./components/navbar.component"; 
import ExercisesList from "./components/exercises-list.component";
import  EditExercise from "./components/edit-exercise.component";
import  CreateExercise from "./components/create-exercise.component";
import CreateUser from ",/components/create-user.component";

 v 


function App() {
  return (
    <Router>
      <Navbar/>
       <br/>
       <Route path="/" exact component={ExercisesList} />
       <Route path="/edit/:id" exact component={EditExercise} />
       <Route path="/create" exact component={CreateExercise} />
       <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
