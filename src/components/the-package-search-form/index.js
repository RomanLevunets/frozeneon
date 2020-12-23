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
    this.setDefaultQuery()
    if (this.queryParams.text.length || this.searchInput.length) {
      this.fetchList()
    }
  },
  methods: {
    ...mapActions({
      fetchList: 'packages/GET_LIST'
    }),
    ...mapMutations({
      changeQueryParams: 'packages/CHANGE_QUERY_PARAMS',
      setCurrentItem: 'packages/SET_ITEM',
      setList: 'packages/SET_LIST'
    }),
    handleForm () {
      this.changeQueryParams({
        key: 'text',
        value: this.searchInput || ''
      })
      this.changeQueryParams({
        key: 'from',
        value: 0
      })

      // check empty string
      if (!this.searchInput) {
        this.$router.replace({
          name: 'Home',
          query: {}
        })
        this.setList()
        return false
      }

      // compare input search and $route.query values
      if (this.searchInput === this.$route.query.q) {
        return false
      }
      this.updateQueryUrl()
      this.fetchList()
    },
    setDefaultQuery () {
      // eslint-disable-next-line no-prototype-builtins
      if (this.$route.query.hasOwnProperty('q')) {
        this.changeQueryParams({
          key: 'text',
          value: this.$route.query.q
        })
        this.updateQueryUrl()
      }
    },
    updateQueryUrl () {
      if (this.queryParams.text !== this.$route.query.q) {
        this.$router.replace({
          name: 'Home',
          query: { q: this.queryParams.text }
        })
      }
    }
  },
  destroyed () {
    this.setCurrentItem(null)
  }
}
