import React, { useState, useEffect } from 'react';

function ForumSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    try {
        const response = await fetch('/.netlify/functions/get-submissions');
        const data = await response.json();
        
        setSubmissions(data);
    } catch (error) {
        console.error('Error fetching submissions:', error);
    }
   };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="forum-submissions">
      <h3 className="submissions-title">What people are saying:</h3>
      {submissions.length > 0 ? (
        <div className="submissions-list">
          {submissions.map((submission) => (
            <div key={submission.id} className="submission-item">
                <h3 className="submission-name">
                {submission.data['display-name']}
                </h3>

                <p className="submission-comment">{submission.data.comment}</p>
                
                <p className="submission-date">Submitted at: {new Date(submission.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-submissions">No submissions yet.</p>
      )}
    </div>
  );
}

export default ForumSubmissions;
