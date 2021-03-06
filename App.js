import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SplashScreen from './src/screens/splash/splashScreen';
import AuthenticationScreen from './src/screens/authentication/authenticationScreen';
import MainScreen from './src/screens/main/mainScreen';
import LandingScreen from './src/screens/landing/landingScreen'
import store from './src/app/store';
import { Provider } from "react-redux";
import './config/Reactotron';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">

                        <Scene key="main" component={MainScreen} title="Main"/>
                        <Scene key="splash" component={SplashScreen} title="Splash"  hideNavBar initial/>
                        <Scene key="authentication" component={AuthenticationScreen} title="Authentication" hideNavBar/>
                        <Scene key="landing" component={LandingScreen} title="Landing" hideNavBar />
                        <Scene key="main" component={MainScreen} title="Main" hideNavBar/>
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
