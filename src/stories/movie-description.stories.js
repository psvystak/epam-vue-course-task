import MovieDescription from "../components/MovieDescription/index.vue";
import img from "../assets/images/img2.jpg";

const props = {
  id: 1,
  poster_path: img,
  title: "Pulp Fiction",
  genres: [
    "Action",
    "Adventure"
  ],
  release_date: "1994-05-01",
  vote_count: 8.9,
  overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
};

export default { title: "Movie description" };

export const Default = () => ({
  setup() {
    return { props };
  },
  components: { MovieDescription },
  template: "<movie-description :movie='props'></movie-description>",
});
