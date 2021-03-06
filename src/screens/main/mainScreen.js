import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Container, View, Text, Header, Right, Button, Footer, FooterTab, Left, Icon, Body, Title, Content } from 'native-base';
import MainScreenToolbar from "./../../components/MainScreenToolbar";
import BottomNavigationBar from "./../../components/BottomNavigationBar";


class MainScreen extends Component {

    render() {
        return (
            <Container>
                <MainScreenToolbar />
                <BottomNavigationBar
                    nflPage={<View>
                                <Text>1 page</Text>
                             </View>}
                    mblPage={<View>
                                <Text>2 page</Text>
                            </View>}
                    myNewsPage={<View>
                                <Text>3 page</Text>
                            </View>}
                    pollsPage={<View>
                                <Text>4 page</Text>
                            </View>}
                    />
            </Container>);
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);