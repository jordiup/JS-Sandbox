class GitHub {
  constructor(){
    // Add your own details here
    // Generated from: https://github.com/settings/applications/
    // this.client_id = '123456qwertyu';
    // this.client_secret = '1278sdfghjk';

  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
