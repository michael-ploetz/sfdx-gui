<script>
  import { onMount } from 'svelte';
  import { devHubs } from '../../../stores/orgs';
  import {
    loadPackagesForDevhub,
    loadPackageVersionsForDevhub,
  } from '../../../stores/packages';
  import Section from '../../base/Section.svelte';
  import DevHubPackageOverviewDatatable from './DevHubPackageOverviewDatatable.svelte';

  export let orgId;

  let loaded = false;

  $: org = $devHubs.find((devHub) => devHub.orgId === orgId);
  onMount(async () => {
    await loadPackagesForDevhub(org.username);
    await loadPackageVersionsForDevhub(org.username);
    loaded = true;
  });
</script>

<div>
  {#if loaded}
    <Section title="Package List">
      <DevHubPackageOverviewDatatable {orgId} />
    </Section>
    <Section title="Package Diagram" closed>Package Diagram</Section>
  {:else}
    loading
  {/if}
</div>
