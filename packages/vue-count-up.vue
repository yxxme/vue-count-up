<script>
import { CountUp } from 'countup.js'

export default {
  name: 'VueCountUp',
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      required: false
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      instance: null
    }
  },
  watch: {
    endVal (value) {
      if (this.instance) {
        this.instance.update(value)
      }
    }
  },
  mounted () {
    this.create()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    create () {
      const _this = this
      if (_this.instance) {
        return
      }
      const options = Object.assign({}, { startVal: _this.startVal }, _this.options || {})
      const instance = new CountUp(
        _this.$el,
        _this.endVal,
        options
      )
      if (instance.error) {
        return
      }
      _this.instance = instance
      this.$emit('ready', instance, CountUp)
      if (!_this.autoplay) {
        return
      }
      const _timer = setTimeout(() => {
        _this.start()
        clearTimeout(_timer)
      }, _this.delay)
    },
    start (callback) {
      this.instance && this.instance.start(callback)
    },
    pauseResume () {
      this.instance && this.instance.pauseResume()
    },
    reset () {
      this.instance && this.instance.reset()
    },
    update (newEndVal) {
      this.instance && this.instance.update(newEndVal)
    },
    destroy () {
      this.instance = null
    }
  },
  render (createElement) {
    return createElement('span', {
      attrs: {
        class: 'vue-count-up'
      }
    })
  }
}
</script>
