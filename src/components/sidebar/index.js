export default {
  name: 'home',
  data () {
    return {
      items: [
        {
          action: 'mdi-bookshelf',
          title: 'Courses',
          to: 'courses'
        },
        {
          action: 'mdi-home-edit',
          title: 'Home works',
          to: 'home-works'
        }
      ]
    }
  }
}
