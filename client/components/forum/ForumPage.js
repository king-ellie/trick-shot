import React, { useState, useRef } from "react";
import ForumSubmissions from "./ForumSubmissions";
import TrickShotVideo from "../TrickShotVideo";

function ForumPage() {
  const [displayName, setDisplayName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "forum", "comment": comment, "display-name": displayName }),
    })
    .then(() => setIsSubmitted(true))
    .catch(error => alert(error));
    
    event.preventDefault();
    setDisplayName("");
    setComment("");

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2 className="forum-title">Welcome to the Trick Shot For Girls Only Public Forum</h2>

      <button onClick={scrollToForm} style={{ display: 'block', margin: '0 auto' }}>Skip to Comments</button>

      <TrickShotVideo nameOfStyle='forum-video' />

      <h3 ref={formRef} className="forum-subtitle">Join the Conversation</h3>

      <form name="forum" onSubmit={handleSubmit} className="forum-form" method="POST">
        <input type="hidden" name="form-name" value="forum" />

        <div className="form-group">
          <label htmlFor="display-name" className="form-label">
            Display Name:
          </label>

          <input
            type="text"
            id="display-name"
            name="display-name"
            placeholder="Enter your display name"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="form-label">
            What nice things do you have to say about the trick shot?
          </label>
          
          <textarea
            id="comment"
            name="comment"
            placeholder="Enter your praise"
            rows="4"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
            className="form-input"
          ></textarea>
        </div>

        <div className="form-button-container">
          <button type="submit" className="form-button">Post to Forum</button>
        </div>
      </form>

      {isSubmitted && (
        <div className="toast" style={{ textAlign: 'center' }}>
          <p>Thank you for your praise.</p>
          <p>It will appear in the forum shortly.</p>
        </div>
      )}

      <ForumSubmissions/>
    </div>
  );
}

export default ForumPage;
