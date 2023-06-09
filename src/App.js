import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import ArticlesList from "./pages/ArticlesList"
import Article from "./pages/Article";


//components
import Navbar from "./components/Navbar";

 function App() {
  return (
    <Router>
      <Navbar/>
  <div className='max-w-screen-md mx-auto pt-20' >
    <Routes>
                <Route path="/home" element={<Home/>} />
                 <Route path="/about" element={<About/>} />
                  <Route path="/articleslist" element={<ArticlesList/>} />
                   <Route path="/article/:name" element={<Article/>} />
     </Routes>
    </div> 
    </Router>
          );
         }

export default App;
