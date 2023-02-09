<script>
  import { onMount } from 'svelte';
  import { loadAllOrgs } from '../lib/client/stores/orgs';
  import { loadAllAliases } from '../lib/client/stores/aliases';
  import Spinner from '../lib/components/base/Spinner.svelte';
  import Navigation from '../lib/components/navigation/Navigation.svelte';

  let loading = true;

  onMount(async () => {
    await loadAllOrgs();
    await loadAllAliases();
    loading = false;
  });
</script>

{#if loading}
  <Spinner />
{/if}

<Navigation />
