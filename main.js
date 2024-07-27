document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.setAttribute('draggable', 'true');
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dblclick', moveToLeft);
    });

    const innerRight = document.querySelector('.inner.right');
    const innerLeft = document.querySelector('.inner.left');

    innerRight.addEventListener('dragover', allowDrop);
    innerRight.addEventListener('drop', drop);
    innerLeft.addEventListener('dragover', allowDrop);
    innerLeft.addEventListener('drop', drop);

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function allowDrop(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const cardId = event.dataTransfer.getData('text/plain');
        const card = document.getElementById(cardId);
        if (event.target.classList.contains('inner')) {
            event.target.appendChild(card);
        }
    }

    function moveToLeft(event) {
        if (event.target.closest('.inner.right')) {
            innerLeft.appendChild(event.target.closest('.card'));
        }
    }
});
