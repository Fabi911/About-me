import styled from "styled-components";

export default function Layout({children}){
    return(
    <>
    <Header>
        <h1>Fabian Döz - Web Developer</h1>
    </Header>
    {children}
    <Footer>

    </Footer>
    </>
    )
}

// styled components

const Header=styled.header`
background-color: #202020;
width: 100vw;
height: 5rem;
position: fixed;
top: 0;
display: flex;
align-items: center;
padding: 0 0 0 2rem;
left: 0;
`

const Footer=styled.footer`
background-color: #202020;
width: 100vw;
height: 3rem;
position: fixed;
bottom: 0;
`