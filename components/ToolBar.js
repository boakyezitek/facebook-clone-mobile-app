import React from 'react'
import styled from "styled-components/native";
import Avatar from './Avatar';

import {Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'

const Container = styled.View`
        width: 100%;
        height: 92px;
`

const Row = styled.View`
     flex-direction:row;
     background:#ffffff;
     width:100%;
     padding:0 11px;
     align-items:center;
     margin-bottom:10px;
`
const Input = styled.TextInput`
 height:40px;
 width:87%;
 border-radius:30px;
 padding:0 9px;
 padding-left:20px;
 border-color: #f0f0f0;
 border-width:1px;
 margin-left:10px;
`

const Divider = styled.View`
   width:100%;
   height:0.5px;
   background: #f0f0f0;
   `

const Menu = styled.View`
 flex:1;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 height:42px;
`

const MenuText = styled.Text`
    padding-left: 11px;
    font-weight:500;
    font-size:12px;
`
const Separator = styled.View`
width:1px;
height:26px;
background:#f0f0f0;
`

const BottomDivider = styled.View `
  width:100%;
  height:9px;
  background:#f0f0f0;

`


function ToolBar() {
    return (
        <React.Fragment>
        <Container>
            <Row>
                <Avatar source={require('../assets/53356674.jpg')} />
                <Input placeholder="what's on your mind?"/>

            </Row>
            <Divider />

            <Row>
                <Menu>
                    <Ionicons name="ios-videocam" size={22} color="#F44337" />
                    <MenuText>Live</MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <MaterialIcons name="photo-size-select-actual" size={20} color="#4CAF50"/>
                    <MenuText>Photo</MenuText>
                </Menu>

                <Separator />
                <Menu>
                    <MaterialCommunityIcons name="video-plus" size={22} color="#E141FC" />
                    <MenuText>Room</MenuText>
                </Menu>
            </Row>
        </Container>
        <BottomDivider />
        </React.Fragment>
    )
}

export default ToolBar
