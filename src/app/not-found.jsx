import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2> 404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go to Homepage</Link>
    </div>
  )
}

export default NotFound