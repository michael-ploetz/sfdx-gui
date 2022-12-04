<script>
  export let title = 'Modal Header';
  export let subHeader = '';

  export let size = 'medium';

  $: showSubHeader = !!subHeader;

  export let fadeInOpen = false;
  export let slideUpopen = false;
  export let slideUpSaving = false;
  export let slideDownCancel = false;

  export let showHeader = true;
  export let showFooter = true;
</script>

<section
  role="dialog"
  tabindex="-1"
  aria-modal="true"
  aria-labelledby="modal-heading-01"
  class:slds-modal_small={size === 'small'}
  class:slds-modal_medium={size === 'medium'}
  class:slds-modal_large={size === 'large'}
  class:slds-fade-in-open={fadeInOpen}
  class:slds-slide-up-open={slideUpopen}
  class:slds-slide-up-saving={slideUpSaving}
  class:slds-slide-down-cancel={slideDownCancel}
  class="slds-modal"
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
    {#if showHeader}
      <div class="slds-modal__header">
        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">
          {title}
        </h1>
        {#if showSubHeader}
          <p class="slds-m-top_x-small">
            {subHeader}
          </p>
        {/if}
      </div>
    {/if}

    <div
      class="slds-modal__content slds-p-around_medium"
      class:slds-modal__content_headless={!showHeader}
      id="modal-content-id-1"
    >
      <slot />
    </div>
    {#if showFooter}
      <div class="slds-modal__footer">
        <slot name="footer" />
      </div>
    {/if}
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation" />
