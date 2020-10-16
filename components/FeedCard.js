import React from 'react'
import styled from "styled-components/native";
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const Row = styled.View`
align-items:center;
flex-direction:row;

`
const Post = styled.Text`
    font-size:12px;
    color: #222121;
    line-height:16px;
    padding:0 11px;
`
const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height:300px;
`
const Footer = styled.View`
    padding:0 11px;
`

const FooterCount = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding: 9px 0;
`

const IconCount = styled.View`
     background: #1878f3;
     width:20px;
     height:20px;
     border-radius:10px;
     justify-content:center;
     align-items:center;
     margin-right:6px;
 `

const TextCount = styled.Text`
   font-size:11px;
   color: #424040;
`
const Separator = styled.View`
width:100%;
height:1px;
background:#f9f9f9;
`

const FooterMenu = styled.View`
flex-direction:row;
justify-content:space-between;
padding: 9px 0;
`

const Button = styled.TouchableOpacity`
flex-direction:row;
`
const Icon = styled.View`
margin-right: 6px;
`

const Text = styled.Text`
font-size:12px;
color:#424040;
`

const BottomDivider = styled.View`
  width:100%;
  height:9px;
  background:#f0f0f0;

`
function FeedCard({post, photo, likes, comments}) {
    return (
        <React.Fragment>
            <Post>{post} </Post>
            <Photo source={{ uri: `${photo}`}} />

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name="like1" size={12} color="#FFFFFF" />
                        </IconCount>
                        <TextCount>{likes} likes</TextCount>
                    </Row>
                    <TextCount>{comments} Commments</TextCount>
                </FooterCount>
                <Separator />
                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign name="like1" size={20} color="#424040" />
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name="comment-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name="share-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>
            <BottomDivider />
        </React.Fragment>
    )
}

export default FeedCard
