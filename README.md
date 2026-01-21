# 🕵️‍♂️ A.I.D. - Agência de Investigação de Dados

> Projeto Integrador IV | Licenciatura em Matemática | UNIVESP | Produto Educacional (REA)

[![UNIVESP](https://img.shields.io/badge/UNIVESP-Projeto_Integrador_IV-red)](https://univesp.br)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Público](https://img.shields.io/badge/Público-9º_Ano_EF-blue)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> **A.I.D. (Agência de Investigação de Dados)** é um Webgame narrativo desenvolvido para estudantes do 9º Ano do Ensino Fundamental. O aluno assume o papel de um investigador que utiliza a **Matemática** e a **Estatística** para combater a desinformação e resolver crimes cibernéticos.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como produto final do **Projeto Integrador IV** do curso de Licenciatura em Matemática da **UNIVESP**. 

O objetivo é promover o **Letramento Estatístico** e a compreensão de **Probabilidade** através de uma abordagem gamificada e narrativa (*storytelling*). O jogo busca contextualizar conceitos abstratos (como eventos dependentes e leitura de gráficos) em situações de "investigação", desenvolvendo o pensamento crítico contra manipulações de dados na mídia.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|------------|----------------|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilização responsiva com tema "Hacker/Cyberpunk" |
| JavaScript (ES6+) | Lógica do jogo, manipulação do DOM e Canvas |
| LocalStorage | Persistência de dados para geração de relatórios |
| Font Awesome | Ícones visuais |

---

## 🏗️ Estrutura do Projeto

```bash
Projeto-AID/
├── index.html          # Menu principal e Login
├── missao_1a.html      # Fase 1A: Cofre Digital (Eventos Independentes)
├── missao_1b.html      # Fase 1B: Servidor (Eventos Dependentes)
├── missao_2.html       # Fase 2: Análise de Gráficos (Eixos Truncados)
├── missao_fase3.html   # Fase 3: Sincronização (Tipos de Gráficos)
├── missao_fase4.html   # Fase 4: Cálculo de Média/Moda/Mediana
├── footer.js           # Script global: Rodapé, Matrix Rain e Bibliotecas
└── README.md           # Documentação

```

---

## 🚀 Como Executar

1. **Acesse Online (GitHub Pages):**
[Clique aqui para jogar](https://profsergioericmatematica.github.io/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados/)
2. **Ou execute localmente:**
* Clone o repositório:
```bash
git clone [https://github.com/profsergioericmatematica/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados.git](https://github.com/profsergioericmatematica/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados.git)

```


* Abra o arquivo `index.html` em qualquer navegador moderno.



---

## 🕵️‍♂️ As Missões (Fases do Jogo)

O jogo é dividido em 4 missões modulares, alinhadas à BNCC:

### 🔓 Missão 1: A Invasão (Probabilidade)

* **Parte A (Cofre Digital):** Aborda **Eventos Independentes**. O aluno deve compreender que o "reset" de uma senha digital mantém a probabilidade inalterada.
* **Parte B (Servidor de Arquivos):** Aborda **Eventos Dependentes**. O aluno visualiza a alteração do espaço amostral ao remover pastas de um arquivo.

### 👁️ Missão 2: Detector de Fraudes (Leitura Crítica)

* O aluno atua como perito forense analisando notícias falsas.
* **Desafio:** Identificar gráficos manipulados pela mídia (Eixos Truncados e escalas desproporcionais).

### 🔄 Missão 3: Sincronização de Dados (Visualização)

* Um desafio de associação cognitiva.
* **Desafio:** Conectar corretamente tipos de variáveis (Tempo, Comparação, Proporção) aos tipos de gráficos adequados.

### 🏆 Missão 4: A Decodificação Final (Estatística Aplicada)

* O desafio final para neutralizar o sistema vilão.
* **Desafio:** Calcular manualmente **Média, Moda e Mediana** para quebrar a criptografia.

---

## 📊 Diferencial: Learning Analytics (Relatório de Desempenho)

Um dos grandes diferenciais deste REA é o sistema de **rastreamento de aprendizagem**.
Ao final do jogo, o sistema gera automaticamente um **arquivo .TXT** para download contendo:

1. **Tempo de Resposta:** Quanto tempo o aluno levou em cada fase (diferenciando reflexão de "chute").
2. **Diagnóstico de Erros:** Registro exato de qual erro conceitual foi cometido (ex: *"Tentou ligar Gráfico de Pizza com Variável Tempo"*).
3. **Inputs do Aluno:** Mostra os valores que o aluno calculou erroneamente antes de acertar.

Isso permite ao professor utilizar o jogo como **ferramenta diagnóstica**.

---

## 🧠 Metodologia e Abordagem Pedagógica

Este projeto foi fundamentado em metodologias ativas, alinhadas ao PPC da UNIVESP.

### 1. Metodologia de Desenvolvimento (Design Thinking)

Utilizamos a abordagem do **Design Thinking**:

* **Empatia:** Entender a ansiedade matemática dos alunos.
* **Definição:** Criar uma narrativa de "Investigação" para dar sentido aos dados.
* **Ideação:** Roteiro do "Agente Sigma" e estruturação das missões.
* **Prototipagem:** Desenvolvimento incremental dos códigos.
* **Teste:** Validação técnica e pedagógica.

### 2. Metodologia de Ensino

A aplicação pedagógica do jogo baseia-se em três pilares principais:

* **Aprendizagem Baseada em Problemas (PBL):** O aluno não recebe o conteúdo passivamente. Ele é colocado diante de um "problema" (um crime cibernético, uma senha bloqueada, uma fraude na mídia) e precisa buscar o conhecimento matemático como ferramenta para resolvê-lo.
* **Aprendizado Baseado em Jogos (ABJ):** Utilização do jogo digital como ferramenta de engajamento, imersão e motivação.
* **Contextualização:** Transformação de conceitos abstratos (Média, Moda, Probabilidade) em ferramentas concretas de investigação forense.


### 3. Sistema de Andaimagem (Scaffolding)

O jogo utiliza **Andaimagem**. O sistema não apenas aponta o erro, mas oferece suporte temporário:

| Tipo de Andaime | Onde aparece | Como funciona na prática |
| --- | --- | --- |
| **Suporte Conceitual** | **Agente Sigma** | Fornece dicas conceituais ao errar (ex: *"Eventos independentes não têm memória"*). |
| **Suporte Visual** | **Fase das Pastas** | Ao remover uma pasta, o aluno vê visualmente a fração mudando. |
| **Restrição** | **Bloqueio de Erro** | Impede o avanço por "tentativa e erro", forçando a reflexão. |

---

## 📚 Recursos Educacionais e BNCC

O projeto atende às competências específicas de Matemática do 9º Ano:

* **Competência 1:** Utilizar conhecimentos matemáticos para resolver problemas.
* **Competência 5:** Utilizar tecnologias digitais para aprendizagem.
* **Habilidades:** EF09MA20, EF09MA21, EF09MA22, EF09MA23.

---

## 🧪 Testes e Validação

O projeto passou por:
- ✅ Testes de funcionalidade em diferentes navegadores
- ✅ Validação HTML/CSS
- ✅ Testes de responsividade (mobile/desktop)
- ✅ Validação pedagógica com professores
- ✅ Teste com público-alvo (alunos do 9º ano)

---

## 📚 Referências

- BNCC (Base Nacional Comum Curricular) - Matemática
- PPC (Projeto Pedagógico do Curso) - UNIVESP
- ZABALA, A. A prática educativa: como ensinar. Porto Alegre: Artmed, 1998.
- PERRENOUD, P. Dez novas competências para ensinar. Porto Alegre: Artmed, 2000.

---

## 👥 Equipe de Desenvolvimento

**Projeto Integrador IV - Licenciatura em Matemática - UNIVESP**

| Integrantes do Grupo |
| --- |
| **Antonio Antunes Junior** |
| **Flávio Rabelo Barros** |
| **Giovani Machado de Lima** |
| **Mariane Mendes Coutinho** |
| **Priscilla Santiago Zamorra** |
| **Rodrigo Aires de Medeiros Correa** |
| **Sergio Eric Reis de Oliveira** |
| **Vitor Correa Uberti** |

---

## 📞 Contato e Acesso

* **Jogue Agora:** [Acessar Webgame A.I.D.](https://profsergioericmatematica.github.io/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados/)
* **Repositório:** [GitHub](https://github.com/profsergioericmatematica/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados)
* **Instituição:** [UNIVESP](https://www.univesp.br)

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para detalhes.

---

<p align="center">
<strong>Desenvolvido com 💙, 🔢 e 🎮 para a educação matemática brasileira</strong>
</p>

<p align="center">
<em>"A matemática é a linguagem com a qual Deus escreveu o universo."</em>
</p>



<p align="center">
<em>— Galileu Galilei</em>
</p>

<p align="center">
<strong>Última atualização: Janeiro 2026</strong>
</p>

```

```




