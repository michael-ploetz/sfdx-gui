<script>
  import Page from '../../base/Page.svelte';
  import PackagePageHeader from './PackagePageHeader.svelte';
  import PackagePageMainSection from './PackagePageMainSection.svelte';
  import PackagePageSideBar from './PackagePageSideBar.svelte';
  import PackageVersionPageHeader from './PackageVersionPageHeader.svelte';
  import PackageVersionPageMainSection from './PackageVersionPageMainSection.svelte';
  import PackageVersionPageSidebar from './PackageVersionPageSidebar.svelte';
  export let packageId;
</script>

{#if packageId.startsWith('0Ho')}
  <Page>
    <div slot="header">
      <PackagePageHeader {packageId} />
    </div>

    <div slot="sidebar"><PackagePageSideBar {packageId} /></div>

    <div slot="main">
      <PackagePageMainSection {packageId} />
    </div>
  </Page>
{:else if packageId.startsWith('05i')}
  <Page>
    <div slot="header">
      <PackageVersionPageHeader {packageId} />
    </div>

    <div slot="sidebar"><PackageVersionPageSidebar {packageId} /></div>

    <div slot="main">
      <PackageVersionPageMainSection {packageId} />
    </div>
  </Page>
{/if}
