import React from 'react'
import "../styles/HomePage.css"

function HomePage() {
    // internal css
    const headingStyle = {backgroundColor: "black"}
    return (
        <div id='homepage'>
            {/* Inline CSS */}
            <h1 style={{...headingStyle, padding: "50px"}}> Hello from HomePage.... </h1>
        </div>
    )
}

export default HomePage
