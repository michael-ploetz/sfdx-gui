<script>
  import { packageVersions } from '../../../stores/packages';

  import Card from '../../base/Card.svelte';
  import Tab from '../../base/Tab.svelte';
  import Tabs from '../../base/Tabs.svelte';
  import PackageVersionPageDependenciesSection from './PackageVersionPageDependenciesSection.svelte';

  export let packageId;

  let tabs;
  let dependenciesTab;

  // package is reservec
  $: thisPackageVersion = $packageVersions.find((p) => p.Id === packageId);
</script>

<Card>
  <Tabs bind:this={tabs} on:select={dependenciesTab.select}>
    <Tab
      bind:this={dependenciesTab}
      active
      on:register={tabs.register}
      id="dependenciesTab"
      label="dependenciesTab"
    >
      <PackageVersionPageDependenciesSection {packageId} />
    </Tab>
  </Tabs>
</Card>
