import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Have you ever wanted to know what are the top rated Hiking Spots in Minnesota?</p>
        <p>If so, you have come to the right place!</p>
        <p>We are so glad to have you join our Hiking Community of Adventurers who are dedicated to sharing the best hiking trails around to help you get out and enjoy spending time in nature.</p>

      </div>
    </div>
  );
}

export default AboutPage;
