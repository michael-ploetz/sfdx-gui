<script>
  import OrgLauncher from './OrgLauncher.svelte';
  import HomePage from '../content/HomePage.svelte';
  import ContentPage from '../content/ContentPage.svelte';

  import {
    activateSubtab,
    activateTab,
    activeSubtab,
    activeTab,
    deactivateActiveTab,
    deactivateSubtab,
    tabs,
  } from '../../stores/navigation';

  const handleTabOpen = (event) => {
    deactivateActiveTab();
    activateTab(event.target.id);
  };

  const handleSubTabOpen = (event) => {
    deactivateSubtab();
    activateSubtab(event.target.id);
  };
</script>

<div class="slds-context-bar" style="padding: 0;">
  <OrgLauncher />

  <nav class="slds-context-bar__secondary">
    <ul class="slds-grid">
      {#each $tabs as tab}
        <li
          id={tab.orgId}
          on:click={handleTabOpen}
          class="slds-context-bar__item"
          class:slds-is-active={tab.active}
        >
          <a
            id={tab.orgId}
            on:click={handleTabOpen}
            class="slds-context-bar__label-action"
            title="Home"
          >
            <span
              id={tab.orgId}
              on:click={handleTabOpen}
              class="slds-truncate"
              title={tab.label}>{tab.label}</span
            >
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
{#if $activeTab.subtabs.length > 1}
  <div style="background: white;" class="slds-show" role="tabpanel">
    <div class="slds-tabs_default slds-sub-tabs">
      <ul class="slds-tabs_default__nav" role="tablist">
        {#each $activeTab.subtabs as subtab}
          <li
            on:click={handleSubTabOpen}
            id={subtab.id}
            class:slds-active={subtab.active}
            class="slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center"
            role="presentation"
          >
            <a
              class="slds-tabs_default__link slds-p-horizontal_xx-small"
              on:click={handleSubTabOpen}
              id={subtab.id}
              role="tab"
              tabindex="0"
              title={subtab.label}
            >
              <span class="slds-indicator-container" />
              <span
                on:click={handleSubTabOpen}
                id={subtab.id}
                class="slds-truncate"
                title={subtab.label}>{subtab.label}</span
              >
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

{#if $activeTab.orgId === 'home'}
  <HomePage />
{:else}
  <ContentPage id={$activeSubtab.id} />
{/if}
