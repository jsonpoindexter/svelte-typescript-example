import { writable } from 'svelte/store'

export const isAuthenticated: boolean = writable(false);