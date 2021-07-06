import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
        <Route path="/settings" component={Settings} />
        <Route path="/post/:id" component={Single} />
      </Switch>
    </>
  );
}

export default App;
