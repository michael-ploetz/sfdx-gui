<script>
  import { createEventDispatcher } from 'svelte';
  import TreeRow from './TreeRow.svelte';
  export let data = [];
  export let columns = [];
  export let childrenAttributeKey;

  const dispatch = createEventDispatcher();

  $: {
    buildTree(data, childrenAttributeKey, 0);
  }

  const buildTree = (data, childrenAttribute, level) => {
    const originalLevel = level;
    level++;
    data.forEach((row, index) => {
      row.level = level;
      row.levelSize = data.length;
      row.index = index;
      row.expanded = false;
      row.expandable =
        row[childrenAttribute] && row[childrenAttribute].length !== 0;
      if (row.expandable) {
        buildTree(row[childrenAttribute], childrenAttribute, level);
      }
    });
    level = originalLevel;
  };
</script>

<table
  style="table-layout: fixed;"
  aria-multiselectable="true"
  class="slds-table slds-table_cell-buffer slds-table_bordered slds-tree slds-table_tree"
  role="treegrid"
  aria-label="Example tree grid with deep nesting"
>
  <thead>
    <tr class="slds-line-height_reset">
      {#each columns as column}
        <th class="" scope="col">
          <div class="slds-truncate" title={column.label}>
            {column.label}
          </div>
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as treeRow}
      <TreeRow
        on:rowaction={(event) => {
          dispatch(event.detail.name, event.detail);
        }}
        {treeRow}
        {columns}
        childrenAttribute={childrenAttributeKey}
      />
    {/each}
  </tbody>
</table>
