import { BookList } from "../../components/BookList/BookList";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export default function Books() {
  return (
    <ErrorBoundary>
      <BookList />
    </ErrorBoundary>
  );
}
