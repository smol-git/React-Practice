import React, { useState } from "react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      // In a real application, you would send the new password to the server.
      // Here, we simulate it by displaying a success message.

      setMessage('Password reset successfully!');
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <>
      <form>
        <div>
          <h1>Reset Password</h1>
          <p>{message}</p>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Reset Password
        </button>
      </form>
    </>
  );
}