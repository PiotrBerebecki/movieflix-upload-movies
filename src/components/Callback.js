import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

// Callback component stores our authentication credentials
// and redirects back to the upload route in our app.
class Callback extends Component {
  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = '/';
  }

  render() {
    return null;
  }
}

export default Callback;
