<script>
  import OrgLauncher from './OrgLauncher.svelte';
  import HomePage from '../content/HomePage.svelte';

  import { navigation } from '../../client/stores/navigation';
  import OrgPage from '../content/OrgPage.svelte';

  const handleTabOpen = (event) => {
    console.log(event.target.id);
    navigation.update((prev) => {
      prev.tabs.find((tab) => tab.active).active = false;
      prev.tabs.find((tab) => tab.orgId === event.target.id).active = true;
      return prev;
    });
  };
</script>

<div class="slds-context-bar" style="padding: 0;">
  <OrgLauncher />

  <nav class="slds-context-bar__secondary">
    <ul class="slds-grid">
      {#each $navigation.tabs as tab}
        <li
          id={tab.orgId}
          on:click={handleTabOpen}
          class="slds-context-bar__item"
          class:slds-is-active={tab.active}
        >
          <a id={tab.orgId} class="slds-context-bar__label-action" title="Home">
            <span id={tab.orgId} class="slds-truncate" title={tab.label}
              >{tab.label}</span
            >
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

{#if $navigation.tabs.find((tab) => tab.active).orgId === 'home'}
  <HomePage />
{:else}
  <div>
    <OrgPage orgId={$navigation.tabs.find((tab) => tab.active).orgId} />
  </div>
{/if}
