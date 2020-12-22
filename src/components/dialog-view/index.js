export default {
  name: 'dialog-view',
  props: {
    show: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    title: {
      type: String
    }
  },
  data () {
    return {
      dialog: true
    }
  },
  watch: {
    show () {
      this.dialog = this.show
    }
  },
  methods: {
    closeDialog () {
      this.dialog = false
      setTimeout(() => {
        this.$emit('close-dialog')
      }, 500)
    }
  }
}
