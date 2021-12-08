<template>
  <div>
    <div class="form">
      <div class="header">
      <p id="step">STEP3</p>
      <p id="inst">ご相談内容をご記入ください</p>
      </div>
      <div class="body">
        <p class="genre">-ご相談内容-</p>
        <textarea @input="updateConsultation"></textarea>
        <div class="button-group">
          <router-link to="/page2" class="button">＜ 前へ戻る</router-link>
          <router-link to="/page4" class="button">次へ進む ＞</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateConsultation (e) {
      this.$store.commit('updateConsultation', e.target.value)
    },
  }
}
</script>

<style>
textarea {
  margin-left: 5px;
    padding: 10px;
    width: 90%;
    height: 15em;
    line-height: 1;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}
</style>