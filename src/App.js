import React, { useContext } from 'react';
import { Context } from "./index";
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom'
import Loader from "./components/common/Loader";
import AppRouter from "./components/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from './components/header/Header';
import MyFooter from './components/footer/MyFooter';
import { Layout } from 'antd';
import TmpPage from "./components/tmpPage/TmpPage";
import { Route, Switch } from "react-router";

const { Content } = Layout;

const App = () => {

  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  window.onpopstate = function (event) {
    alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  };

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route key={'TMP_PAGE'} path={'TMP_PAGE'} component={TmpPage} exact={true} />
        <Route>
          <Header />
          <Content style={{ padding: '50px', background: '#f0f2f5' }}>
            <Content style={{ background: '#fff', padding: 50 }}>
              <AppRouter />
            </Content>
          </Content>
          <MyFooter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
