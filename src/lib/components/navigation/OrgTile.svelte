<script>
  export let org;
  let hovered = false;
  import { allAliases } from '../../stores/aliases.js';
  import {
    activateSubtab,
    activateTab,
    addSubtab,
    addTab,
    deactivateActiveTab,
    deactivateSubtab,
  } from '../../stores/navigation.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleOrgClick = () => {
    if (org.isScratchOrg) {
      addTab(
        $allAliases.find((alias) => alias.value === org.devHubUsername)
          ?.alias || org.devHubUsername,
        org.devHubOrgId
      );
      deactivateActiveTab();
      activateTab(org.devHubOrgId);
      addSubtab(
        org.orgId,
        $allAliases.find((alias) => alias.value === org.username)?.alias ||
          org.username
      );
      deactivateSubtab();
      activateSubtab(org.orgId);
    } else {
      addTab(
        $allAliases.find((alias) => alias.value === org.username)?.alias ||
          org.username,
        org.orgId
      );
      deactivateActiveTab();

      activateTab(org.orgId);
    }

    dispatch('orgselected', {});
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
  class="slds-tile slds-box"
  on:click={handleOrgClick}
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
