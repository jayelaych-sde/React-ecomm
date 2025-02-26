import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Footer from "./components/Footer";
import { books } from "./data";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </>
    </Router>
  );
}

export default App;
