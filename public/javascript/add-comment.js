async function newFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment_text"]').value;
    const image = document.querySelector('img[name="image"]').value;
  
    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);

//Note: 
// create input field for comment_text
// create button with class="new-comment-btn"