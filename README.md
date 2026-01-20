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
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização com tema hacker |
| JavaScript (ES6+) | Lógica do jogo e interatividade |
| Font Awesome 6.4.0 | Ícones |
| Google Fonts | Fonte "Courier New" |

---

## 🏗️ Estrutura do Projeto

```bash
Projeto-AID/
├── index.html              # Menu principal
├── missao_1a.html          # Fase 1A: Cofre Digital (Eventos Independentes)
├── missao_1b.html          # Fase 1B: Servidor (Eventos Dependentes)
├── missao_2.html           # Fase 2: Análise de Gráficos (Fake News)
├── missao_fase3.html       # Fase 3: Sincronização de Dados
├── missao_fase4.html       # Fase 4: Cálculo de Média/Moda/Mediana
├── footer.js               # Efeitos visuais (Matrix Rain) e rodapé
└── README.md               # Documentação
```

---

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/profsergioericmatematica/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados.git
   ```

2. **Navegue até a pasta:**
   ```bash
   cd Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados
   ```

3. **Execute com um servidor local:**
   - Método 1: Abra `index.html` diretamente no navegador
   - Método 2: Use extensão "Live Server" no VS Code
   - Método 3: Python: `python -m http.server 8000`

---

## 🕵️‍♂️ As Missões (Fases do Jogo)

O jogo é dividido em 4 missões modulares, cada uma focada em uma habilidade específica da BNCC:

### 🔓 Missão 1: A Invasão (Probabilidade)
- **Parte A (Cofre Digital):** Aborda **Eventos Independentes**. O aluno deve compreender que o "reset" de uma senha digital mantém a probabilidade inalterada (com reposição).
- **Parte B (Servidor de Arquivos):** Aborda **Eventos Dependentes**. O aluno visualiza a alteração do espaço amostral ao remover pastas físicas de um arquivo (sem reposição).

### 👁️ Missão 2: Detector de Fraudes (Leitura Crítica)
- O aluno atua como perito forense analisando notícias falsas.
- **Desafio:** Identificar gráficos manipulados pela mídia (ex: eixos truncados, escalas desproporcionais e omissão de dados).

### 🔄 Missão 3: Sincronização de Dados (Visualização)
- Um desafio de associação cognitiva e agilidade.
- **Desafio:** Conectar corretamente tipos de variáveis (Tempo, Comparação, Proporção) aos tipos de gráficos adequados (Linha, Colunas, Setores).

### 🏆 Missão 4: A Decodificação Final (Estatística Aplicada)
- O desafio final para neutralizar o sistema vilão.
- **Desafio:** Calcular manualmente as Medidas de Tendência Central (**Média, Moda e Mediana**) para quebrar a criptografia final.

---

## 🧠 Metodologia e Abordagem Pedagógica

Este projeto foi fundamentado em metodologias ativas de aprendizagem, alinhadas às diretrizes do Projeto Pedagógico do Curso (PPC) da UNIVESP.

### 1. Metodologia de Desenvolvimento (Design Thinking)

Utilizamos a abordagem do **Design Thinking** para estruturar a concepção do produto educacional:

* **Empatia:** Focamos em entender a dificuldade real dos alunos com a abstração estatística e a ansiedade matemática.
* **Definição:** Delimitamos o problema e criamos a narrativa de "Investigação" para dar sentido prático aos dados.
* **Ideação:** Brainstorming para criação do roteiro do "Agente Sigma" e a estruturação das 4 missões.
* **Prototipagem:** Desenvolvimento incremental dos códigos HTML/JS modulares (Fases 1 a 4).
* **Teste:** Validação técnica e pedagógica em cada etapa para corrigir erros (bugs) e refinar o sistema de feedback.

### 2. Metodologia de Ensino

A aplicação pedagógica do jogo baseia-se em três pilares principais:

* **Aprendizagem Baseada em Problemas (PBL):** O aluno não recebe o conteúdo passivamente. Ele é colocado diante de um "problema" (um crime cibernético, uma senha bloqueada, uma fraude na mídia) e precisa buscar o conhecimento matemático como ferramenta para resolvê-lo.
* **Aprendizado Baseado em Jogos (ABJ):** Utilização do jogo digital como ferramenta de engajamento, imersão e motivação.
* **Contextualização:** Transformação de conceitos abstratos (Média, Moda, Probabilidade) em ferramentas concretas de investigação forense.

### 3. Sistema de Feedback e Andaimagem (Scaffolding)

O jogo utiliza o conceito de **Andaimagem** (*Scaffolding*). O sistema não apenas aponta o erro, mas oferece suporte temporário para que o aluno construa o conhecimento na próxima tentativa.

| Tipo de Andaime | Onde aparece (A.I.D.) | Como funciona na prática |
| --- | --- | --- |
| **Andaime de Suporte** | **Agente Sigma** | Quando o aluno erra, o Agente Sigma não diz apenas "Incorreto". Ele fornece uma dica conceitual (ex: *"Lembre-se: eventos independentes não têm memória"*), sustentando o aluno sem dar a resposta pronta. |
| **Andaime Visual** | **Fase das Pastas** | Quando uma pasta vazia é removida da tela, o aluno recebe apoio visual para compreender que o denominador da fração mudou (ex: de 5 para 4). O conceito abstrato torna-se concreto e visível. |
| **Andaime de Restrição** | **Bloqueio de Erro** | Na Fase 1, se o aluno erra, o jogo trava momentaneamente e obriga a resposta de uma pergunta teórica ("A chance mudou ou é igual?"). Isso impede a "tentativa e erro" cega e força a reflexão cognitiva. |

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

* **Jogue Agora:** [Clique aqui para acessar o Jogo](https://profsergioericmatematica.github.io/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados/)
* **Repositório:** [Código Fonte no GitHub](https://github.com/profsergioericmatematica/Projeto-Integrador-IV-UNIVESP-AID-Agencia-de-Investigao-de-Dados)
* **Instituição:** [UNIVESP](https://www.univesp.br)

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<p align="center">
  Desenvolvido com 💙, 🔢 e 🎮 para a educação matemática brasileira
</p>
<p align="center">
*"A matemática é a linguagem com a qual Deus escreveu o universo." — Galileu Galilei*
</p>
---
<p align="center">
**Última atualização: Janeiro 2026**
</p>
