import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ThePackageSearchForm',
  data () {
    return {
      searchInput: ''
    }
  },
  watch: {
    queryParams: {
      handler () {
        this.searchInput = this.queryParams.text
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      queryParams: 'packages/queryParams'
    })
  },
  created () {
    this.fetchList()
  },
  methods: {
    ...mapActions({
      fetchList: 'packages/GET_LIST'
    }),
    ...mapMutations({
      changeQueryParams: 'packages/CHANGE_QUERY_PARAMS'
    }),
    handleForm () {
      this.changeQueryParams({
        key: 'text',
        value: this.searchInput || ''
      })
      this.fetchList()
    }
  }
}
