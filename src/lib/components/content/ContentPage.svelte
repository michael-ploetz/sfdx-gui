<script>
  import OrgPage from './OrgPage.svelte';
  import PackagePage from './package/PackagePage.svelte';

  export let id;
</script>

{#if id.startsWith('00D')}
  <OrgPage orgId={id} />
{:else}
  <PackagePage packageId={id} />
{/if}
