async function commentFormHandler(event) {
    event.preventDefault();
    
    const image = document.querySelector('img[name="image"]').value;
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const comment_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          comment_id,
          comment_text,
          image
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
          document.location.reload();
      } else {
          alert(response.statusText);
      }
    }
}
  
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

// Note: 
// create img tag for image
// create textarea for comment_text
// create button with class="comment-form"