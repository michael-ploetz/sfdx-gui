<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let tabs = [];

  export const register = (event) => {
    tabs = [...tabs, event.detail];
  };

  const handleTabSelect = (event) => {
    const temp = JSON.parse(JSON.stringify(tabs));
    temp.find((tab) => tab.active).active = false;
    temp.find((tab) => tab.id === event.target.id).active = true;
    tabs = temp;
    dispatch(
      'select',
      tabs.find((tab) => tab.id === event.target.id)
    );
  };
</script>

<div class="slds-tabs_default">
  <ul class="slds-tabs_default__nav" role="tablist">
    {#each tabs as tab}
      <li
        class="slds-tabs_default__item"
        class:slds-is-active={tab.active}
        title={tab.label}
        role="presentation"
        id={tab.id}
        on:click={handleTabSelect}
      >
        <a
          class="slds-tabs_default__link"
          role="tab"
          tabindex="0"
          aria-selected="true"
          aria-controls="tab-default-1"
          id={tab.id}>{tab.label}</a
        >
      </li>
    {/each}
  </ul>
  <slot />
</div>
