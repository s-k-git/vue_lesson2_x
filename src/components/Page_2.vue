<template>
  <div class="form">
    <div class="header">
      <p id="step">STEP2</p>
      <p id="inst">お客様の情報を入力してください</p>
    </div>
    <div class="body">
    <p class="genre">-現在、生命保険に加入されていますか？-<p>
    <label><input type="radio" name="insurance" value="はい(加入中)" id="q1y" @click="nextq" @change="updateQ1">はい</label>
    <label><input type="radio" name="insurance" value="いいえ(未加入)" id="q1n" @click="nextq" @change="updateQ1">いいえ</label>
    <p></p>
    <div class="q2" id="q2">
    <p class=genre>-現在、入院中ですか。または、最近３ヶ月以内に医師の診療・検査の結果、入院・手術を勧められたことはありますか？-</p>
    <label><input type="radio" name="hospital" value="はい" id="q2y" @click="nextq" @change="updateQ2">はい</label>
    <label><input type="radio" name="hospital" value="いいえ" id="q2n" @click="nextq" @change="updateQ2">いいえ</label>
    </div>
    <p></p>
    <div class="q3" id="q3">
    <p class="genre">-過去5年以内に病気やけがで手術をうけたことまたは継続して7日以上の入院したことがありますか？-</p>
    <label><input type="radio" name="hospitalization" value="はい" @change="updateQ3">はい</label>
    <label><input type="radio" name="hospitalization" value="いいえ" @change="updateQ3">いいえ</label>
    </div>
    <p></p>
      <div class="button-group">
        <router-link to="/page1" class="button">＜ 前へ戻る</router-link>
        <router-link to="/page3" class="button">次へ進む ＞</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextq() {
      if(document.getElementById("q1y").checked || document.getElementById("q1n").checked){
      document.getElementById("q2").style.display = "block";
        if (document.getElementById("q2y").checked || document.getElementById("q2n").checked){
        document.getElementById("q3").style.display = "block";
        }
      }
    },
    updateQ1(e) {
      this.$store.commit('updateQ1', e.target.value)
    },
    updateQ2(e) {
      this.$store.commit('updateQ2', e.target.value)
    },
    updateQ3 (e) {
      this.$store.commit('updateQ3', e.target.value)
    },
  }
};
</script>

<style>
.q2,.q3{
display: none;
}
</style>