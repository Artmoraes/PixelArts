window.onload = function() { //Roda todo o código JavaScript apartir do momento em que a página é carregada.
    let basePixels = 5; //PIXEL, esta é a base de quantos pixels terão cada linha
    let rightPixels = 5; //PIXEL, esta variável serve para definir quantos blocos serão criados por Coluna-X-Linha
    let lines = document.getElementsByClassName("linePixelColor"); //PIXEL, atribui o valor do linePixelColor do CSS a variável
    let pixel = document.getElementsByClassName("pixel") //Elemento CSS da classe pixel.
    let selected = document.getElementsByClassName("selected"); //Seleciona o elemento que possuir a classa selected.
    let color0 = document.getElementById("color0"); //Seleciona o ID da paleta de cores.
    let color1 = document.getElementById("color1"); //Seleciona o ID da paleta de cores.
    let color2 = document.getElementById("color2"); //Seleciona o ID da paleta de cores.
    let color3 = document.getElementById("color3"); //Seleciona o ID da paleta de cores.
    let clear = document.getElementById("clear"); //Seleciona pelo DOM o botão Clear.
    let alterarPixel = document.getElementById("regularPixel"); //Seleciona pelo DOM o botão Ajustar Pixel.
    let textPixel = document.getElementById("textPixel"); //Seleciona a caixa de texto Input.

    //Criar uma função para preencher as linhas com pixel = OK;
    //Criar uma função para preencher a linha da paleta de cores = OK;
    //Criar uma função para alterar as cores = OK;
    //Criar uma função para coletar a cor = OK;
    //Criar uma função para pintar o pixel = OK;

    fillPixels(lines); //Invoca a função FillPixels.
    randomColor(); //Função construída para sempre alterar a cor da paleta principal.
    sessionStorage.setItem('color', 'black'); //Declara que a primeira cor selecionada, é a preta
    color0.addEventListener("click", selecionar); //Evento de seleção de cor através do click.
    color1.addEventListener("click", selecionar); //Evento de seleção de cor através do click.
    color2.addEventListener("click", selecionar); //Evento de seleção de cor através do click.
    color3.addEventListener("click", selecionar); //Evento de seleção de cor através do click.
    clear.addEventListener("click", clearBoard); //Evento para limpar a tela de pixels.
    alterarPixel.addEventListener("click", regularPixel); //Função para conferir se a entrada do valor é válida e alterar, função não concluída.

    function regularPixel() { //Função para alterar tamanho do pixel.
        let valorAlterado = textPixel; //Ela recebe o valor alterado do ID textPixel.
        valorAlterado = textPixel.value; //Atribui o valor a variável do bloco.
        if (!isNaN(valorAlterado)) { //Confere se a entrada é um número ou uma letra.
            if (valorAlterado) { //Caso seja número, ele prossegue para esta aba.
                if (0 == valorAlterado) { //Se o valor for igual 0, dará uma mensagem de valor inválido.
                    alert("Valor inválido. Insira um valor válido de 1 até 50 pixels.");
                } else if (1 <= valorAlterado && valorAlterado <= 50) { //Caso o valor seja maior que 1 e menor que 50, ele prossegue como valor correto.
                    alert("Alterando valores, pi pi pô pô!" + " Agora os pixels terão o tamanho de: " + valorAlterado + "px");
                    sessionStorage.setItem('textPixel', valorAlterado); //armazena na sessão o valor para continuar salvo e alterar ou excluir mais tarde.
                    clean(); //Limpa a tela de pixels.
                } else { //Caso o valor seja inválido maior que 50 ou abaixo de 0, exibira um pop-up de erro.
                    alert("Valor inválido. Insira um valor válido de 1 até 50 pixels.");
                }
            } else if (valorAlterado == "") { //Caso o valor seja vazio, exibirá essa mensagem abaixo.
                alert("Valor inválido. Insira um valor válido de 1 até 50 pixels.");
            }
            
        } else { //Se a entrada for uma letra, exibirá essa mensagem abaixo.
            alert("Letras não são um valor possível de ser lido.");
        }
    }

    function clearBoard() { //Função feita para limpar a tela de pixels.
        for (let i = 0; i < pixel.length; i++) { //Loop que percore todos os pixels da tela.
            pixel[i].style.backgroundColor = 'white'; //Função para limpar os pixels fazendo eles voltarem a cor normal.
        }
        alert('Pixels limpos com sucesso!'); //Função de alerta para mostrar quando o botão for pressionado.
    }

    function clean() { //Função feita exclusivamente para limpar a tela no RegularPixel().
        for (let i = 0; i < pixel.length; i++) { //Loop que percore todos os pixels da tela.
            pixel[i].style.backgroundColor = 'white'; //Função para limpar os pixels fazendo eles voltarem a cor normal.
        }
    }

    function selecionar(event) { //Recebi ajuda através da Thread e Review do Mauro Marchesan e Raphael Martins, serviu para me esclarecer umas dúvidas.
        let selecionado = event.target; //Serve para declarar a detecção de uma função.
        let selectedOnOff = getComputedStyle(selecionado, null); //Declara que ainda não foi selecionado nada, por isso está false.
        let colorPaint = selectedOnOff.getPropertyValue("background-color"); //Declara que color terá o valor de background-color para alterar a "parede" do pixel
        if (selecionado.className !== "color selected") { //Compara se ambas tem valor diferente.
            while (selected.length > 0) { //O que tiver valor igual, será apagado
                selected[0].classList.remove('selected'); //loop que remove a classe que possuir o nome selected.
            }
            selecionado.classList.add("selected"); //O que for selecionado, terá o className alterado para color selected
        }
        sessionStorage.setItem('color', colorPaint); //Adiciona na memória flash do browser o valor da cor, que ao fechar a guia, será apagado.
    }

    function paintPixel(event) { //Recebi ajuda através da Thread e Review do Mauro Marchesan e Raphael Martins, serviu para me esclarecer umas dúvidas.
        let paintedPixel = event.target; //Serve para declarar a detecção de uma função.
        let color = sessionStorage.getItem("color"); //Lê qual é o valor armazenado na sessão color.
        paintedPixel.style.backgroundColor = color; //Pinta o pixel selecionado, altera o valor para o coletado na variável color.
    }

    function randomColor() { //Função que gera cores automaticamente.
        color0.style.backgroundColor = 'black'; //Define que a primeira cor é preta.
        for (let i = 0; i < 4; i++) {
            let color = Math.floor(Math.random() * 16777215).toString(16); //Fórmula para gerar cores de forma automática
            if (i == 1) {
                color1.style.backgroundColor = '#' + color; //Atribui a cada cor, um valor gerado pela fórmula e atribuído a variável color.
            }
            if (i == 2) {
                color2.style.backgroundColor = '#' + color; //Atribui a cada cor, um valor gerado pela fórmula e atribuído a variável color.
            }
            if (i == 3) {
                color3.style.backgroundColor = '#' + color; //Atribui a cada cor, um valor gerado pela fórmula e atribuído a variável color.
            }
        }
    }

    //Passa por todos as linhas (div com class line) e preenche o quadro.  (Me inspirei no código da dinâmica da pirâmide). 
    function fillPixels(lines) { //Função para montar a linha de pixels
        for (let i = 0; i < lines.length; i++) { //Loop que percorre todas as linhas possíveis
            fillLine(lines[i]); //A cada linha cria um conjunto de pixels
        }
    }

    //Cria uma caixa com base nas diferentes classes (Me inspirei no código da dinâmica da pirâmide).
    function createPixel(className) { //Função para criar um pixel puxando do CSS as especificações
        let pixel = document.createElement("div"); //Cria um elemento HTML do tipo div.
        pixel.className = className; //Recebe o parâmetro e adiciona ao pixel
        return pixel; //retorna o valor;
    }

    //Preenche uma linha (Me inspirei no código da dinâmica da pirâmide).
    function fillLine(divLine) {
        for (let lineColumn = 1; lineColumn <= basePixels; lineColumn++) { //Percore a linha de colunas
            if (lineColumn <= rightPixels) { //Preenche uma linha com pixels
                let pixel = createPixel("pixel"); //Cria um pixel e acrescenta ao array de pixels
                divLine.appendChild(pixel); //Falta colocar borda sólida preta em cada pixel criado
                pixel.addEventListener("click", paintPixel); //Acrescenta a cor ao pixel, vem direto da função paintPixel.
                //pixel.addEventListener("click", clearBoard);
            }
        }
    }
}