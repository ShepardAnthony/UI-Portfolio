<script>
    import SetReps from './lib/SetReps.svelte'
    import Form from './Form.svelte'
    import "./project.js"
    import "./project.css"

    let user = 'aShepard'
    let startdate = new Date('2024-09-01');
    let date = (new Date())
    let streak = 4;
    $: age = Math.ceil(Math.abs(date - startdate) / (1000 * 60 * 60 * 24))
</script>

<main>
    <div class="overlay" id="overlay">
        <div></div>
        <Form />
    </div>
    
    <div class="navbar">
        <div class="navtab" id='user' style="padding-left:10px;"><b>User: {user}</b></div>
        <div class="navtab" id='streak'>Streak: {streak}</div>
        <div class="navtab" id='age'>Acount Age: {age} days</div>
    </div>
    <div class="calendar" id="calendar">
        <div class="month" id="month"><p><b>september</b></p>
        <div class="weekdays">
            <div class="weekday">Sun</div>
            <div class="weekday">Mon</div>
            <div class="weekday">Tues</div>
            <div class="weekday">Wed</div>
            <div class="weekday">Thur</div>
            <div class="weekday">Fri</div>
            <div class="weekday">Sat</div>
        </div>
        </div>
    </div>

    
</main>
