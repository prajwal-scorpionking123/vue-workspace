<template>
<div>
  <div class="locale-switcher">🌐 {{$i18n.locale}}</div>

    <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="mr">Marathi</option>
      <option value="ar">Arabic</option>
    </select>
  </div>
</div>
  
</template>
<script>

export default {

}
</script>
