import Page from './page';

class ProfilePage extends Page {
   get iconUser() {
      return $('[alt="avatarIcon"]') }

}

export default new ProfilePage();
