import logob2b from '../logob2b.png';
import Card from '../layout/Card';
import SignInForm from '../forms/SignInForm';

export default function ProfilePage(){

    return(
        <Card src={logob2b}>
            <SignInForm/>
        </Card>
    )
}