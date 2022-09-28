import IndexGenres from "./Genres/IndexGenres";
import LandingPage from "./Movies/LandingPage";

const routes = [
    {path: 'genres', component: IndexGenres},
    {path:'/', compoment:LandingPage}
];
export default routes;