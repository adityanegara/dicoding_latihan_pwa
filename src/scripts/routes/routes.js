import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Like from '../views/pages/like'; 

const routes = {
  '/': Home, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};
 
export default routes;