import React, { useContext, Suspense } from 'react';
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
// import TmpPage from "./components/tmpPage/TmpPage";
import { Route, Switch } from "react-router";
import { observer } from 'mobx-react-lite'


const TmpPage = React.lazy(() => import('./components/tmpPage/TmpPage'));

const { Content } = Layout;

const App = () => {

  const { auth, store } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  const sites = store.firebaseService.sites;

  if (loading) {
    return <Loader />
  }

  const otherComponent = sites.map((site) => {
    return (<Route key={site.uid} path={`/${site.url}`} render={() => {
      return (
        <Suspense fallback={<Loader />}>
          <TmpPage text={site.pageDOM} />
        </Suspense>
      )
    }} exact={true}
    />)
  })

  return (
    <BrowserRouter>
      <Switch>
        {otherComponent}
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

export default React.memo(observer(App));
