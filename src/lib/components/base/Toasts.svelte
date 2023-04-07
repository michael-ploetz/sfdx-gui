<script lang="ts">
  import Toast from './Toast.svelte';

  import { dismissToast, toasts } from '../../stores/toasts';
</script>

{#if $toasts}
  <section>
    {#each $toasts as toast (toast.id)}
      <Toast
        message={toast.message}
        variant={toast.variant}
        dismissible={toast.dismissible}
        on:dismiss={() => dismissToast(toast.id)}
      />
    {/each}
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
  }
</style>
