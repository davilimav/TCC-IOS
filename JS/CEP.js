document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep-input');
    cepInput.addEventListener('input', async () => {
        if (cepInput.value.length >= 8) { 
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/?lang=pt`);
                if (!response.ok) throw new Error('Erro na requisição');
                const data = await response.json();
                if (data.erro) {
                    alert('CEP não encontrado.');
                    return;
                }
                document.getElementById('address-input').value = data.logradouro;
                document.getElementById('street-number-input').value = '';
                document.getElementById('complement-input').value = data.complemento || '';
                document.getElementById('neighborhood-input').value = data.bairro;
                document.getElementById('state-input').value = data.uf;
                document.getElementById('city-input').value = data.localidade;
            } catch (error) {
                console.error(error);
                alert('Erro ao buscar informações do CEP.');
            }
        }
    });
});