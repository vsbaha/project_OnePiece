// const OpenAI = require("openai");
// const openai = new OpenAI({
//     apiKey: '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',
// });
//
// exports.chatReq = async (req, res) => {
//     try {
//         const message = "Which is the capital of Albania?";
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: message }],
//             temperature: 0,
//             max_tokens: 1000,
//         });
//         res.status(200).json(response);
//     } catch (err) {
//         res.status(500).json(err.message);
//     }
// };

const chatContainer = document.querySelector('#chat-container');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button')

function sendMessage() {
    const userMessage = userInput.value;
    if (!userMessage) return;

    appendMessage('Вы: ' + 'Это будет добавлено в 4 месяце. Там оказывается нужно знать Node.js а именно npm', 'user');



    userInput.value = '';
}

sendButton.onclick = () => {
    sendMessage()
    // TODO: Добавить код с ответом от бота
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', sender);
    chatContainer.appendChild(messageElement);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

//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