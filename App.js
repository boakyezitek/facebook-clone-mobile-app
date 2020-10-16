
import React from 'react';
import { StatusBar, ScrollView} from 'react-native'
import styled from 'styled-components/native'
import AppBar from './components/AppBar';
import Story from './components/Story';
import ToolBar from './components/ToolBar';
import Users from './components/Users';

const Container = styled.SafeAreaView`
 flex:1;
`
const App = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
        </ScrollView>

      </Container>
    </React.Fragment>
  )
}

export default App;
