import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import Provider from "react-redux/lib/components/Provider";
import store from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import {withSuspense} from "./hoc/withSuspense";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (


                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Route path="/dialogs"
                                   render={withSuspense(DialogsContainer)} />
                            <Route path="/profile/:userId?"
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>
                            <Route path="/login"
                                   render={() => <LoginPage/>}/>
                            <Route path="/news"
                                   render={() => <News/>}/>
                            <Route path="/music"
                                   render={() => <Music/>}/>
                            <Route path="/settings"
                                   render={() => <Settings/>}/>
                        </div>
                    </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp =(props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

}

export default SamuraiJSApp;
