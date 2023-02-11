<script>
  import { onMount } from 'svelte';
  import { devHubs } from '../../../client/stores/orgs';
  import {
    packages,
    loadPackagesForDevhub,
  } from '../../../client/stores/packages';
  import Section from '../../base/Section.svelte';
  import PackageOverviewDatatable from './PackageOverviewDatatable.svelte';

  export let orgId;

  let loaded = false;

  $: org = $devHubs.find((devHub) => devHub.orgId === orgId);
  onMount(async () => {
    await loadPackagesForDevhub(org.username);
    loaded = true;
  });
</script>

<div>
  load dependencies by
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_extract_dependency_info.htm
  {#if loaded}
    <Section title="Package List" closed>
      <PackageOverviewDatatable {orgId} />
    </Section>
    <Section title="Package Diagram" closed>Package Diagram</Section>
  {:else}
    loading
  {/if}
</div>
