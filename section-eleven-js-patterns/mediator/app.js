const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to){
    this.chatroom.send(message,this, to);
  },
  receive: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function(){
  let users = {}; // list of users

  return {
    register: function(user){
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message,from,to){
      if(to){
        // Single user message, pm
        to.receive(message, from);
      } else {
        // Global message
        for (key in users){
          if(users[key] !== from){
            users[key].receive(message,from);
          }
        }
      }
    }

  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');
const joe = new User('Joe');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);
chatroom.register(joe);

brad.send('Hello Jeff', jeff);
sarah.send('Yo Brad 👋', brad);
jeff.send('Hello everyone 🙌');
