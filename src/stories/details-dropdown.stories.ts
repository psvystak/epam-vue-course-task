import DetailsDropdown from "../components/DetailsDropdown/index.vue";

const props = {
  id: 2,
};

export default { title: "Details dropdown" };

export const Default = () => ({
  setup() {
    return { props };
  },
  components: { DetailsDropdown },
  template: "<details-dropdown :id='props.id'></details-dropdown>"
});
