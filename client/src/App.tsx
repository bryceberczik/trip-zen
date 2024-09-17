import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
 return (
   <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
     <Footer />
   </Router>
 );

}

export default App;
