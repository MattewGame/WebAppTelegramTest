const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
    Telegram.WebApp.MainButton.text = 'Clicked';
});

Telegram.WebApp.ready(() => {
    Telegram.WebApp.MainButton.text = 'Start';
    Telegram.WebApp.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    Telegram.WebApp.sendData(`Button clicked: ${Telegram.WebApp.MainButton.text}`);
});

Telegram.WebApp.init({
    id: "YOUR_APP_ID", // replace with your actual Telegram Web App ID
    useWebView: false,
    useWebAppKeyboard: false,
    useChatMenuButton: true,
    useShareButton: true,
});