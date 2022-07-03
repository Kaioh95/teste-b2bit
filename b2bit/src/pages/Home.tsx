import UserCard from '../layout/UserCard';
import UserProfile from '../layout/UserProfile';

export default function Home(){

    return(
        <UserCard src="https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg">
            <UserProfile name="Name LastName" email="email@email.com"></UserProfile>
        </UserCard>
    )
}