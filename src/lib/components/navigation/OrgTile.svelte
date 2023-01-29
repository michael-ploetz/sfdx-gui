<script>
  export let org;
  let hovered = false;
  import { allAliases } from '../../client/stores/aliases.js';
  import { navigation } from '../../client/stores/navigation.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
  class="slds-tile slds-box"
  on:click={() => {
    navigation.update((prev) => {
      prev.tabs.find((tab) => tab.active).active = false;

      prev.tabs.push({
        orgId: org.orgId,
        label:
          $allAliases.find((alias) => alias.value === org.username)?.alias ||
          org.username,
        active: true,
        subtabs: [],
      });
      return prev;
    });
    dispatch('orgselected', {
      orgId: org.orgId,
    });
  }}
  class:hovered
  on:mouseenter={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
  style="cursor: pointer;"
>
  <h3 class="slds-tile__title slds-truncate" title="Salesforce UX">
    <a href={org.instanceUrl}
      >{$allAliases.find((alias) => alias.value === org.username)?.alias ||
        org.url}</a
    >
  </h3>
  <div class="slds-tile__detail">
    <dl class="slds-list_horizontal slds-wrap">
      <dt
        class="slds-item_label slds-text-color_weak slds-truncate"
        title="orgId"
      >
        orgId:
      </dt>
      <dd class="slds-item_detail slds-truncate" title="orgId">
        {org.orgId}
      </dd>
      <dt
        class="slds-item_label slds-text-color_weak slds-truncate"
        title="status"
      >
        status
      </dt>
      <dd class="slds-item_detail slds-truncate" title="status">
        {org.connectedStatus}
      </dd>
      <dt
        class="slds-item_label slds-text-color_weak slds-truncate"
        title="username"
      >
        username
      </dt>
      <dd class="slds-item_detail slds-truncate" title="username">
        {org.username}
      </dd>
    </dl>
  </div>
</article>

<style>
  .hovered {
    background: #f3f3f3;
  }
</style>
