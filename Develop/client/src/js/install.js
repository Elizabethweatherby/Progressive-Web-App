const butInstall = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
// TODO: Implement a click event handler on the `butInstall` element
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
