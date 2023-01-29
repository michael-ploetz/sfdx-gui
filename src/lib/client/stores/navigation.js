import { writable } from "svelte/store";

export const navigation = writable({
    tabs: [{
        label: "Home",
        orgId: 'home',
        active: true,
        subtabs: []
    }]
});