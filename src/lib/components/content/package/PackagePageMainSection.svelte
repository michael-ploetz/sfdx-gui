<script>
  import { packages } from '../../../stores/packages';

  import Card from '../../base/Card.svelte';
  import Tab from '../../base/Tab.svelte';
  import Tabs from '../../base/Tabs.svelte';
  import PackagePageVersionTree from './PackagePageVersionTree.svelte';

  export let packageId;

  let tabs;
  let versionsTab;

  // package is reservec
  $: thisPackage = $packages.find((p) => p.Id === packageId);
</script>

<Card>
  <Tabs bind:this={tabs} on:select={versionsTab.select}>
    <Tab
      bind:this={versionsTab}
      active
      on:register={tabs.register}
      id="versionsTab"
      label="Versionen"
    >
      todo: package overview and actions commands. would be cool, create new
      version, version list, actions on each version (delete, promote, report.
      update)
      <PackagePageVersionTree {packageId} />
    </Tab>
  </Tabs>
</Card>
