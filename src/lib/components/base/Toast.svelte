<script>
  import { createEventDispatcher } from 'svelte';

  export let variant = 'info';
  export let dismissible = true;
  export let message;

  const dispatch = createEventDispatcher();

  $: iconLink = `../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#${variant}`;
</script>

<div class="slds-notify_container slds-is-relative">
  <div
    class={'slds-notify slds-notify_toast slds-theme_' + variant}
    role="status"
  >
    <span class="slds-assistive-text">info</span>
    <span
      class="slds-icon_container slds-icon-utility-info slds-m-right_small slds-no-flex slds-align-top"
      title="Description of icon when needed"
    >
      <svg class="slds-icon slds-icon_small" aria-hidden="true">
        <use xlink:href={iconLink} />
      </svg>
    </span>
    <div class="slds-notify__content">
      <h2 class="slds-text-heading_small">
        {message}
      </h2>
    </div>
    {#if dismissible}
      <div class="slds-notify__close">
        <button
          on:click={() => dispatch('dismiss')}
          class="slds-button slds-button_icon slds-button_icon-inverse"
          title="Close"
        >
          <svg
            class="slds-button__icon slds-button__icon_large"
            aria-hidden="true"
          >
            <use
              xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close</span>
        </button>
      </div>
    {/if}
  </div>
</div>
