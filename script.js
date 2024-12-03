let cart = []; 

function addToCart(itemName, itemPrice) {
    // Adicionar o item ao carrinho
    cart.push({ name: itemName, price: itemPrice });

    // Atualizar o número de itens no ícone da sacola
    updateCartCount();

    // Criar a mensagem de confirmação
    const confirmation = document.createElement('div');
    confirmation.innerText = `✅ ${itemName} foi adicionado à sacola!`;
    confirmation.style.position = 'fixed';
    confirmation.style.bottom = '20px';
    confirmation.style.right = '20px';
    confirmation.style.backgroundColor = '#4CAF50';
    confirmation.style.color = 'white';
    confirmation.style.padding = '10px';
    confirmation.style.borderRadius = '5px';
    confirmation.style.zIndex = '1000';
    confirmation.style.transition = 'transform 0.5s ease, opacity 0.5s ease'; // Transições suaves
    confirmation.style.transform = 'translateY(20px)'; // Iniciar deslocada
    confirmation.style.opacity = '0'; // Invisível no início
    document.body.appendChild(confirmation);

    // Forçar reflow para garantir a aplicação da transição
    setTimeout(() => {
        confirmation.style.transform = 'translateY(0)'; // Voltar à posição original
        confirmation.style.opacity = '1'; // Tornar visível
    }, 10); // Atraso mínimo para permitir o reflow

    // Fazer a mensagem desaparecer suavemente
    setTimeout(() => {
        confirmation.style.opacity = '0'; // Tornar invisível
        confirmation.style.transform = 'translateY(-20px)'; // Deslocar para cima ao desaparecer
        setTimeout(() => {
            confirmation.remove(); // Remover o elemento após a transição
        }, 500); // Tempo para a transição de saída terminar
    }, 2000); // Tempo antes de começar a desaparecer (2s)
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;

    // Exibir ou ocultar o contador
    if (cart.length > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.card-btn');

    buyButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card-contente');
            const itemName = card.querySelector('.card-title').innerText;
            const itemPrice = card.querySelector('.card-price').innerText;

            addToCart(itemName, itemPrice);
        });
    });

    
    updateCartCount();
});
