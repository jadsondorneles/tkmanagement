import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 50px);
    height: 100%;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 25px;
    overflow: auto;
`

export const Navbar = styled.div`
    width: 100%;
    max-width: 280px;
`

export const Logo = styled.img`
    width: 100%;
    padding: 20px 0 0 0;
`

export const Content = styled.div`
    max-width: 650px;
    width: 100%;
`