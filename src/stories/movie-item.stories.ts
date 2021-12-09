import MovieItem from "../components/MovieItem/index.vue";
import img from "../assets/images/img2.jpg";
import { action } from "@storybook/addon-actions";

let props = {
  id: 1,
  poster_path: img,
  title: "Pulp Fiction",
  genres: [
    "Action",
    "Adventure",
    "Science Fiction"
  ],
  release_date: "2020-05-01"
};

export default { title: "Movie item" };

export const Default = () => ({
  setup() {
    return { props };
  },
  components: { MovieItem },
  template: "<movie-item :movie='props' @click='action'></movie-item>",
  methods: { action: action("clicked") }
});
