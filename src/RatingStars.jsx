import { useState } from "react"

const perant = {
    display: "flex",
    alignItems: "center",
    gap: "16px"

}

const starRatingContainer = {
    display: "flex",
    alignItems: "center",
}


export default function RatingStars({ maxRating = 5, size = 45, color = "#fcd73f", setOnRating }) {
    const [Rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <div style={perant}>
            <div style={starRatingContainer}>
                {Array.from({ length: maxRating }, (_, i) => <Star key={i} onRate={() => {
                    setRating(i + 1)
                    setOnRating(i + 1)
                }} full={hover ? hover >= i + 1 : Rating >= i + 1} onhover={() => setHover(i + 1)} unhover={() => setHover(0)} size={size} color={color} />)}
            </div>
            <span style={{ color: color }}>{hover || Rating || ""}</span>
        </div>
    )
}

function Star({ onRate, full, onhover, unhover, size, color }) {
    const stars = {
        width: `${size}px`,
        height: `${size}px`,
        display: "block",
        cursor: "pointer",
        padding: "0"
    }
    return (
        <span role="button" onClick={onRate} onMouseEnter={onhover} onMouseLeave={unhover} style={stars}>
            {full ? (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill={color}
                stroke={color}
            >
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
            </svg>) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke={color}
                >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                </svg>
            )}
        </span >
    )
}



/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR



*/