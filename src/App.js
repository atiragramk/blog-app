import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const BooksPage = lazy(() => import("./pages/BooksPage"));
const SingleBookPage = lazy(() => import("./pages/SingleBookPage"));
const Statistics = lazy(() => import("./pages/Statistics"));

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:routeId" element={<SingleBookPage />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
