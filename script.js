function login() {
  const username = document.getElementById('username').value.trim();
  if (username) {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.main-app').style.display = 'block';
    document.getElementById('user-name').textContent = username;
  }
}

function signOut() {
  document.querySelector('.login-container').style.display = 'block';
  document.querySelector('.main-app').style.display = 'none';
}

function createPost() {
  const postFeed = document.getElementById('postFeed');
  const content = document.getElementById('postInput').value.trim();
  const file = document.getElementById('fileUpload').files[0];

  if (!content && !file) return;

  const post = document.createElement('div');
  post.className = 'post';

  let html = `<p>${content}</p>`;

  if (file) {
    const fileURL = URL.createObjectURL(file);
    if (file.type.startsWith('image/')) {
      html += `<img src="\${fileURL}" style="max-width:100%; margin-top:10px;" />`;
    } else {
      html += `<p><a href="\${fileURL}" download>Download File</a></p>`;
    }
  }

  html += `
    <div class="comment-box">
      <input type="text" placeholder="Add a comment..." />
      <button onclick="alert('Comment added!')">Comment</button>
    </div>`;

  post.innerHTML = html;
  postFeed.prepend(post);

  document.getElementById('postInput').value = '';
  document.getElementById('fileUpload').value = '';
}