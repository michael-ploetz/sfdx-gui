<script>
  export let size = 1;
  export let additionalClasses = '';

  $: sizeClass = `slsd-col slds-size_${size}-of-12 ${additionalClasses}`;
</script>

<div class={sizeClass}>
  <span><slot /></span>
</div>
