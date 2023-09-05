const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/');
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while processing your request.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  