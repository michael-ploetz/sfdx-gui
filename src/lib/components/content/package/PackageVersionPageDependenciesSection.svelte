<script>
  import { devHubs } from '../../../stores/orgs';
  import { activeTab } from '../../../stores/navigation';
  import { loadDependenciesForPackageVersion } from '../../../stores/packages';
  import Section from '../../base/Section.svelte';
  import PackageVersionPageDependenciesList from './PackageVersionPageDependenciesList.svelte';
  import PackageVersionPageDependenciesTree from './PackageVersionPageDependenciesTree.svelte';

  export let packageId;

  let loading = true;

  $: {
    refresh(packageId);
  }
  const refresh = async (id) => {
    await loadDependenciesForPackageVersion(
      $devHubs.find((devHub) => devHub.orgId === $activeTab.orgId).username,
      id
    );

    loading = false;
  };
</script>

{#if !loading}
  <Section title="Dependency List">
    <PackageVersionPageDependenciesList {packageId} />
  </Section>
  <Section title="Dependency Tree" closed>
    <PackageVersionPageDependenciesTree {packageId} />
  </Section>
  <Section title="Dependency Diagram" closed>you really wanna do this?</Section>
{/if}
