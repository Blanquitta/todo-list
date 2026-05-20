import { useState } from 'react';
  async function handleSubmit(event) {
    event.preventDefault();
    
    function Logon({
  onSetEmail,
  onSetToken,
})

    setIsLoggingOn(true);
    setAuthError('');


})

    try {
      const response = await fetch('/api/users/logon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to log on');
      }

      if (response.status === 200 && data.name && data.csrfToken) {
        onSetEmail(data.name);
        onSetToken(data.csrfToken);
      }
    } catch (error) {
      setAuthError(error.message || 'Something went wrong');
    } finally {
      setIsLoggingOn(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Log On</h1>

      <form className="content" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {authError && <p>{authError}</p>}

        <button type="submit" disabled={isLoggingOn}>
          {isLoggingOn ? 'Logging on...' : 'Log On'}
        </button>
      </form>
    </div>
  );
}