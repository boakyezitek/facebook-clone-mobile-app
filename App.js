
import React from 'react';
import { StatusBar, ScrollView} from 'react-native'
import styled from 'styled-components/native'
import AppBar from './components/AppBar';

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
        </ScrollView>

      </Container>
    </React.Fragment>
  )
}

export default App;
