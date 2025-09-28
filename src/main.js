import './style.css'
import { createHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createReviewGrid } from './components/reviewGrid.js'
import { createAds } from './components/ads.js'
import { createFooter } from './components/footer.js'
import { reviews } from './data/reviews.js'

// Initialize components
document.getElementById('header').innerHTML = createHeader()
document.getElementById('hero').innerHTML = createHero()
document.getElementById('review-grid').innerHTML = createReviewGrid(reviews)
document.getElementById('top-ad').innerHTML = createAds('top')
document.getElementById('middle-ad').innerHTML = createAds('middle')
document.getElementById('footer').innerHTML = createFooter()

// Search functionality
const searchInput = document.getElementById('search-input')
const reviewGrid = document.getElementById('review-grid')

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase()
  const filteredReviews = reviews.filter(review => 
    review.title.toLowerCase().includes(searchTerm) ||
    review.genre.toLowerCase().includes(searchTerm) ||
    review.type.toLowerCase().includes(searchTerm)
  )
  reviewGrid.innerHTML = createReviewGrid(filteredReviews)
})

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn')
filterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'))
    // Add active class to clicked button
    e.target.classList.add('active')
    
    const filterType = e.target.dataset.filter
    let filteredReviews = reviews
    
    if (filterType !== 'all') {
      filteredReviews = reviews.filter(review => review.type === filterType)
    }
    
    reviewGrid.innerHTML = createReviewGrid(filteredReviews)
  })
})

// Smooth scrolling for navigation
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

// Initialize AdSense ads after page load
window.addEventListener('load', () => {
  // Initialize AdSense ads
  if (typeof adsbygoogle !== 'undefined') {
    (adsbygoogle = window.adsbygoogle || []).push({})
  }
})