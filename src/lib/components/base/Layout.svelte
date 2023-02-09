<script>
  export let gutters;
  export let wrap;
</script>

<div class="slds-grid" class:slds-wrap={wrap} class:slds-gutters={gutters}>
  <slot />
</div>
