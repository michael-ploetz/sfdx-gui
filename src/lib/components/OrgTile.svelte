<script>
  export let devhub;
</script>

<article class="slds-tile slds-box">
  <h3 class="slds-tile__title slds-truncate" title="Salesforce UX">
    <a href={devhub.instanceUrl}>{devhub.instanceUrl}</a>
  </h3>
  <div class="slds-tile__detail">
    <dl class="slds-list_horizontal slds-wrap">
      <dt
        class="slds-item_label slds-text-color_weak slds-truncate"
        title="orgId"
      >
        orgId:
      </dt>
      <dd class="slds-item_detail slds-truncate" title="orgId">
        {devhub.orgId}
      </dd>
      <dt
        class="slds-item_label slds-text-color_weak slds-truncate"
        title="status"
      >
        status
      </dt>
      <dd class="slds-item_detail slds-truncate" title="status">
        {devhub.connectedStatus}
      </dd>
      <dt
        class="slds-item_label slds-text-color_weak slds-truncate"
        title="username"
      >
        username
      </dt>
      <dd class="slds-item_detail slds-truncate" title="username">
        {devhub.username}
      </dd>
    </dl>
  </div>
</article>
