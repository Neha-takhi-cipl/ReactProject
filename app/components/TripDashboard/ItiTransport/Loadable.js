/**
 *
 * Asynchronously loads the component for ItiTransport
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
