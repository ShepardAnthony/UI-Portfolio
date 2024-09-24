<script>
  import { count } from "./stores";

    let reps = 0;
    const incrementReps = () => {
      reps += 1;
    };

    let sets = 0;
    const incrementSets = () => {
      sets += 1;
    };

    const reset = () => {
      reps = 0;
      sets = 0;
    };
  </script>
  
  <button on:click={incrementSets}>
    sets are {sets}
  </button>

  <button on:click={incrementReps}>
    reps are {reps}
  </button>

  <button on:click={reset}>
    reset
  </button>
