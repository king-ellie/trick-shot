import React, { useState, useEffect } from 'react';

function ForumSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    try {
        const response = await fetch('/.netlify/functions/getSubmissions');
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
    <div>
      <h3>Forum Submissions</h3>
      {submissions.length > 0 ? (
        <div>
          {submissions.map((submission) => (
            <div>
                <h3 key={submission.id}>
                {submission.data['display-name']}
                </h3>

                <p>{submission.data.comment}</p>
                <p>Submitted at: {new Date(submission.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No submissions yet.</p>
      )}
    </div>
  );
}

export default ForumSubmissions;
