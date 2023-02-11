<script>
  import Card from '../../base/Card.svelte';
  import Tab from '../../base/Tab.svelte';
  import Tabs from '../../base/Tabs.svelte';
  import DevHubPageSidebar from './DevHubPageSidebar.svelte';
  import PackageOverview from './PackageOverview.svelte';

  export let orgId;

  let tabs;
  let packageTab;
  let detailTab;
  let orgTab;
</script>

<Card>
  <Tabs
    bind:this={tabs}
    on:select={packageTab.select}
    on:select={detailTab.select}
    on:select={orgTab.select}
  >
    <Tab
      bind:this={packageTab}
      active
      on:register={tabs.register}
      id="packageTab"
      label="Package Overview"
    >
      <PackageOverview {orgId} />
    </Tab>

    <Tab bind:this={orgTab} on:register={tabs.register} id="orgTab" label="Orgs"
      ><DevHubPageSidebar {orgId} /></Tab
    >

    <Tab
      bind:this={detailTab}
      on:register={tabs.register}
      id="detailTab"
      label="Details">Details</Tab
    >
  </Tabs>
</Card>
