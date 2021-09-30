import "./App.css";

import NavBar from "./Components/NavBar";
import QuizPage from "./Pages/QuizPage/QuizPage";
import TriangleAreaPage from "./Pages/Triangle Area Page/TriangleAreaPage";
import HypotenuesPage from "./Pages/Hypotenues Page/HypotenuesPage";
import VerifyTrianglePage from "./Pages/Verify Triangle Page/VerityTrianglePage";

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Switch>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/triangle-area" >
          <TriangleAreaPage />
        </Route>
        <Route path="/hypotenues" >
          <HypotenuesPage />
        </Route>
        <Route path="/verify-triangle" >
          <VerifyTrianglePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
