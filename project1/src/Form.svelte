<script>
    import "./Form.css"
    import SetReps from './lib/SetReps.svelte'
    import project from "./main";

    //const fs = require("fs");

    let exercisetype = "";
    let exercises = [];
    let sets = {};
    let reps = {};
    $: canSubmit = (exercises.length > 0);

    function clearForm(){
        exercisetype = "";
        exercises = [];
        sets = {};
        reps = {};
    }

    function submitForm() {
        let data = {
            "timestamp": new Date(),
            "exercisetype": exercisetype,
            "exercises": exercises,
            "sets": sets,
            "reps": reps
        }

        clearForm();

        document.getElementById('x').click();
        
        /*
        const jsondata = JSON.stringify(data, null, 2)

        fs.writeFile('data.json', jsondata, (err) => {if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File has been written successfully');
            }
        });
        */
    }

</script>

<div>
    <div class="form" id="form">
        <button id="x">X</button>

        <div class="form-question">
            <h2 style="text-align:center;">What type of exercises today?</h2>
            {#each ["Push", "Pull", "Legs"] as type}
                <label>
                    <input
                        type="radio"
                        name="exercisetype"
                        value = {type}
                        bind:group={exercisetype} 
                        on:change={() => {exercises = []; sets = {}; reps = {};}}
                        style="cursor:pointer"
                    />

                    {type}
                </label>
            {/each}
        </div>

        <div class="form-question">
            {#if exercisetype != ""}
                <h2>What exercises today?</h2>
                <p id='hint'>*Use Ctrl to select multiple</p>
                {#if exercisetype == "Push"}
                    <select multiple bind:value={exercises}>
                        {#each ['Bench Press', 'Chest Press', 'Shoulder Press', 'Skull Crushers'] as exercise}
                            <option>{exercise}</option>
                        {/each}
                    </select>
                {:else if exercisetype == "Pull"}
                    <select multiple bind:value={exercises}>
                        {#each ['Lat Pulldowns', 'Rows', 'Hammer Curls', 'Dumbell Shrugs'] as exercise}
                            <option>{exercise}</option>
                        {/each}
                    </select>
                {:else}
                    <select multiple bind:value={exercises}>
                        {#each ['Squats', 'Leg Press', 'Leg Extension', 'Calf Raises'] as exercise}
                            <option>{exercise}</option>
                        {/each}
                    </select>
                {/if}
            {/if}
        </div>

        <div class="form-question">
            {#if exercises.length > 0}
            {exercises}
                <h2>How many sets and reps?</h2>
                {#each exercises as exercise}
                    <p>{exercise} : 
                        <label>
                            <input 
                                class="form-nums"
                                type="number"
                                bind:value={sets[exercise]}
                            />
                            sets
                        </label>
                        <label>
                            <input 
                                class="form-nums"
                                type="number"
                                bind:value={reps[exercise]}
                            />
                            reps
                        </label>
                    </p>
                    {/each}
            {/if}
        </div>
        
        <button disabled={!canSubmit} id='submit' on:click={submitForm}>Submit</button>
        


    </div>
</div>