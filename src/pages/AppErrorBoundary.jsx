import React from 'react';
import NotFoundPage from './NotFoundPage';

export default class AppErrorBoundary extends React.Component {
  state = { hasError: false };

  handleRuntimeError = (error) => {
    this.setState({ hasError: true });
    console.error('RIDO EVENTS runtime error', error);
  };

  componentDidMount() {
    window.addEventListener('error', this.handleRuntimeError);
    window.addEventListener('unhandledrejection', this.handleRuntimeError);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.handleRuntimeError);
    window.removeEventListener('unhandledrejection', this.handleRuntimeError);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('RIDO EVENTS application error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <NotFoundPage isError />;
    }

    return this.props.children;
  }
}