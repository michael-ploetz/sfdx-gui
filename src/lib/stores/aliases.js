import { writable } from "svelte/store";
import { callApi } from "../utils/api.js";

export const allAliases = writable({});

export const loadAllAliases = async () => {
    const results = await callApi('sfdx/alias');

    allAliases.set(results);
};