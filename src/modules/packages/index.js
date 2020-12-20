import ThePackageSearchForm from '@/components/the-package-search-form/index.vue'
import ThePackageListItem from '@/components/the-package-list-item/index.vue'
import TheEmptyData from '@/components/the-empty-data/index.vue'
import TheIntroView from '@/components/the-intro-view/index.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Packages',
  data () {
    return {
      page: 0
    }
  },
  components: {
    ThePackageSearchForm,
    ThePackageListItem,
    TheIntroView,
    TheEmptyData
  },
  computed: {
    ...mapGetters({
      list: 'packages/list',
      totalListLength: 'packages/totalListLength',
      isListLoading: 'packages/isListLoading',
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
    handlePagination (index) {
      this.changeQueryParams({
        key: 'from',
        value: this.queryParams.size * (index - 1)
      })
      this.$vuetify.goTo(0)
      this.fetchList()
    }
  }
}
