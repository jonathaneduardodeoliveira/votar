// Objeto para armazenar os votos
let votes = {
    "Alex Sandro Arthur Silva Santos": 0,
    "Andre Luis Guimaraes Quintanilha": 0,
    "Beatriz Marques Veloso": 0,
    "Bruno Ian": 0,
    "Jonathan Eduardo de Oliveira": 0,
    "jhonathan dos santos pimentel": 0,
    "maria elena": 0,
    "riverson Daniel nobre rodrigues": 0
};

function submitVote() {
    const selectedOption = document.querySelector('input[name="admin"]:checked');
    if (!selectedOption) {
        document.getElementById('voteMessage').textContent = "Por favor, selecione um administrador.";
        return;
    }

    const adminName = selectedOption.value;
    votes[adminName]++;
    document.getElementById('voteMessage').textContent = "Seu voto foi registrado. Aguarde seus sócios votarem ou chame o administrador desta página que é Jonathan Eduardo de Oliveira.";
}

function showAdminLogin() {
    document.getElementById('adminLogin').classList.remove('hidden');
}

function login() {
    const adminName = document.getElementById('adminName').value;
    const adminPassword = document.getElementById('adminPassword').value;

    if (adminName === 'Jonathan Eduardo de Oliveira' && adminPassword === 'admin') {
        displayResults();
    } else {
        document.getElementById('loginMessage').textContent = "Nome ou senha incorretos.";
    }
}

function displayResults() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    // Ordena os resultados
    const sortedVotes = Object.entries(votes).sort((a, b) => b[1] - a[1]);

    sortedVotes.forEach(([name, count]) => {
        const li = document.createElement('li');
        li.textContent = `${name}: ${count} votos`;
        resultsList.appendChild(li);
    });

    document.getElementById('voteResults').classList.remove('hidden');
}
