import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    movies: Array
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}