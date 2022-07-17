import "./common/header/Header.css";
import"./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header";
import Pages from "./Pages/Pages";

function App() {
  return (
    <>
   <Router>
        <Header/>
        <Pages />
        <Routes>
        
          <Route path='/' exact>
          
          </Route>
          
          
        </Routes>
        
      </Router>
    
    </>
  );
}

export default App;
