import styled from "styled-components";

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
    margin: 50px 10px 30px 10px;
    display: flex;
    justify-content: center;
`;

const SupImg = styled.img`
    border-radius: 5px;
`;

const Content = styled.div`
    background-color: #fff;
    color: #000;
    padding: 0px;
    margin: 0px;
`;

export default function Card(props: CardProps){

    return(
        <CardContainer>
            <SupImgDiv>
                <SupImg src={props.src} width="320"></SupImg>
            </SupImgDiv>
            <Content> {props.children} </Content>
        </CardContainer>
    );
}