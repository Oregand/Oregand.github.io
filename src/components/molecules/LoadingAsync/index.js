
import React from 'react'
import Loading from '../Loading'

const LoadingAsync = ({ pastDelay, timedOut }) => {
  return (
    <div>
      <Loading />
      {timedOut ? (
        <span>Timeout</span>
      ) : pastDelay ? (
        <span>Past Delay</span>
      ) : null}
    </div>
  )
}

export default LoadingAsync
