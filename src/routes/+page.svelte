<script>
  import { onMount } from 'svelte';
  import { loadAllOrgs } from '../lib/stores/orgs';
  import { loadAllAliases } from '../lib/stores/aliases';
  import Spinner from '../lib/components/base/Spinner.svelte';
  import Navigation from '../lib/components/navigation/Navigation.svelte';
  import { activateTab, addTab } from '../lib/stores/navigation';
  import Toasts from '../lib/components/base/Toasts.svelte';
  import Prompts from '../lib/components/base/Prompts.svelte';

  let loading = true;

  onMount(async () => {
    await loadAllOrgs();
    await loadAllAliases();
    addTab('Home', 'home');
    activateTab('home');
    loading = false;
  });
</script>

<Toasts />
<Prompts />

{#if loading}
  <Spinner />
{/if}

<Navigation />
