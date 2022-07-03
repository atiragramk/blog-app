import { ErrorBoundary } from "../../components/ErrorBoundary";
import { Statistic } from "../../components/Statistic";

export default function Statistics() {
  
  return (
    <ErrorBoundary>
      <Statistic />
    </ErrorBoundary>
  );
}
