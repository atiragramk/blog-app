import { BookInfo } from "../../components/BookInfo/BookInfo";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export default function SingleBook() {
  return (
    <ErrorBoundary>
      <BookInfo />
    </ErrorBoundary>
  );
}
