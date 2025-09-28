export const reviews = [
  {
    id: 1,
    title: "The Batman",
    type: "movie",
    genre: "Action, Crime, Drama",
    rating: 4.5,
    year: 2022,
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "A gripping and dark take on the Dark Knight that showcases Robert Pattinson's incredible performance. The cinematography and atmosphere create a noir masterpiece that redefines Batman for a new generation.",
    director: "Matt Reeves",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Stranger Things",
    type: "series",
    genre: "Sci-Fi, Horror, Drama",
    rating: 4.8,
    year: 2022,
    image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "The fourth season delivers exceptional storytelling with higher stakes than ever. The Upside Down becomes more terrifying while character development reaches new heights. A perfect blend of nostalgia and innovation.",
    director: "The Duffer Brothers",
    date: "2024-01-12"
  },
  {
    id: 3,
    title: "Attack on Titan",
    type: "anime",
    genre: "Action, Drama, Fantasy",
    rating: 4.9,
    year: 2023,
    image: "https://images.pexels.com/photos/7991464/pexels-photo-7991464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "The final season concludes this epic saga with breathtaking animation and emotional depth. Every episode is a masterclass in storytelling, delivering shocking revelations and unforgettable moments.",
    director: "Hajime Isayama",
    date: "2024-01-10"
  },
  {
    id: 4,
    title: "Top Gun: Maverick",
    type: "movie",
    genre: "Action, Drama",
    rating: 4.7,
    year: 2022,
    image: "https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "Tom Cruise returns with spectacular aerial sequences and genuine emotional weight. This sequel respects its predecessor while delivering modern thrills that will leave you breathless.",
    director: "Joseph Kosinski",
    date: "2024-01-08"
  },
  {
    id: 5,
    title: "House of the Dragon",
    type: "series",
    genre: "Fantasy, Drama, Action",
    rating: 4.3,
    year: 2022,
    image: "https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "A worthy successor to Game of Thrones that brings back the political intrigue and dragon-filled spectacle. The Targaryen civil war is beautifully crafted with stunning visuals and complex characters.",
    director: "Ryan Condal",
    date: "2024-01-05"
  },
  {
    id: 6,
    title: "Demon Slayer: Mugen Train",
    type: "anime",
    genre: "Action, Supernatural, Drama",
    rating: 4.6,
    year: 2021,
    image: "https://images.pexels.com/photos/7991465/pexels-photo-7991465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "Visually stunning animation combined with emotional storytelling creates an unforgettable experience. The fight sequences are choreographed to perfection, making this a must-watch for anime fans.",
    director: "Haruo Sotozaki",
    date: "2024-01-03"
  },
  {
    id: 7,
    title: "Dune",
    type: "movie",
    genre: "Sci-Fi, Adventure, Drama",
    rating: 4.4,
    year: 2021,
    image: "https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "Denis Villeneuve crafts a visually spectacular adaptation that honors Frank Herbert's masterpiece. The world-building is immersive, and the performances are outstanding across the board.",
    director: "Denis Villeneuve",
    date: "2024-01-01"
  },
  {
    id: 8,
    title: "The Witcher",
    type: "series",
    genre: "Fantasy, Action, Adventure",
    rating: 4.2,
    year: 2023,
    image: "https://images.pexels.com/photos/7991227/pexels-photo-7991227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    excerpt: "Henry Cavill's final season as Geralt delivers epic battles and emotional farewells. The monster hunting and political intrigue create a perfect fantasy experience that fans will treasure.",
    director: "Lauren Schmidt Hissrich",
    date: "2023-12-28"
  }
];

// Easy way to add new reviews - just add objects to this array following the same format
// Required fields: id, title, type (movie/series/anime), genre, rating (0-5), year, image, excerpt, director, date