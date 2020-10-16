import React from 'react'
import styled from 'styled-components/native';
import {ScrollView} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import Avatar from './Avatar';

const Container = styled.View `
   width: 100%;
   height:192px;
   flex-direction:row;
   align-items:center;
`
const Card = styled.View `
   width:106px;
   height:170px;
   position:relative;
   border-radius:8px;
   margin-right:9px;
`

const CardStory = styled.Image`
   width:100%;
   height:170px;
   position:relative;
   border-radius:12px;
`

const CardUser = styled.View`
   position:absolute;
   top:8px;
   left:8px;
   background:#FFFFFF;
   border-radius:20px;
   width:39px;
   height:39px;
    justify-content:center;
   align-items:center;


`
const CardFooter = styled.View`
    width:100%;
   position:absolute;
   bottom:12px;
   left:9px;
`
const Text = styled.Text`
    font-size:13px;
    font-weight:bold;
    color:#FFFFFF;
    text-shadow:1px 1px 1px rgba(0,0,0,0.4);
`

const BottomDivider = styled.View`
  width:100%;
  height:9px;
  background:#f0f0f0;

`

function Story() {
    return (
        <React.Fragment>
        <Container>
             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:11, marginRight:11}}>
                      <Card>
                    <CardStory source={{ uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                    <CardUser>
                        <AntDesign name="plus" size={24} color="#1777f2"/>
                    </CardUser>
                    <CardFooter>
                        <Text>Add To Story</Text>
                    </CardFooter>
                      </Card>

                <Card>
                    <CardStory source={{ uri: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                    <CardUser>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} story={true}/>
                    </CardUser>
                    <CardFooter>
                        <Text>Daniel Mafo</Text>
                    </CardFooter>
                </Card>



                <Card>
                    <CardStory source={{ uri: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                    <CardUser>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Kofi Emma</Text>
                    </CardFooter>
                </Card>





                <Card>
                    <CardStory source={{ uri: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                    <CardUser>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Enerst Opoju</Text>
                    </CardFooter>
                </Card>




                <Card>
                    <CardStory source={{ uri: 'https://images.unsplash.com/photo-1509668521827-dd7d42a587e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                    <CardUser>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Abigail Yebaoh</Text>
                    </CardFooter>
                </Card>




                <Card>
                    <CardStory source={{ uri: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                    <CardUser>
                        <Avatar source={{ uri: 'https://images.unsplash.com/photo-1599110906443-e1941e8a5e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Kofi Boakye</Text>
                    </CardFooter>
                </Card>
             </ScrollView>
        </Container>
        <BottomDivider />
        </React.Fragment>
    )
}

export default Story
