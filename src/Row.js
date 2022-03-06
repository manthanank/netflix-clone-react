import React, { useState } from 'react'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Row