function fetchPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка отримання поста');
        }
        return response.json();
      });
  }
  
  function fetchCommentsByPostId(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка отримання коментарів');
        }
        return response.json();
      });
  }
  function handleClick() {
    const postId = document.getElementById('postId').value;
  
    if (!postId || isNaN(postId) || postId < 1 || postId > 100) {
      alert('Введіть дійсний ід поста від 1 до 100');
      return;
    }
  
    fetchPostById(postId)
      .then(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <button id="commentsBtn">Отримати коментарі</button>
          <div id="comments"></div>
        `;
        document.getElementById('postContainer').appendChild(postElement);
        document.getElementById('commentsBtn').addEventListener('click', () => {
          fetchCommentsByPostId(postId)
            .then(comments => {
              const commentsContainer = document.getElementById('comments');
              commentsContainer.innerHTML = '';
              comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.innerHTML = `
                  <h3>${comment.name}</h3>
                  <p>${comment.body}</p>
                `;
                commentsContainer.appendChild(commentElement);
              });
            })
            .catch(error => {
              alert('Помилка при отриманні коментарів: ' + error.message);
            });
        });
      })
      .catch(error => {
        alert('Помилка при отриманні поста: ' + error.message);
      });
  }
  document.getElementById('searchBtn').addEventListener('click', handleClick);
  