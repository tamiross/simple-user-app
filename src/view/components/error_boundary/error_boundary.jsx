import React from 'react';
import { styles } from './styles';
import { loc } from 'texts';
import { Box } from 'components/box/box';

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
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR >> ', errorInfo)
  }

  render() {
    const { hasError } = this.state;

    if (!hasError) {
      return (
        <div style={styles.base}>
          <Box style={styles.messageBox}>
            <h1>{loc('somethingWentWrong')}</h1>
            <p>{loc('weAreCurrentlyWorking')}</p>
          </Box>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;