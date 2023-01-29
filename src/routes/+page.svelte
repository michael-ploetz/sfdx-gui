<script>
  import { onMount } from 'svelte';
  import { requestAllOrgs } from '../lib/client/services/orgServices';
  import { requestAllAliases } from '../lib/client/services/aliasServices';
  import Spinner from '../lib/components/base/Spinner.svelte';
  import Navigation from '../lib/components/navigation/Navigation.svelte';

  let loading = true;

  onMount(async () => {
    await requestAllOrgs();
    await requestAllAliases();
    loading = false;
  });
</script>

{#if loading}
  <Spinner />
{/if}

<Navigation />
