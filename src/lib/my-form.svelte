<script>
    let name;
    let email;
    let selectBox;
    let checks=[]
    function handleSubmit() {
        console.log(name,email,checks,selectBox)
    }


</script>


<form class="grid grid-cols-1" on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="address" bind:value={email}>
    <input type="checkbox" bind:group={checks} value="check1">check 1 <br/>
    <input type="checkbox" bind:group={checks} value="check2">check 2 <br/>
    <select bind:value={selectBox}>
        <option value={true}>1</option>
        <option value="two">2</option>
        <option value="three">3</option>
    </select>
    <button type="submit">
       Subbmit
    </button>
 </form>