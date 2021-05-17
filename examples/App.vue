<template>
  <div id="app">
    <div class="container">
      <h1>Vue Count Up</h1>
      <h3>simple example</h3>
      <code>
        &lt;vue-count-up :end-val=&quot;123456&quot; /&gt;
      </code>
      <br>
      <div>
        <vue-count-up :end-val="123456" class="my-vue-count-up" />
      </div>
      <br>
      <h3>delay example</h3>
      <div>
        <code>
          &lt;vue-count-up :end-val=&quot;654321&quot; :delay=&quot;1500&quot; /&gt;
        </code>
      </div>
      <br>
      <div>
        <vue-count-up :end-val="654321" :delay="1500" class="my-vue-count-up" />
      </div>
      <br>
      <h3>custom example</h3>
      <code>
        &lt;vue-count-up :start-val=&quot;0&quot; :end-val=&quot;123456&quot; :autoplay=&quot;false&quot; /&gt;
      </code>
      <br>
      <div>
        <vue-count-up ref="example" :start-val="startVal" :end-val="endVal" :autoplay="autoplay" class="my-vue-count-up" />
      </div>
      <br>
      <div>
        <label class="label" for="startValInput">startVal:  <input type="number" v-model.number='startVal' name='startValInput' /></label>
        <label class="label" for="endValInput">endVal:  <input type="number" v-model.number='endVal' name='endVaInput' /></label>
      </div>
      <br>
      <div>
        <div class="example-btn" @click='startClick'>start</div>
        <div class="example-btn" @click='pauseResumeClick'>pause/resume</div>
        <div class="example-btn" @click='randomEndValClick'>random end val</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCountUp from '../packages'

export default {
  name: 'App',
  components: {
    VueCountUp
  },
  data () {
    return {
      startVal: 0,
      endVal: 123789,
      autoplay: false
    }
  },
  methods: {
    startClick () {
      this.$refs.example.reset()
      this.$refs.example.start()
    },
    pauseResumeClick () {
      this.$refs.example.pauseResume()
    },
    randomEndValClick () {
      this.endVal = Math.floor(Math.random() * 100000)
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

code {
  display: block;
  padding: 8px 15px;
  background-color: #f6f8fa;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  overflow-x: auto;
  font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal;
  color: #333;
  font-size: 12px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  width: 960px;
  margin: 0 auto;
}

h1 {
  font-size: 60px;
  margin: 30px 0;
  color: #70b7fd;
}

.my-vue-count-up {
  font-size: 40px;
  color: #70b7fd;
}

.label {
  color: #2f4f4f;
  font-size: 16px;
  display: inline-block;
  margin: 15px 30px 15px 0;
}

input {
  position: relative;
  display: inline-block;
  padding: 4px 7px;
  width: 100px;
  height: 28px;
  cursor: text;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(0, 0, 0, .65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.example-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  line-height: 1.5;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  position: relative;
  color: rgba(0, 0, 0, .65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  margin-right: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
