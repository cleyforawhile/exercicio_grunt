document.getElementById('nome').addEventListener('submit', function(event) {
    event.preventDefault();
    let nome = document.getElementById('name').value;
    alert('Nome: ' + nome);
});