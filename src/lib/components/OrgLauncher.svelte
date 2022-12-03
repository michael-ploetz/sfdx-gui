<script>
  import Section from '../base/section.svelte';
  import Spinner from '../base/spinner.svelte';
  import OrgTile from './OrgTile.svelte';

  let loading = false;

  let devhubs = [];
  let regulars = [];
  let scratches = [];

  const handleLoad = async () => {
    loading = true;
    const response = await fetch('/api/sfdx/org', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const orgs = await response.json();
    devhubs = orgs.result.nonScratchOrgs.filter((org) => org.isDevHub);
    regulars = orgs.result.nonScratchOrgs.filter((org) => !org.isDevHub);
    scratches = orgs.result.scratchOrgs;

    loading = false;
  };
</script>

{#if loading}
  <Spinner />
{/if}

<section
  role="dialog"
  tabindex="-1"
  aria-modal="true"
  aria-labelledby="header43"
  class="slds-modal slds-fade-in-open slds-modal_large slds-app-launcher"
>
  <div class="slds-modal__container">
    <button
      class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
    >
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use
          xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#close"
        />
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div
      class="slds-modal__header slds-grid slds-grid_align-spread slds-grid_vertical-align-center"
    >
      <h2 id="header43" class="slds-text-heading_medium">Org launcher</h2>
      <div class="slds-app-launcher__header-search">
        <div class="slds-form-element">
          <label
            for="app-launcher-search"
            class="slds-form-element__label slds-assistive-text"
            >Find an org</label
          >
          <div
            class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
          >
            <svg class="slds-input__icon" aria-hidden="true">
              <use
                xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#search"
              />
            </svg>
            <input
              type="search"
              class="slds-input"
              id="app-launcher-search"
              placeholder="Find an org"
            />
          </div>
        </div>
      </div>
      <button class="slds-button slds-button_neutral" on:click={handleLoad}
        >Load Orgs</button
      >
    </div>
    <div
      class="slds-modal__content slds-app-launcher__content slds-p-around_medium"
      id="modal-content-id-1"
    >
      <Section title="Dev Hubs">
        <ul class="slds-grid slds-grid_pull-padded slds-wrap">
          {#each devhubs as devhub}
            <li
              class="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-"
            >
              <OrgTile {devhub} />
            </li>
          {/each}
        </ul>
      </Section>
      <hr />
      <Section title="Regular Orgs">
        <ul class="slds-grid slds-grid_pull-padded slds-wrap">
          {#each regulars as regular}
            <li
              class="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"
            >
              <OrgTile {regular} />
            </li>
          {/each}
        </ul>
      </Section>
      <hr />
      <Section title="Scratch Orgs">
        <ul class="slds-grid slds-grid_pull-padded slds-wrap">
          {#each scratches as scratch}
            <li
              class="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"
            >
              <OrgTile {scratch} />
            </li>
          {/each}
        </ul>
      </Section>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation" />
