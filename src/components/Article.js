import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const calculateReadTime = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  const readTime = minutes ? calculateReadTime(minutes) : null;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      {readTime && <p>{readTime}</p>}
    </article>
  );
};

export default Article;
