<script>
  import OrgLauncher from '../lib/components/OrgLauncher.svelte';

  let showOrgLauncher = false;

  const handleOrglauncherOpen = () => {
    showOrgLauncher = true;
  };
</script>

{#if showOrgLauncher}
  <OrgLauncher />
{/if}

<div class="slds-context-bar">
  <div class="slds-context-bar__primary">
    <div
      class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"
    >
      <div class="slds-context-bar__icon-action">
        <button
          class="slds-button slds-icon-waffle_container slds-context-bar__button"
          title="Description of the icon when needed"
          on:click={handleOrglauncherOpen}
        >
          <span class="slds-icon-waffle">
            <span class="slds-r1" />
            <span class="slds-r2" />
            <span class="slds-r3" />
            <span class="slds-r4" />
            <span class="slds-r5" />
            <span class="slds-r6" />
            <span class="slds-r7" />
            <span class="slds-r8" />
            <span class="slds-r9" />
          </span>
          <span class="slds-assistive-text">Open App Launcher</span>
        </button>
      </div>
      <span class="slds-context-bar__label-action slds-context-bar__app-name">
        <span class="slds-truncate" title="App Name">SFDX GUI</span>
      </span>
    </div>
  </div>
  <nav class="slds-context-bar__secondary" role="navigation">
    <ul class="slds-grid">
      <li class="slds-context-bar__item slds-is-active">
        <a href="#" class="slds-context-bar__label-action" title="Home">
          <span class="slds-assistive-text">Current Page:</span>
          <span class="slds-truncate" title="Home">Home</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
