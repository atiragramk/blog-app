import { Layout } from "./components/Layout";
import { Statistic } from "./components/Statistic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const BooksPage = lazy(() => import("./pages/BooksPage"));
const SingleBookPage = lazy(() => import("./pages/SingleBookPage"))


function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:routeId" element={<SingleBookPage />} />
            <Route path="statistics" element={<Statistic />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
