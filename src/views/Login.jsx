import Footer from "components/Footer";
import Header from "components/Header";
import LoginForm from "components/LoginForm";
import React from "react";
import { ReactTitle } from "react-meta-tags";

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <ReactTitle title="Área de membros - Alexandre Betioli" />

        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;
