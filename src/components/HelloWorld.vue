<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Whitelabel Version: {{ brand }}</h2>

    <h3>Whitelabel variables</h3>
    <table>
      <thead>
        <tr>
          <td>Variable</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Home URL</td>
          <td>
            <a :href="homeURL">{{ homeURL }}</a>
          </td>
        </tr>
        <tr>
          <td>logo URL</td>
          <td>
            <a :href="logoURL">{{ logoURL }}</a>
          </td>
        </tr>
        <tr>
          <td>Email address</td>
          <td>
            <a :href="'mailto: ' + email">{{ email }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// include whitelabel config
// and specify which whitelabel variation data to use
const appEnv = require('../../env')
const whitelabel = require('../../whitelabel.config')[appEnv.VUE_APP_BRAND]

export default {
  name: 'HelloWorld',
  data() {
    return {
      // set whitelabel brand
      brand: whitelabel.brand,
      // set whitelabel home url
      homeURL: whitelabel.homeURL,
      // set whitelabel logo url
      logoURL: whitelabel.logoURL,
      // set whitelabel email address
      email: whitelabel.contactEmail
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

table {
  margin: auto;
  min-width: 450px;
  max-width: 100%;
}
thead {
  font-weight: bold;
}
</style>
