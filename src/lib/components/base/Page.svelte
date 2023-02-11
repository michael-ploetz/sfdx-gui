<script>
  import Layout from './Layout.svelte';
  import LayoutItem from './LayoutItem.svelte';
</script>

<div style="padding: 12px;">
  <slot />
  <Layout wrap>
    <LayoutItem
      size="12"
      additionalStyles="padding-bottom: 12px;"
      additionalClasses="region-header"
    >
      <slot name="header" />
    </LayoutItem>
    <LayoutItem
      size="4"
      additionalStyles="padding-right: 12px;"
      additionalClasses="region-sidebar-left"
    >
      <slot name="sidebar" />
    </LayoutItem>
    <LayoutItem size="8" additionalClasses="region-main">
      <slot name="main" />
    </LayoutItem>
  </Layout>
</div>
