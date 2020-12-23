import ThePackageSearchForm from '@/components/the-package-search-form/index.vue'
import ThePackageListItem from '@/components/the-package-list-item/index.vue'
import TheEmptyData from '@/components/the-empty-data/index.vue'
import TheIntroView from '@/components/the-intro-view/index.vue'
import DialogView from '@/components/dialog-view/index.vue'

import VueMarkdown from 'vue-markdown'

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Packages',
  data () {
    return {
      page: 0,
      showDialogView: false,
      windowWith: 0
    }
  },
  components: {
    ThePackageSearchForm,
    ThePackageListItem,
    TheIntroView,
    TheEmptyData,
    DialogView,
    VueMarkdown
  },
  watch: {
    'queryParams.from' () {
      if (this.list.length) {
        if (!this.queryParams.from) {
          this.page = 0
        }
      }
    }
  },
  created () {
    this.setCurrentItem(null)
  },
  mounted () {
    this.windowWith = window.innerWidth
  },
  computed: {
    ...mapGetters({
      list: 'packages/list',
      totalListLength: 'packages/totalListLength',
      isListLoading: 'packages/isListLoading',
      isLoading: 'packages/isLoading',
      currentItem: 'packages/currentItem',
      packageMetadata: 'packages/packageMetadata',
      packageGithub: 'packages/packageGithub',
      queryParams: 'packages/queryParams'
    })
  },
  methods: {
    ...mapActions({
      fetchList: 'packages/GET_LIST',
      fetchPackage: 'packages/GET_ITEM'
    }),
    ...mapMutations({
      changeQueryParams: 'packages/CHANGE_QUERY_PARAMS',
      setCurrentItem: 'packages/SET_ITEM'
    }),
    handlePagination (index) {
      this.changeQueryParams({
        key: 'from',
        value: this.queryParams.size * (index - 1)
      })
      this.$vuetify.goTo(0)
      this.fetchList()
    },
    showDialogDetail (item) {
      this.showDialogView = true
      this.fetchPackage({ packageName: item.package.name })
    }
  }
}
