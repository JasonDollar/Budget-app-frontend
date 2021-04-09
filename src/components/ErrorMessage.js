import React from 'react'

const ErrorMessage = ({ error }) => {
  if (error.errorData) {
    return (
      <div>
        <p>{error.errorData.message}</p>
      </div>
    )
  }
  if (error.message) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div>
      An error occured
    </div>
  )
}

export default ErrorMessage
