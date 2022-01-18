<template>
  <div>
    <div id="rete" class="node-editor"></div>
    <SideBar @saveChanges="onSaveChanges()" :saveDisabled="saveDisabled"/>
  </div>
</template>

<script src="./IvrEditor.js" >
</script>

<style lang="scss">
@import "./IvrEditor.scss";
</style>