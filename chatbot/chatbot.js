document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (!chatbotContainer) return;

    const chatbotMarkupUrl = new URL('./chatbot.html', import.meta.url);
    const conversationUrl = new URL('./conversation.json', import.meta.url);

    fetch(chatbotMarkupUrl.href)
        .then(response => response.text())
        .then(html => {
            chatbotContainer.innerHTML = html;
            initializeChatbot(conversationUrl);
        })
        .catch(error => console.error('Error al cargar el chatbot:', error));
});

function initializeChatbot(conversationUrl) {
    let conversationTree = {};

    const chatWindow = document.getElementById('chat-window');
    const chatModal = document.getElementById('chat-modal');
    if (!chatWindow || !chatModal) {
        console.error('Elementos del chatbot no encontrados en el DOM.');
        return;
    }

    function scrollToBottom() {
    
        setTimeout(() => {
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 50);
    }

    const conversationUrlWithCacheBust = new URL(conversationUrl.href);
    conversationUrlWithCacheBust.searchParams.set('v', Date.now().toString());

    fetch(conversationUrlWithCacheBust.href)
        .then(response => response.json())
        .then(data => {
            const nodes = Array.isArray(data) ? data : Array.isArray(data?.nodes) ? data.nodes : [];
            if (!nodes.length) {
                console.error('No se encontraron nodos de conversación en el JSON.');
                return;
            }

            conversationTree = nodes.reduce((acc, node) => {
                acc[node.id] = node;
                return acc;
            }, {});

            const startNodeId = typeof data?.startNode === 'string' && conversationTree[data.startNode]
                ? data.startNode
                : 'inicio_start';

            navigateTo(startNodeId);
        })
        .catch(error => console.error('Error al cargar la conversación:', error));

    function appendBotMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';
        const formattedText = text.replace(/\n/g, '<br>');
        messageElement.innerHTML = formattedText;
        chatWindow.appendChild(messageElement);
        scrollToBottom();
    }

    function showOptions(options) {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.label;
            button.dataset.next = option.next;
            button.addEventListener('click', handleOptionClick);
            optionsContainer.appendChild(button);
        });
        chatWindow.appendChild(optionsContainer);
        scrollToBottom();
    }

    function handleOptionClick(event) {
        const userChoiceText = event.target.textContent;
        const nextNodeId = event.target.dataset.next;

        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userChoiceText;
        chatWindow.appendChild(userMessage);
        
        const allOptions = chatWindow.querySelectorAll('.options-container');
        allOptions.forEach(opt => opt.remove());

        scrollToBottom();

        setTimeout(() => {
            navigateTo(nextNodeId);
        }, 300);
    }

    function navigateTo(nodeId) {
        const node = conversationTree[nodeId];
        if (!node) {
            console.error(`Nodo "${nodeId}" no encontrado en la conversación.`);
            return;
        }

        appendBotMessage(node.text);

        if (node.options && node.options.length > 0) {
            showOptions(node.options);
        }
    }

    const chatToggle = document.getElementById('chat-toggle');
    const chatClose = document.getElementById('chat-close');
    if (chatToggle && chatModal && chatClose) {
        chatToggle.addEventListener('click', () => {
            chatModal.classList.toggle('open');
            if (chatModal.classList.contains('open')) {
                scrollToBottom();
            }
        });
        chatClose.addEventListener('click', () => chatModal.classList.remove('open'));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && chatModal.classList.contains('open')) {
                chatModal.classList.remove('open');
            }
        });
    }
}