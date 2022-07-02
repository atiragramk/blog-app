import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    
    return this.props.children;
  }
}
