import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'ThePackageListItem',
  props: {
    item: {
      type: Object
    }
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
    }
  }
}
