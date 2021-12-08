<template>
  <div>
    <h3>Vue_lesson</h3>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <br>
    <div class="check-store">
      <p>以下は確認用</p>
      <p>store内確認</p>
      <div>
        {{ $store.state }}
      </div>
    </div>
  </div>
</template>

<style>
.check-store{
  border-top:solid;
}
</style>