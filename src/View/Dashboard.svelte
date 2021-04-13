<script lang="ts">
    import { isAuthenticated } from '../store.ts';
</script>


<h1>Dashboard</h1>
<button type="button" class="btn btn-success" on:click={() => isAuthenticated.set(false)}>Logout</button>