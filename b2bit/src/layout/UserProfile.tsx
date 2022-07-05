import styled from "styled-components";

interface UserProfileProps{
    name: string;
    email: string;
}

const ProfileContainer = styled.form`
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const UserLabelInfo = styled.label`
    font-size: 1em;
    color: #333;
    margin: 5px 0px;
`;

const UserInfo = styled.div`
    background-color: #f0f0f0;
    border: 3px solid #f0f0f0;
    color: #999;
    font-size: 1em;
    border-radius: 5px;
    margin: 5px 0px 25px 0px;
    height: 45px;
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
`;


export default function UserProfile(props: UserProfileProps){

    return(
        <ProfileContainer>
            <UserLabelInfo htmlFor="name">Your <strong>Name</strong></UserLabelInfo>
            <UserInfo id="name"> {props.name} </UserInfo>

            <UserLabelInfo htmlFor="email">Your <strong>E-mail</strong></UserLabelInfo>
            <UserInfo id="email"> {props.email} </UserInfo>

        </ProfileContainer>
    )
}