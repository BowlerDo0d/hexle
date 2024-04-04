<script lang="ts">
import { defineComponent } from 'vue';

const MAX_LEN = 6;
let targetColor = 'FFFFFF';

export default defineComponent({
  data() {
    return {
      hexInputs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'],
      result: '',
      targetColor, // eventually, this should not be here
      userGuesses: ['']
    };
  },
  methods: {
    enterValue(value: number | string) {
      const activeIdx = this.userGuesses.length - 1;

      if (this.userGuesses[activeIdx].length < MAX_LEN) {
        this.userGuesses[activeIdx] = `${this.userGuesses[activeIdx]}${value}`;
      }
    },
    onGuessEntered() {
      this.validateGuess();
    },
    validateGuess() {
      // Add classes
    }
  }
});
</script>

<template>
  <h1>Hexle <span>Color</span></h1>

  <div>
    Target color:
    <span>
      {{ targetColor }}
    </span>
  </div>

  <form novalidate @submit.prevent="onGuessEntered()">
    <div class="guesses" v-for="userGuess in userGuesses" :key="userGuess">
      <span class="guess">#</span>
      <span class="guess">{{ userGuess[0] }}</span>
      <span class="guess">{{ userGuess[1] }}</span>
      <span class="guess">{{ userGuess[2] }}</span>
      <span class="guess">{{ userGuess[3] }}</span>
      <span class="guess">{{ userGuess[4] }}</span>
      <span class="guess">{{ userGuess[5] }}</span>
    </div>

    <div class="keyboard">
      <button
        type="button"
        v-for="hex in hexInputs"
        :key="hex"
        @click="enterValue(hex)"
      >
        {{ hex }}
      </button>
      <button type="submit">Guess!</button>
    </div>
  </form>

  <p>{{ result }}</p>
</template>

<style scoped>
div {
  margin-bottom: 1rem;
}

.guesses {
  display: flex;
}

.guess:first-of-type {
  border: none;
}

.guess {
  border: 1px solid gray;
  width: 25px;
  height: 30px;
  margin: 0 2px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
}
</style>
