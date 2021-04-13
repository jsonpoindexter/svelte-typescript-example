<svelte:head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
</svelte:head>


<script lang="ts">

    import * as eruda from 'eruda';
    eruda.init();
   import Dashboard from './View/Dashboard.svelte' 
   import Login from './View/Login.svelte'
    export let name: string;
    import { isAuthenticated } from './store.ts';

</script>

<main>
    <div class="container">
        <h1>Hello {name}!</h1>
        { #if $isAuthenticated }
            <Dashboard />
        {:else}
            <Login />
        {/if}
        
    </div>
</main>

<style>
</style>