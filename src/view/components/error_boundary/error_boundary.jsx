import React from 'react';
import { Header } from '@components/header/header';
import { styles } from './styles';
import { loc } from '@texts';
import { colors } from '@colors';

const APP_BASE_STYLE_CLASS = 'app-body'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidMount() {
    document.body.classList.add(APP_BASE_STYLE_CLASS);
}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR >> ', errorInfo)
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div style={styles.base}>
          <div style={styles.messageBox}>
            <h1>{loc('somethingWentWrong')}</h1>
            <p>{loc('weAreCurrentlyWorking')}</p>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;