function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);

  // Decode the JWT to fetch user information
  const base64Url = response.credential.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
      .join('')
  );

  const userInfo = JSON.parse(jsonPayload);
  console.log('User Info:', userInfo);

  // Redirect or display the user information
  alert(`Welcome, ${userInfo.name}`);
}
