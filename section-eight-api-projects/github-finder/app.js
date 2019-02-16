// Search Input
const searchUser = document.getElementById('searchUser');

// Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

// Search input event listener, 'keyup' allows for instantaneous search
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // console.log(userText);

    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger alert-dismissible');
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
        console.log(data);
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
