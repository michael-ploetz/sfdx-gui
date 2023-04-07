<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let data = [];
  export let columns = [];

  $: rows = data.map((datarow) => {
    let newRow = {
      cells: [],
      rawRow: datarow,
    };
    columns.forEach((column) => {
      const fieldData = datarow[column.value];
      newRow.cells.push({
        ...column,
        value: fieldData || '',
      });
    });
    return newRow;
  });

  export let bordered = true;
</script>

<table
  style="table-layout: fixed;"
  class="slds-table slds-table_cell-buffer"
  class:slds-table_bordered={bordered}
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
    {#each rows as row}
      <tr class="slds-hint-parent">
        {#each row.cells as cell}
          <td data-label={cell.value}>
            {#if cell.type === 'link'}
              <div class="slds-truncate" title={cell.value}>
                <a
                  on:click={() => {
                    const rawRow = row.rawRow;
                    dispatch(cell.actionDetails.name, { rawRow, cell });
                  }}
                  tabindex="-1">{cell.value}</a
                >
              </div>
            {:else}
              <div class="slds-truncate" title={cell.value}>{cell.value}</div>
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
