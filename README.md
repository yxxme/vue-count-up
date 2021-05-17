# vue-count-up

> vue-count-up is a vue component wrap for [countUp.js](https://github.com/inorganik/countUp.js)

## How to use?

### Install

```bash
npm install @yxxme/vue-count-up --save
```

### Example

```vue
<template>
  <count-up :endVal='endVal' />
</template>

<script>
  import CountUp from '@yxxme/vue-count-up';
  export default {
    components: { CountUp },
    data () {
      return {
        endVal: 654321
      }
    }
  }
</script>
```

### Properties

* `endVal: Number` - the value you want to arrive at.

* `startVal?: Number` - the value you want to begin at.

* `autoplay?: Boolean` - when mounted autoplay.

* `delay?: Number` - when autoplay is **true**, this value represents how long to wait before starting.

* `options?: Object` - other options, see more [countUp.js](https://github.com/inorganik/countUp.js).

### Methods

* `start`
* `pauseResume`
* `reset`
* `update`

See more [countUp.js](https://github.com/inorganik/countUp.js)

## License

MIT

