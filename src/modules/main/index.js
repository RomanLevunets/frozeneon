import { mapGetters } from 'vuex'
import TheMainSidebar from '@/components/sidebar/index.vue'

export default {
  name: 'Main',
  data () {
    return {
      drawer: true,
      miniVariant: false
    }
  },
  components: {
    TheMainSidebar
  },
  watch: {
    error: {
      handler (item) {
        if (item.show) {
          this.$toasted.error(this.$t(item.message))
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      error: 'system/error'
    }),
    ...mapGetters([
      'languages',
      'currentLanguage'
    ])
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