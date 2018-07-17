import auth from '../../components/templates/Auth'
import { checkSession } from '../../components/templates/Auth/utils'

function has401Status(error) {
  return error.status === 401 || (error.response || {}).status === 401
}

export default function(action$, store) {
  return action$
    .filter(action => action.error && has401Status(action.error))
    .filter(() => !checkSession())
    .do(() => auth.logout())
    .mapTo({ type: 0 /* We just want to call logout on the auth class */ })
}
