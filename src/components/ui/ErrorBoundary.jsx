
import React from 'react';
import { Button } from './button';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-8 text-center">
          <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-xl">
             We encountered an unexpected error.
          </p>
          <div className="bg-muted p-4 rounded-lg text-left overflow-auto max-w-2xl w-full mb-8 font-mono text-sm max-h-64">
             <p className="font-bold text-destructive">{this.state.error?.toString()}</p>
             <pre className="text-xs text-muted-foreground mt-2">{this.state.errorInfo?.componentStack}</pre>
          </div>
          <Button onClick={() => window.location.reload()} variant="outline">
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
