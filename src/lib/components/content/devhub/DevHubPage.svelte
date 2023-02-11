<script>
  import Page from '../../base/Page.svelte';

  import DevHubPageHeader from './DevHubPageHeader.svelte';
  import DevHubPageSidebar from './DevHubPageSidebar.svelte';
  import DevHubPageMainSection from './DevHubPageMainSection.svelte';

  export let orgId;
</script>

<Page>
  <div slot="header">
    <DevHubPageHeader {orgId} />
  </div>

  <div slot="sidebar">
    <DevHubPageSidebar {orgId} />
  </div>

  <div slot="main">
    <DevHubPageMainSection {orgId} />
  </div>
</Page>
