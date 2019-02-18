const data = [
  {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
      name: 'Jen Smith',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'Carousel CA',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
      name: 'William Bacon',
      age: 30,
      gender: 'male',
      lookingfor: 'female',
      location: 'New York NY',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },

];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" style="border-radius:50%;">`;
  } else {
      // No more profiles
      window.location.reload();
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0; // (our counter)

  return {
    next: function(){
      // we then want to return the function or done
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } :
      // otherwise return done
      { done: true }
    }
  };
}
