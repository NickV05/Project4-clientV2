import { Routes, Route } from "react-router-dom";

import Projects from "./pages/projects";

function App() {

 

  return (
    <div className="">
 
      <Routes>      
        <Route path="/" element={ <Projects /> } />
        
      </Routes>
      
    </div>
  );
}
export default App;
