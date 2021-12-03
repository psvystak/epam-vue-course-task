import MovieItem from "../components/MovieItem.vue";
import img from "../assets/images/img2.jpg";
import { action } from "@storybook/addon-actions";

let props = {
  img: img,
  name: "Pulp fiction",
  genre: "Action & Adventure",
  year: 2004,
};

export default { title: "Movie item 2" };

export const Default = () => ({
  setup() {
    return { props };
  },
  components: { MovieItem },
  template: "<movie-item :movie='props' @click='action'></movie-item>",
  methods: { action: action("clicked") },
});
