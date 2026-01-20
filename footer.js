document.addEventListener("DOMContentLoaded", function() {
    
    // ==================================================================
    // PARTE 1: EFEITO MATRIX RAIN (CHUVA DIGITAL)
    // ==================================================================
    
    // 1. Criar o elemento Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 2. Estilizar o Canvas para ficar no fundo
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-10'; // Coloca atrás de tudo
    canvas.style.opacity = '0.8'; // Um pouco transparente para não atrapalhar a leitura
    canvas.style.pointerEvents = 'none'; // Garante que não bloqueie cliques no jogo
    
    // Adiciona ao corpo da página antes de qualquer outra coisa
    document.body.insertBefore(canvas, document.body.firstChild);

    // 3. Configurar dimensões
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // 4. Configurar os caracteres da chuva
    // Usaremos Katakana (japonês) + Números + Letras maiúsculas para o visual clássico
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    const fontSize = 14;
    let columns = width / fontSize; // Quantidade de colunas baseado na largura

    // 5. Array para controlar a posição vertical (y) de cada gota
    let drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Começam em alturas diferentes fora da tela
    }

    // 6. Função de Desenho (O Loop da Animação)
    function drawMatrix() {
        // Preenche a tela com preto semi-transparente para criar o efeito de rastro
        // Quanto menor a opacidade (0.05), mais longo o rastro
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#00ff41'; // Cor Verde Neon do Projeto
        ctx.font = fontSize + 'px monospace';

        // Loop pelas colunas
        for (let i = 0; i < drops.length; i++) {
            // Escolhe um caractere aleatório
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Desenha o caractere na posição x = i*fontSize, y = drops[i]*fontSize
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Move a gota para baixo
            drops[i]++;

            // Se a gota passou do fim da tela, reseta ela para o topo aleatoriamente
            // O Math.random() > 0.975 cria a aleatoriedade para não cair tudo junto
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
        }
        // Chama o próximo quadro da animação
        requestAnimationFrame(drawMatrix);
    }

    // 7. Iniciar a animação
    drawMatrix();

    // 8. Ajustar se a tela mudar de tamanho (girar o celular)
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = width / fontSize;
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }
    });


    // ==================================================================
    // PARTE 2: RODAPÉ (O CÓDIGO QUE JÁ TÍNHAMOS)
    // ==================================================================

    // 1. Garante que o Font Awesome está carregado
    if (!document.querySelector('link[href*="font-awesome"]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }

    // 2. CSS do Rodapé (Estilo Glassmorphism Hacker)
    var style = document.createElement('style');
    style.innerHTML = `
        /* Container Principal - Fundo degradê suave para integrar com a página */
        .game-footer {
            width: 100%;
            /* Fundo semi-transparente para a chuva Matrix aparecer por trás */
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0, 10, 0, 0.8) 50%, #000 100%);
            border-top: 1px solid rgba(0, 255, 65, 0.3); /* Linha muito sutil */
            padding: 40px 20px 20px;
            margin-top: auto; /* Empurra para o final se usar flex */
            color: #ccffcc;
            font-family: 'Courier New', Courier, monospace;
            text-align: center;
            position: relative;
            box-sizing: border-box;
            z-index: 10; /* Garante que o rodapé fique SOBRE a chuva */
        }

        .footer-content {
            max-width: 1000px;
            margin: 0 auto;
        }

        /* Título */
        .footer-title {
            color: #00ff41;
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            opacity: 0.9;
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        /* Fórmulas (Decorativo discreto) */
        .math-formulas {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-bottom: 30px;
            font-size: 20px;
            color: #00ff41;
            opacity: 0.4; /* Bem discreto */
            user-select: none;
        }

        .math-formula:hover {
            opacity: 1;
            transform: scale(1.2);
            text-shadow: 0 0 15px #00ff41;
            transition: 0.3s;
        }

        /* Navegação - Links Limpos (Sem caixas) */
        .footer-nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px; /* Espaçamento generoso */
            margin-bottom: 40px;
        }

        .footer-link {
            color: #fff;
            text-decoration: none;
            font-size: 14px;
            position: relative;
            transition: 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            opacity: 0.7;
        }

        .footer-link i { color: #00ff41; } /* Ícones verdes */

        /* Efeito Hover: Brilho e Opacidade total */
        .footer-link:hover {
            color: #00ff41;
            opacity: 1;
            text-shadow: 0 0 8px rgba(0, 255, 65, 0.6);
        }

        /* Botão GitHub (Destaque sutil) */
        .github-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: rgba(0, 255, 65, 0.1);
            color: #00ff41;
            padding: 10px 20px;
            border-radius: 30px;
            text-decoration: none;
            border: 1px solid rgba(0, 255, 65, 0.4);
            font-weight: bold;
            font-size: 14px;
            transition: 0.3s;
            margin-bottom: 30px;
        }

        .github-btn:hover {
            background-color: #00ff41;
            color: #000;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
        }

        /* Créditos */
        .copyright {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
            font-size: 11px;
            color: #666;
            line-height: 1.6;
        }
        
        .team-names {
            color: #888;
            margin-bottom: 10px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Ajuste para telas pequenas */
        @media (max-width: 600px) {
            .footer-nav {
                flex-direction: column;
                gap: 15px;
            }
            .math-formulas { font-size: 16px; gap: 15px; }
        }
    `;
    document.head.appendChild(style);

    // 3. Estrutura HTML Limpa do Rodapé
    var footerHTML = `
        <div class="footer-content">
            <div class="footer-title">
                <i class="fas fa-graduation-cap"></i> Projeto Integrador IV
            </div>
            
            <div class="math-formulas">
                <span class="math-formula">π</span>
                <span class="math-formula">∑</span>
                <span class="math-formula">∫</span>
                <span class="math-formula">√</span>
                <span class="math-formula">∞</span>
            </div>
            
            <div class="footer-nav">
                <a href="https://univesp.br/" target="_blank" class="footer-link">
                    <i class="fas fa-university"></i> UNIVESP
                </a>
                <span class="footer-link" style="cursor: default;">
                    <i class="fas fa-book"></i> BNCC Matemática
                </span>
                <span class="footer-link" style="cursor: default;">
                    <i class="fas fa-chalkboard-teacher"></i> Licenciatura
                </span>
                <span class="footer-link" style="cursor: default;">
                    <i class="fas fa-chart-pie"></i> Estatística
                </span>
                <span class="footer-link" style="cursor: default;">
                    <i class="fas fa-dice"></i> Probabilidade
                </span>
            </div>
            
            <a href="https://github.com/profsergioericmatematica/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados" class="github-btn" target="_blank">
                <i class="fab fa-github"></i> Ver Código Fonte
            </a>
            
            <div class="copyright">
                <div class="team-names">
                    Antonio Antunes Junior • Flávio Rabelo Barros • Giovani Machado de Lima • Mariane Mendes Coutinho<br>
                    Priscilla Santiago Zamorra • Rodrigo Aires de Medeiros Correa • Sergio Eric Reis de Oliveira • Vitor Correa Uberti
                </div>
                <p>Licenciatura em Matemática - UNIVESP 2026 • Produto Educacional (REA) sob MIT License</p>
            </div>
        </div>
    `;

    // 4. Inserção do Rodapé no DOM
    var footerElement = document.createElement('footer');
    footerElement.className = 'game-footer';
    footerElement.innerHTML = footerHTML;
    document.body.appendChild(footerElement);
});