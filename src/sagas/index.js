import * as adminSaga from './admin';

const sagas = {
//   ...adminSaga,
};

export function registerWithMiddleware (middleware) {
  for (let name in sagas) {
    middleware.run(sagas[ name ]);
  }
}
