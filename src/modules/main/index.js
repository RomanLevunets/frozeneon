import { mapGetters } from 'vuex'
import Dashboard from '@/modules/dashboard/index.vue'

export default {
  name: 'Main',
  watch: {
    error: {
      handler (item) {
        if (item.show) {
          this.$toasted.error(item.message)
        }
      },
      deep: true
    }
  },
  components: {
    Dashboard
  },
  computed: {
    ...mapGetters({
      error: 'system/error',
      isLoading: 'packages/isListLoading'
    })
  },
  created () {
    if (localStorage.getItem('isDarkTheme')) {
      this.$vuetify.theme.dark = localStorage.getItem('isDarkTheme') === '1'
    } else {
      localStorage.setItem('isDarkTheme', '0')
      this.$vuetify.theme.dark = false
    }
  },
  methods: {
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      if (this.$vuetify.theme.dark) {
        localStorage.setItem('isDarkTheme', '1')
      } else {
        localStorage.setItem('isDarkTheme', '0')
      }
    }
  }
}
