const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
  let content = messageIn.value;
  // check if the input box is not empty
  if (content === '') {
    alert('Please Enter Your Message');
  } else {
    messageOut.innerHTML = content;
    // clear message after submission
    messageIn.value = '';
  }
}