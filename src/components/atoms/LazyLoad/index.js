import Loadable from 'react-loadable'
import LoadingAsync from '../../molecules/LoadingAsync'

// Wrapper for Loadable to avoid specifying 'loading' component
const LazyLoad = opts => {
  return Loadable({
    loading: LoadingAsync,
    ...opts
  })
}

export default LazyLoad
