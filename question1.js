//3rd

class Movie {
    constructor(title, rating) {
      this.title = title;
      this.rating = rating;
    }
  }
  
  function getPG(movies) {
    const pgMovies = movies.filter(movie => movie.rating === "PG");
    return pgMovies;
  }
  
  const allMovies = [
    new Movie("Robert", "PG"),
    new Movie("johnwick", "R"),
    new Movie("vampire", "PG"),
  ];
  
  const pgMovies = getPG(allMovies);
  
  pgMovies.forEach(movie => {
    console.log(`${movie.title} - ${movie.rating}`);
  });




  // 4th

  class Movie
  {
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getdetails()
    {
        console.log(
       `The movie is : ${this.title}
Studio is : ${this.studio}
Rating of the movie ${this.title} is ${this.rating}`);
    }
    
  }
  

  var a=new Movie("Casino Royale","Eon Productions","PG13");
  a.getdetails();