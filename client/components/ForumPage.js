import React, { useState } from 'react';

function ForumPage() {
  const [displayName, setDisplayName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Display Name:', displayName);
    console.log('Comment:', comment);

    // Reset form fields
    setDisplayName('');
    setComment('');
    setIsSubmitted(true);

    setTimeout(() => {
        setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="center-video">
      <p>Welcome to the Trick Shot For Girls Only public forum</p>

      <form name="forum" onSubmit={handleSubmit} className="forum-form" method="POST">
        <input type="hidden" name="form-name" value="forum" />
      
        <div className="form-group">
          <label htmlFor="display-name">Display Name:
            <input
              type="text"
              id="display-name"
              name="display-name"
              placeholder="Enter your display name"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="comment">What nice things do you have to say about the trick shot?
            <textarea
              id="comment"
              name="comment"
              placeholder="Enter your praise"
              rows="4"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              required
            ></textarea>
          </label>
        </div>

        <div>
          <button type="submit">Post Comment</button>
        </div>
      </form>

      {isSubmitted && (
        <div className="toast" style={{ textAlign: 'center' }}>
          <p>Thank you for your praise.</p>
          <p>It will appear in the forum shortly.</p>
        </div>
      )}
    </div>
  );
}

export default ForumPage;
