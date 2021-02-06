const movies = [
    {
        _id: "1",
        title: "Terminator",
        genre: { _id: 1, name: "Acrion" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03",
        liked: true
    },
    {
        _id: "2",
        title: "Die Hard",
        genre: { _id: 2, name: "Acrion" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2017-05-22",
        liked: false
    },
    {
        _id: "3",
        title: "The Vigil",
        genre: { _id: 3, name: "Acrion" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2020-12-06",
        liked:false
    },
    {
        _id: "4",
        title: "Gone Girl",
        genre: { _id: 4, name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        publishDate: "2019-04-28",
        liked: true
    }
];

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m => m._id === id);
}

