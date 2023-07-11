var lista = {}; // Objeto para armazenar as categorias e produtos

document.getElementById('listaComprasForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página após o envio do formulário

    // Obtém os valores dos campos de entrada
    var categoriaSelect = document.getElementById('categoria');
    var categoria = categoriaSelect.options[categoriaSelect.selectedIndex].value;
    var produto = document.getElementById('produto').value;

    // Adiciona a categoria e o produto ao objeto "lista"
    if (categoria in lista) {
        lista[categoria].push({ produto: produto, feito: false });
    } else {
        lista[categoria] = [{ produto: produto, feito: false }];
    }

    // Atualiza a lista de compras exibida no HTML
    atualizarListaCompras();

    // Limpa os campos de entrada
    categoriaSelect.selectedIndex = 0;
    document.getElementById('produto').value = '';
});

function atualizarListaCompras() {
    var listaCompras = document.getElementById('itensdalistaCompras');
    listaCompras.innerHTML = ''; // Limpa a lista antes de atualizá-la

    // Obtém as categorias do objeto "lista"
    var categorias = Object.keys(lista);

    // Itera sobre as categorias no objeto "lista" e exibe os produtos associados a elas
    categorias.forEach(function(cat) {
        var produtos = lista[cat];

        var listItemCategoria = document.createElement('li');
        listItemCategoria.innerHTML = '<strong>' + cat + '</strong>';
        listaCompras.appendChild(listItemCategoria);

        var listItemProdutos = document.createElement('ul');

        produtos.forEach(function(item, index) {
            var itemProduto = document.createElement('li');

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.feito;
            checkbox.addEventListener('change', function() {
                item.feito = this.checked;
            });
            itemProduto.appendChild(checkbox);

            var label = document.createElement('label');
            label.textContent = item.produto;
            itemProduto.appendChild(label);

            var btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.addEventListener('click', function() {
                produtos.splice(index, 1);
                atualizarListaCompras();
            });
            itemProduto.appendChild(btnExcluir);

            listItemProdutos.appendChild(itemProduto);
        });

        listaCompras.appendChild(listItemProdutos);
    });
    function atualizarListaCompras() {
        var listaCompras = document.getElementById('itensdalistaCompras');
        listaCompras.innerHTML = ''; // Limpa a lista antes de atualizá-la
    
        // Obtém as categorias do objeto "lista"
        var categorias = Object.keys(lista);
    
        // Itera sobre as categorias no objeto "lista" e exibe os produtos associados a elas
        categorias.forEach(function(cat) {
            var produtos = lista[cat];
    
            if (produtos.length > 0) {
                var listItemCategoria = document.createElement('li');
                listItemCategoria.innerHTML = '<strong>' + cat + '</strong>';
                listaCompras.appendChild(listItemCategoria);
    
                var listItemProdutos = document.createElement('ul');
    
                produtos.forEach(function(item, index) {
                    var itemProduto = document.createElement('li');
    
                    var checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = item.feito;
                    checkbox.addEventListener('change', function() {
                        item.feito = this.checked;
                    });
                    itemProduto.appendChild(checkbox);
    
                    var label = document.createElement('label');
                    label.textContent = item.produto;
                    itemProduto.appendChild(label);
    
                    var btnExcluir = document.createElement('button');
                    btnExcluir.textContent = 'Excluir';
                    btnExcluir.addEventListener('click', function() {
                        produtos.splice(index, 1);
                        atualizarListaCompras();
                    });
                    itemProduto.appendChild(btnExcluir);
    
                    listItemProdutos.appendChild(itemProduto);
                });
    
                listaCompras.appendChild(listItemProdutos);
            }
        });
    }
    
}
