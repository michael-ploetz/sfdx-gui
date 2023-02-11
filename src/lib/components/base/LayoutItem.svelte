<script>
  export let size = 1;
  export let additionalClasses = '';
  export let additionalStyles = '';

  $: sizeClass = `slsd-col slds-size_${size}-of-12 ${additionalClasses}`;
</script>

<div class={sizeClass} style={additionalStyles}>
  <span><slot /></span>
</div>
