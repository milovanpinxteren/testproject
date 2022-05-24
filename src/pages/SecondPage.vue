<template>
  <h1>Pagina 2</h1>
  <img style="max-height: 100px" alt="logo" src="../assets/psv_logo.png">
  <HelloWorld :msg="greeting"/>
  <NumberCounter/>
  <InputModel/>
  <DataFetcher/>
</template>

<script>

import NumberCounter from "@/components/NumberCounter";
import HelloWorld from "@/components/HelloWorld";
import InputModel from "@/components/InputModel";
import DataFetcher from "@/components/DataFetcher";

export default {
  components: {
    NumberCounter,
    HelloWorld,
    InputModel,
    DataFetcher,
  },
}
</script>

<style scoped>

</style>