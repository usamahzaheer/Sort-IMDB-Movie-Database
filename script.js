/**
 * DONE: Change sortMovies function to sort movies list by rank
 * DONE: Sort movies by id, rank, and title though dynamic function
 * TODO: Create helper function called getMaxMoviesObject() for finding max movies
 */

// List of movies

let movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "tt0137523",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "tt0111161",
  },
  {
    title: "The Lord of Rings: The Return of the king",
    rank: 9,
    id: "tt0167260",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "tt0068646",
  },
  {
    title: "The Good, the bad and the ugly",
    rank: 5,
    id: "tt0060196",
  },
  {
    title: "The Godfather: Part 2",
    rank: 3,
    id: "tt0071562",
  },
  {
    title: "The Dark Knight",
    rank: 6,
    id: "tt0468569",
  },
  {
    title: "Pulp fiction",
    rank: 4,
    id: "tt0110912",
  },
  {
    title: "Schindler's List",
    rank: 8,
    id: "tt0108052",
  },
  {
    title: "12 Angry Men",
    rank: 7,
    id: "tt0050083",
  },
];



/**
 * Display list of the movies in the table
 * you don't have to worry so much about this
 */

function displayMovies(movies) {
  let table = "<table border='1' style='width: 100%'>";
  table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
  for (let index = 0; index < movies.length; index++) {
    table += "<tr>";
    table += "<td>" + movies[index].id + "</td>";
    table += "<td>" + movies[index].title + "</td>";
    table += "<td>" + movies[index].rank + "</td>";
    table += "</tr>";
  }
  // Close the table
  table += "</table>";
  document.getElementById("movies-list").innerHTML = table;
}

// function sortBestMovies(movies){

// }

function sortMoviesByAttr(movies, sortAttr){
    // sortBestRatingsFirst([5, 8, 2, 9, 3, 10])
    // know maximum and it's index
    for(let j =0; j < movies.length - 1; j++)
    {
        // find max
        max_obj = movies[j];
        max_location = j;
       for(let i = j; i < movies.length; i++)
       {
           if(movies[i][sortAttr] > max_obj[sortAttr]){
               max_obj = movies[i];
               max_location = i;
           }
       }
        // swap first and the last
        movies[max_location] = movies[j]    
        movies[j] = max_obj;
    }
        return movies
}
window.onload = function () {
    let sortedMovies = sortMoviesByAttr(movies, 'title')
  // Display Movies list
  displayMovies(sortedMovies);
};

