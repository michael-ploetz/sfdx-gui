<script>
  import { packageVersions } from '../../../stores/packages';

  import Card from '../../base/Card.svelte';
  import Form from '../../base/Form.svelte';
  import FormElement from '../../base/FormElement.svelte';
  import FormRow from '../../base/FormRow.svelte';
  import Tab from '../../base/Tab.svelte';
  import Tabs from '../../base/Tabs.svelte';

  export let packageId;

  let tabs;
  let detailTab;

  // package is reservec
  $: thisPackageVersion = $packageVersions.find((p) => p.Id === packageId);
</script>

<Card>
  <Tabs bind:this={tabs} on:select={detailTab.select}>
    <Tab
      bind:this={detailTab}
      active
      on:register={tabs.register}
      id="detailTab"
      label="Details"
    >
      <Form>
        <FormRow>
          <FormElement
            readOnly
            value={thisPackageVersion.Description}
            label="Description"
          />
        </FormRow>
      </Form>
    </Tab>
  </Tabs>
</Card>
