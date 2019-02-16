class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  // Display profile and uI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Pulic Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Pulic Gists: ${user.gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Website/blog: <a href='${user.blog}'>${user.blog}</a></li>
                <li class="list-group-item">Company: <a href='https://github.com/${(user.company === '')? (user.company).substring(1) : ''}'>${user.company}</a></li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 mt-2">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

// Show user repos
showRepos(repos){
  let output = '';

  repos.forEach(function(repo){
    output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
    `;
  });

  // Output repos
  document.getElementById('repos').innerHTML = output;
}

  // Clear profile
  clearProfile(){
    this.profile.innerHTML = '';
  }

  // Show alert messages
  showAlert(message, className){
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
          // // Add data-dismiss
          // div.setAttribute("data-dismiss", "alert")
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div,search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear aler mesage
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }
}
