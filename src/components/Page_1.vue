<template>
  <div>
    <div class="form">
      <div class="header">
        <p id="step">STEP1</p>
        <p id="inst">お客様の情報を入力してください</p>
      </div>
      <div class="body">
        <p class="genre">-性別-</p>
        <label>
          <input type="radio" name="gender" value="男性" @change="updateGender">男性
          </label>
        <label><input type="radio" name="gender" value="女性" @change="updateGender">女性
        </label>
        <p class="genre">-生年月日-</p>
        <select name="year" id="id_year" @change="updateYear">
          <option v-for="(year, key) in 2021" :key="key">
            {{ year }}
          </option></select>年
        <select name="month" id="id_month" @change="updateMonth">
          <option v-for="(month, key) in 12" :key="key">
            {{ month }}
          </option></select>月
        <select name="day" id="id_day" @change="updateDay">
          <option v-for="(day, key) in 31" :key="key">
            {{ day }}
          </option></select>日
      </div>
    </div>
    <div class="button-group">
      <router-link to="/page2" class="button">次へ進む ＞</router-link>
    </div>
  </div>
</template>

<script>

export default{
  methods: {
    updateGender(e) {
      this.$store.commit('updateGender', e.target.value)
    },
    updateYear(e) {
      this.$store.commit('updateYear', e.target.value)
    },
    updateMonth (e) {
      this.$store.commit('updateMonth', e.target.value)
    },
    updateDay (e) {
      this.$store.commit('updateDay', e.target.value)
    },
  }
}
</script>