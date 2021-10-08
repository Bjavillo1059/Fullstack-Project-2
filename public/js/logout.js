const logout = async () => {
    // const response = await fetch('/api/users/logout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    // });
  
  //   if (response.ok) {
      window.location ='/home';
  //   } else {
      alert('You have been logged out.');
  //   }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);