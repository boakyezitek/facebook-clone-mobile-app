import React from 'react'
import styled from "styled-components/native";
import { StatusBar, ScrollView } from 'react-native'

import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import Avatar from './Avatar';

const Container = styled.View`
   width:100%;
   height:58px;
   flex-direction:row;
   align-items:center;
`
const Room = styled.TouchableOpacity`
   width:115px;
   height: 40px;
   flex-direction:row;
   align-items:center;
   border-radius:20px;
   border-width:1px;
   border-color:#82b1ff;
   padding:0 15px;
   margin-right:12px;
`

const Text = styled.Text`
color:#1777f2;
font-size: 14px;
padding-left: 6px;
`

const User = styled.View `
  margin-right:13px;
`


const BottomDivider = styled.View`
  width:100%;
  height:9px;
  background:#f0f0f0;

`

function Users() {
    return (
        <React.Fragment>
            <Container>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:11}}>
                    <Room>
                        <MaterialCommunityIcons name="video-plus" size={26} color="#E141FC"/>
                        <Text>Create Room</Text>
                    </Room>

                    <User>
                        <Avatar source={require('../assets/IMG_20190410_120900.jpg')} online={true}/>
                    </User>

                    <User>
                        <Avatar source={require('../assets/pp.jpg')} online={true} />
                    </User>


                    <User>
                        <Avatar source={{uri:'https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} online={true} />
                    </User>

                    <User>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1561311797-26a39128813b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} online={true} />
                    </User>


                    <User>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1539998045166-682834a24072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} online={true} />
                    </User>

                    <User>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} online={true} />
                    </User>

                    <User>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} online={true} />
                    </User>


                </ScrollView>
            </Container>
            <BottomDivider />
        </React.Fragment>
    )
}

export default Users
