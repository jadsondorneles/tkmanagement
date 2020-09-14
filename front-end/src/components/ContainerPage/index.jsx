import React from 'react'

import { Container, Navbar, Logo, Content } from './styles'

import LogoImg from '../../assets/img/logo.svg'

export default (props) => {
    return (
        <Container>
            <Navbar>
                <Logo src={LogoImg} alt="TK Management"></Logo>
            </Navbar>
            <Content>{props.children}</Content>
        </Container>
    )
}