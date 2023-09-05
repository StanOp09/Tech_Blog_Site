const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();
  
    if (title && content) {
      try {
        // Send a POST request to create a new blog post
        const response = await fetch(`/api/blogposts`, {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          // If successful, redirect the browser to the dashboard
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create a new blog post');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred while processing your request.');
      }
    }
  };
  
  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      try {
        // Send a DELETE request to delete a blog post by ID
        const response = await fetch(`/api/blogposts/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // If successful, redirect the browser to the dashboard
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete the blog post');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred while processing your request.');
      }
    }
  };
  
  document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogpost-list')
    .addEventListener('click', deleteButtonHandler);
  