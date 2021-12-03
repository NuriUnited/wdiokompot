import AppPage from './app.page';

class ProfilePage extends AppPage {
   get iconUser() { return $('[alt="avatarIcon"]') }

}

export default new ProfilePage();
