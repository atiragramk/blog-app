
import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import React from "react";

const HomePage = lazy(() => import("./pages/Home"));
const BooksPage = lazy(() => import("./pages/BookList"));
const SingleBookPage = lazy(() => import("./pages/BookItem"));
const Statistics = lazy(() => import("./pages/Statistics"));

function App() {
  return (
    <Container>
      <Router basename="/blog-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:routeId" element={<SingleBookPage />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={3000} />
    </Container>
  );
}

export default App;
