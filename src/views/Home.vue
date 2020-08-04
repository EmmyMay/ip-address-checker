<template>
  <div class="home bg-ash shadow-md rounded px-8 pt-6 pb-8 mb-4 h-auto">
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">URL</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter a Url"
          v-model="data.url"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="submitURL"
        >GO</button>
      </div>
    </form>
    <div v-if="data.searching" class="lds-hourglass"></div>
    <div v-if="data.siteInfo != null" class="result mt-5">
      <p class="result-text mb-5">The IP Address for</p>
      <p class="url">{{data.siteInfo.url}}</p>
      <p class="result-text mt-3 mb-3">is</p>
      <p class="urlData">{{data.siteInfo.urlData}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  setup() {
    const data = reactive({
      siteInfo: null,
      searching: false,
      url: "",
    });

    function submitURL() {
      data.searching = true;
      this.$store.dispatch("fetchIP", { url: data.url }).then(() => {
        this.data.siteInfo = this.getdnsdata;
        data.searching = false;
      });
    }

    // expose to template
    return {
      data,
      submitURL,
    };
  },
  computed: {
    ...mapGetters(["getdnsdata"]),
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.url {
  background-color: rgb(11, 141, 216);
  padding: 0.5rem;
  font-family: "Fredoka One", cursive;
  color: black;
  font-size: 1rem;
}
.urlData {
  background-color: rgb(209, 18, 136);
  padding: 0.1rem;
  font-size: 2rem;
  font-family: "Fredoka One", cursive;
  color: black;
}
.result-text {
  font-family: "Pacifico", cursive;
  color: black;
  font-size: 1.4rem;
}
@media only screen and (min-width: 700px) {
  .urlData {
    width: 40%;
    margin: 0 auto;
  }
  .url {
    width: 40%;
    margin: 0 auto;
  }
  .result {
    display: flex;
    flex-direction: column;
  }
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid rgb(11, 141, 216);
  border-color: rgb(11, 141, 216) transparent rgb(11, 141, 216) transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
