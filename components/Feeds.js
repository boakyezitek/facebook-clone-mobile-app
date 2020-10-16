import React from 'react'
import styled from "styled-components/native";
import Avatar from './Avatar';


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




function Feeds() {
    return (
        <React.Fragment>
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/53356674.jpg')}/>
                    </Row>
                </Header>
            </Container>
        </React.Fragment>
    )
}

export default Feeds
