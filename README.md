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

## 🏗️ Estrutura do Projeto

O projeto foi desenvolvido focando em **Acessibilidade** e **Baixa Latência**, não dependendo de frameworks pesados para rodar em qualquer dispositivo escolar.

```bash
Projeto-AID/
├── index.html          # Menu Principal (Login da Agência)
├── missao_1a.html      # Fase 1: Probabilidade Independente
├── missao_1b.html      # Fase 1: Probabilidade Dependente
├── missao_2.html       # Fase 2: Análise de Gráficos (Fake News)
├── missao_fase3.html   # Fase 3: Escolha de Gráficos
├── missao_fase4.html   # Fase 4: Cálculo de Média/Moda/Mediana
└── README.md           # Documentação
