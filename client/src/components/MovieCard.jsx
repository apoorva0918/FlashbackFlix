import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'
import { useAppContext } from '../context/AppContext'

const MovieCard = ({movie}) => {

    const navigate = useNavigate()
    const {image_base_url} = useAppContext()

  return (
    <div className="flex flex-col p-3 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:-translate-y-1 transition duration-300 w-64 h-[290px]">

  {/* IMAGE */}
  <img
    onClick={() => {
      navigate(`/movies/${movie._id}`);
      scrollTo(0, 0);
    }}
    src={image_base_url + movie.backdrop_path}
    alt={movie.title}
    className="rounded-lg h-40 w-full object-cover object-center cursor-pointer"
  />

  {/* TITLE */}
  <p className="font-semibold mt-3 text-white text-sm truncate">
    {movie.title}
  </p>

  {/* META INFO */}
  <p className="text-xs text-gray-400 mt-1">
    {new Date(movie.release_date).getFullYear()} • {movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")} • {timeFormat(movie.runtime)}
  </p>

  {/* BUTTON + RATING */}
  <div className="flex items-center justify-between mt-auto pt-4">
    <button
      onClick={() => {
        navigate(`/movies/${movie._id}`);
        scrollTo(0, 0);
      }}
      className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
    >
      Buy Tickets
    </button>

    <p className="flex items-center gap-1 text-sm text-gray-400 pr-1">
      <StarIcon className="w-4 h-4 text-primary fill-primary" />
      {movie.vote_average.toFixed(1)}
    </p>
  </div>

</div>
  )
}

export default MovieCard
