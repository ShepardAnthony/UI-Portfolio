import { readable, writable } from 'svelte/store';
import users from '../../users.json';
import { activeUser } from '../main.js';

export const count = writable(0);

export const daysActive = readable(users, function start(set) {
    const days = users[activeUser]['streak'];

    const interval = setInterval(() => {

    })

    return function stop() {
        ;
    }
});