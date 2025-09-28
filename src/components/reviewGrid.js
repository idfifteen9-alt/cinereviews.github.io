export function createReviewGrid(reviews) {
  if (reviews.length === 0) {
    return `
      <div style="text-align: center; padding: 4rem 0; color: var(--text-secondary);">
        <h3>No reviews found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    `;
  }

  return `
    <div class="review-grid">
      ${reviews.map(review => createReviewCard(review)).join('')}
    </div>
  `;
}

function createReviewCard(review) {
  const stars = createStars(review.rating);
  
  return `
    <article class="review-card">
      <img src="${review.image}" alt="${review.title}" class="review-image" loading="lazy">
      <div class="review-content">
        <div class="review-header">
          <div>
            <h3 class="review-title">${review.title}</h3>
            <div class="review-meta">
              <span>${review.year} • ${review.genre}</span>
              <span class="review-type">${review.type}</span>
            </div>
          </div>
        </div>
        <div class="rating">
          <div class="stars">${stars}</div>
          <span>${review.rating}/5</span>
        </div>
        <p class="review-excerpt">${review.excerpt}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
          <small style="color: var(--text-secondary);">By ${review.director}</small>
          <small style="color: var(--text-secondary);">${formatDate(review.date)}</small>
        </div>
      </div>
    </article>
  `;
}

function createStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  
  let starsHTML = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star">★</span>';
  }
  
  // Half star
  if (hasHalfStar) {
    starsHTML += '<span class="star">★</span>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="star empty">☆</span>';
  }
  
  return starsHTML;
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}