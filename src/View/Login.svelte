<script lang="ts">
    import { isAuthenticated } from '../store.ts';
</script>

<h1>Login</h1>
<button type="button" class="btn btn-success" on:click={() => isAuthenticated.set(true)}>Login</button>