import axios from "axios";
import Movie from "../models/Movie.js";
import Show from "../models/Show.js";
import https from "https";

// ✅ 1. Get Old Romantic Hindi Movies (up to 1985)
export const getNowPlayingMovies = async (req, res) => {
  try {
    const agent = new https.Agent({ keepAlive: false });

    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          sort_by: "popularity.desc",
          "primary_release_date.lte": "1985-12-31", // 1985 tak ki movies
          with_genres: "10749", // romance
          with_original_language: "hi", // Hindi
          page: 1,
        },
        // httpsAgent: agent,
        timeout: 5000,
      }
    );

    res.json({ success: true, movies: data.results });
  } catch (error) {
      console.error("Add Show ERROR:", error); // <-- Yeh line likho
      res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ 2. Add Shows
export const addShow = async (req, res) => {
  try {
    const { movieId, showsInput, showPrice } = req.body;

    let movie = await Movie.findById(movieId);

    if (!movie) {
      const agent = new https.Agent({ keepAlive: false });

      const movieDetailsResponse = await 
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: process.env.TMDB_API_KEY
          },
          // httpsAgent: agent,
          timeout: 5000,
        })

        const movieCreditsresponse= await 
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          params: {
            api_key: process.env.TMDB_API_KEY,
          },
          // httpsAgent: agent,
          timeout: 5000,
        });

        
      const movieApiData = movieDetailsResponse.data;
      const movieCreditsdata = movieCreditsresponse.data;

      const movieDetails = {
        _id: movieId,
        title: movieApiData.title,
        overview: movieApiData.overview,
        poster_path: movieApiData.poster_path,
        backdrop_path: movieApiData.backdrop_path,
        genres: movieApiData.genres,
        casts: movieCreditsdata.cast,
        release_date: movieApiData.release_date,
        original_language: movieApiData.original_language,
        tagline: movieApiData.tagline || "",
        vote_average: movieApiData.vote_average,
        runtime: movieApiData.runtime,
      };

      movie = await Movie.create(movieDetails);
    }

    const showsToCreate = [];
    showsInput.forEach((show) => {
      const showDate = show.date;
      show.time.forEach((time) => {
        const dateTimeString = `${showDate}T${time}`;
        showsToCreate.push({
          movie: movieId,
          showDateTime: new Date(dateTimeString),
          showPrice,
          occupiedSeats: {},
        });
      });
    });

    if (showsToCreate.length > 0) {
      await Show.insertMany(showsToCreate);
    }

    res.json({ success: true, message: "Show added successfully." });
  } catch (error) {
      console.error("Add Show ERROR:", error); // <-- Yeh line likho
      res.status(500).json({ success: false, message: error.message });
  }
}

export const getShows= async(req,res) => {
    try{
        const shows= await Show.find({showDateTime: {$gte: new Date()}}).populate('movie').sort({showDateTime: 1});

        const uniqueShows= new Set(shows.map(show=> show.movie))
        res.json({success:true, shows:Array.from(uniqueShows)})
    } catch(error){
        console.error("Add Show ERROR:", error); // <-- Yeh line likho
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getShow= async(req,res) =>{
    try{
        const {movieId}=req.params;
        const shows=await Show.find({movie: movieId, showDateTime: {$gte: new Date()}})

        const movie= await Movie.findById(movieId);
        const dateTime= {};

        shows.forEach((show)=> {
            const date= show.showDateTime.toISOString().split("T")[0];
            if(!dateTime[date]){
                dateTime[date]=[]
            }
            dateTime[date].push({time: show.showDateTime, showId:show._id})
        })
        res.json({success:true, movie, dateTime})
    } catch (error){
        console.error("Add Show ERROR:", error); // <-- Yeh line likho
        res.status(500).json({ success: false, message: error.message });
    }
}