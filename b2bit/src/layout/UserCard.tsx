import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';

interface CardProps{
    src: string;
    children?: React.ReactNode;
}

const CardContainer = styled.div`
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 20px #999;
    margin: 30px;
    width: 430px;
    overflow: hidden;
`;

const SupImgDiv = styled.div`
    margin: 20px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SupImgLabel = styled.p`
    color: #000;
    padding: 10px;
    margin: 0px;
    font-size: .8em;
`;

const SupImg = styled.img`
    border-radius: 10%;
`;

const Content = styled.div`
    background-color: #fff;
    color: #000;
    padding: 0px;
    margin: 0px;
`;

const LogoutButton = styled.button`
    background-color: #012250;
    border: 3px solid #012250;
    color: #fff;
    font-size: 1.1em;
    border-radius: 5px;
    height: 40px;
    font-weight: bold;
    margin: 15px 15px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    &:hover {
        background-color: #02336f;
    }
    &:disabled {
        opacity: 0.35;
    }
`;

export default function UserCard(props: CardProps){
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem('token')
        navigate("/login")
    }

    return(
        <CardContainer>
            <SupImgDiv>
                <SupImgLabel>Profile picture</SupImgLabel>
                <SupImg src={props.src} width="70"></SupImg>
            </SupImgDiv>
            <Content> {props.children} </Content>

            <LogoutButton onClick={logout}>Log out</LogoutButton>
        </CardContainer>
    );
}