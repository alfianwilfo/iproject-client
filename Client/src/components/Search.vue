<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "speech_to_text",
  data() {
    return {
      runtimeTranscription_: "",
      lang_: "en-EN",
    };
  },
  methods: {
    startSpeechToTxt() {
      // initialisation of voicereco

      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;

      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        recognition.stop();
      });
      recognition.start();
    },
    ...mapActions(useCounterStore, ["getCountries"]),
    searchName() {
      this.getCountries(this.runtimeTranscription_);
    },
  },
};
</script>

<template>
  <input
    v-model="runtimeTranscription_"
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-last-name"
    type="text"
    placeholder="Doe"
  />
  <div class="voice">
    <div class="speech-to-txt" @click="startSpeechToTxt">Talk</div>
    <button class="bg-[#006E7F]" @click.prevent="searchName">Search</button>
  </div>
</template>
