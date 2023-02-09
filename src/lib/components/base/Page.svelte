<script>
  import Layout from './Layout.svelte';
  import LayoutItem from './LayoutItem.svelte';
</script>

<div style="padding: 12px;">
  <Layout gutters wrap>
    <LayoutItem size="12" additionalClasses="region-header">
      <slot name="header" />
    </LayoutItem>
    <LayoutItem size="4" additionalClasses="region-sidebar-left">
      <slot name="sidebar" />
    </LayoutItem>
    <LayoutItem size="8" additionalClasses="region-main">
      <slot name="main" />
    </LayoutItem>
  </Layout>
</div>
