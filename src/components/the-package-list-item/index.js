import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ThePackageListItem',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      queryParams: 'packages/queryParams'
    })
  },
  methods: {
    ...mapActions({
      fetchList: 'packages/GET_LIST'
    }),
    ...mapMutations({
      changeQueryParams: 'packages/CHANGE_QUERY_PARAMS'
    }),
    handleTag (item) {
      this.changeQueryParams({
        key: 'text',
        value: `keywords:${item}`
      })
      this.$vuetify.goTo(0)
      this.fetchList()
      // replace url query
      if (this.queryParams.text !== this.$route.query.q) {
        this.$router.replace({
          name: 'Home',
          query: { q: this.queryParams.text }
        })
      }
    }
  }
}
