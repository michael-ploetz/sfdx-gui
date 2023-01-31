<script>
  export let icon;
  export let title;
  export let meta;
</script>

<div class="slds-page-header slds-page-header_record-home">
  <div class="slds-page-header__row">
    <div class="slds-page-header__col-title">
      <div class="slds-media">
        <div class="slds-media__figure">
          <span
            class={'slds-icon_container slds-icon-standard-' +
              icon.replaceAll('_', '-')}
          >
            <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
              <use
                xlink:href={'../../../node_modules/@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg#' +
                  icon}
              />
            </svg>
          </span>
        </div>
        <div class="slds-media__body">
          <div class="slds-page-header__name">
            <div class="slds-page-header__name-title">
              <h1>
                <span>{meta}</span>
                <span
                  class="slds-page-header__title slds-truncate"
                  title="Acme - 1,200 Widgets">{title}</span
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-page-header__col-actions">
      <div class="slds-page-header__controls">
        <div class="slds-page-header__control">
          <slot name="actions" />
        </div>
        <div class="slds-page-header__control">
          <slot name="controls" />
        </div>
      </div>
    </div>
  </div>
  <div class="slds-page-header__row slds-page-header__row_gutters">
    <div class="slds-page-header__col-details">
      <slot />
    </div>
  </div>
</div>
