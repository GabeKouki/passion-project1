import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          {/* <h1>Testing</h1> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
