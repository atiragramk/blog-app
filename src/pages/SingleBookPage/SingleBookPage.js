import { BookInfo } from "../../components/BookInfo/BookInfo";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export default function SingleBookPage() {
  return (
    <ErrorBoundary>
      <BookInfo />
    </ErrorBoundary>
  );
}
