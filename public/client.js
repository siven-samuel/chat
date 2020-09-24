const socket = io();

// attach new message to list
function addMessage(obj) {
  const ul = document.getElementById('messages');
  const li = document.createElement('li');
  const user = document.createElement('span');
  const msg = document.createTextNode(obj.msg);

  user.style.color = obj.color;
  user.innerHTML = obj.login + ': ';
  li.appendChild(user);
  li.appendChild(msg);
  ul.appendChild(li);
}

// load all the messages from server
socket.on('allMessages', objs => {
  for (obj of objs) {
    addMessage(obj);
  }
});

// add one message to our board
socket.on('receiveMessage', obj => addMessage(obj));

// send new message to server
function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('send').value;
  if (username !== "" && message !== "") {
    socket.emit('sendMessage', {'login': username, 'msg': message});
    document.getElementById('send').value = "";
  }
}
