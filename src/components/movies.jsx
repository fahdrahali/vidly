import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {


    state = { 
        movies : getMovies(),
        liked : false
     }



    render() { 

      if (this.state.movies.length === 0)
      return 'There are not movies'
    
        return ( 
            <div className="my-4">
                
            <h3> Showing  { this.state.movies.length } 
            movies in the database </h3>
    
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col"></th>
    </tr>
  </thead>

  <tbody>
  {this.state.movies.map( movie =>
            <tr key={movie._id}>
                <td>{ movie.title }</td>
                <td>{ movie.genre.name }</td>
                <td>{ movie.numberInStock }</td>
                <td>{ movie.dailyRentalRate}</td>
                <td><button className="btn btn-danger" onClick={()=> this.deleteMovie(movie)}>Delete</button></td>
            </tr>)} 
  </tbody>
  
</table>
</div>
            
            );        
    }


   deleteMovie(movie){
    const newMovies =  this.state.movies.filter(m => m !== movie);
    this.setState({movies : newMovies})
   }
   

}
 
export default Movies;