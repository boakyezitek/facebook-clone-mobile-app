import React from 'react'
import { View } from 'react-native';
import styled from "styled-components/native";
import Avatar from './Avatar';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import FeedCard from './FeedCard';


const Container = styled.View`
   flex:1;
`

const Header = styled.View`
   height:50px;
   flex-direction:row;
   align-items:center;
   justify-content:space-between;
   margin-top:6px;
   padding:0 11px;

`

const Row = styled.View`
align-items:center;
flex-direction:row;

`
const User = styled.Text `font-size:12px;
    font-size:12px;
    font-weight:bold;
    color:#222121;
`
const Time = styled.Text  `
       font-size:9px;
       color:#747476;
`


function Feeds() {
    return (
        <React.Fragment>
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/53356674.jpg')}/>
                        <View style={{marginLeft:9}}>
                            <User>Kofi Boakye</User>
                            <Row>
                                <Time>8m</Time>
                                <Entypo name="dot-single" size={12} color="#747476" />
                                <Entypo name="globe" size={10} color="#747476" />
                            </Row>

                            </View>
                    </Row>

                    <Entypo name="dots-three-horizontal" size={10} color="#747476" />
                </Header>
                <FeedCard photo="https://images.unsplash.com/photo-1599110906443-e1941e8a5e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" likes="20k" comments="30k" post="A React component for displaying different types of images, including network images, static"/>
            </Container>


            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/53356674.jpg')} />
                        <View style={{ marginLeft: 9 }}>
                            <User>Kofi Boakye</User>
                            <Row>
                                <Time>8m</Time>
                                <Entypo name="dot-single" size={12} color="#747476" />
                                <Entypo name="globe" size={10} color="#747476" />
                            </Row>

                        </View>
                    </Row>

                    <Entypo name="dots-three-horizontal" size={10} color="#747476" />
                </Header>
                <FeedCard photo="https://images.unsplash.com/photo-1529119513315-c7c361862fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" likes="20k" comments="30k" post="A React component for displaying different types of images, including network images, static" />
            </Container>

            <Container>
                <Header>
                    <Row>
                        <Avatar source={{ uri:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}} />
                        <View style={{ marginLeft: 9 }}>
                            <User>Abigial Yeboah</User>
                            <Row>
                                <Time>8m</Time>
                                <Entypo name="dot-single" size={12} color="#747476" />
                                <Entypo name="globe" size={10} color="#747476" />
                            </Row>

                        </View>
                    </Row>

                    <Entypo name="dots-three-horizontal" size={10} color="#747476" />
                </Header>
                <FeedCard photo="https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" likes="20k" comments="30k" post="A React component for displaying different types of images, including network images, static" />
            </Container>



            <Container>
                <Header>
                    <Row>
                        <Avatar source={{ uri: "https://images.unsplash.com/photo-1599110364868-364162848518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} />
                        <View style={{ marginLeft: 9 }}>
                            <User>Lawance Opoku</User>
                            <Row>
                                <Time>24hr</Time>
                                <Entypo name="dot-single" size={12} color="#747476" />
                                <Entypo name="globe" size={10} color="#747476" />
                            </Row>

                        </View>
                    </Row>

                    <Entypo name="dots-three-horizontal" size={10} color="#747476" />
                </Header>
                <FeedCard photo="https://images.unsplash.com/photo-1560205001-a7011fc0093c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" likes="20k" comments="30k" post="A React component for displaying different types of images, including network images, static" />
            </Container>



            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/53356674.jpg')} />
                        <View style={{ marginLeft: 9 }}>
                            <User>Kofi Boakye</User>
                            <Row>
                                <Time>8m</Time>
                                <Entypo name="dot-single" size={12} color="#747476" />
                                <Entypo name="globe" size={10} color="#747476" />
                            </Row>

                        </View>
                    </Row>

                    <Entypo name="dots-three-horizontal" size={10} color="#747476" />
                </Header>
                <FeedCard photo="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" likes="20k" comments="30k" post="A React component for displaying different types of images, including network images, static" />
            </Container>
        </React.Fragment>
    )
}

export default Feeds
