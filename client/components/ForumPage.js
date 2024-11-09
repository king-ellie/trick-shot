import React, { useState } from 'react';

function ForumPage() {
  const [displayName, setDisplayName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Display Name:', displayName);
    console.log('Comment:', comment);
  };

  return (
    <div className="center-video">
      <p>Welcome to the Trick Shot For Girls Only public forum</p>

      <form name="forum" onSubmit={handleSubmit} className="forum-form" netlify>
        <div className="form-group">
          <label htmlFor="displayName">Display Name:</label>

          <input
            type="text"
            id="displayName"
            name="displayName"
            placeholder="Enter your display name"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment">What nice things do you have to say about the trick shot?</label>

          <textarea
            id="comment"
            name="comment"
            placeholder="Enter your comment"
            rows="4"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <button type="submit">Post Comment</button>
        </div>
      </form>
    </div>
  );
}

export default ForumPage;
