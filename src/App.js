import { Header } from "./components/Header";
import { AuthorInfo } from "./components/AuthorInfo";
import { BookList } from "./components/BookList";
import { BookInfo } from "./components/BookInfo";
import { Statistic } from "./components/Statistic";
import { StyledWrapper } from "./styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <StyledWrapper>
        <Header />
      </StyledWrapper>
      <Routes>
        <Route path="/" element={<AuthorInfo />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<BookInfo />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </Router>
  );
}

export default App;
