# ⚡ Frontend Mentor Todo App

## 📝 Descrição do Projeto
Aplicação de lista de tarefas criada com React, TypeScript, Tailwind CSS, e Vite. O projeto simula um gerenciador de tarefas com filtros, tema claro/escuro e funções de adicionar, concluir, remover e limpar itens concluídos.

O app foi desenvolvido como um desafio de frontend para treinar componentes reutilizáveis, hooks personalizados e contexto de tema.

## 🔎 Funcionalidades
- Responsivo para desktop e mobile
- Alternância de tema Dark/Light
- Adicionar novas tarefas através do formulário
- Marcar tarefas como concluídas
- Filtrar tarefas por:
  - All
  - Active
  - Completed
- Limpar todas as tarefas concluídas
- Remover tarefas individualmente
- Botão de refresh para simular recarregar dados
- Uso de hook customizado `useTodo` para gerenciar estado e filtros

## 🛠️ Ferramentas utilizadas
- **React:** Estrutura de interface e lógica dos componentes
- **TypeScript:** Tipagem segura para componentes, hooks e dados
- **Vite:** Servidor de desenvolvimento rápido e build
- **CSS:** Estilização do layout, responsividade e temas
- **Git:** Controle de versão
- **SVG:** Ícones para o botão de tema e ações do todo

## 🎨 Imagens do projeto
<div align="center">
<img src="./public/images/screenshot-desktop.gif"  style="height: 300px; text-align: center;"> 
<br><br>
<img src="./public/images/screenshot-mobile.gif"  style="height: 300px; text-align: center;"> <br>
</div>

## 💡 Decisões do projeto
1. **Hook customizado para todo**
   - O `useTodo` centraliza a lógica de carregamento, adição, filtro, conclusão e remoção de tarefas.
2. **Tema via contexto**
   - O `ThemeContext` permite alternar entre `light` e `dark` em toda a aplicação.
3. **Filtro de tarefas no componente**
   - A lista é renderizada de acordo com o estado `filter`, o que mantém os dados organizados e claros.
4. **Simulação de fetch**
   - O `getTodos()` usa `setTimeout` para simular o carregamento de dados de uma API.

## 💦 Dificuldades do projeto
- Entender a melhor forma de separar a lógica entre componentes e o hook customizado.
- Implementar o filtro `All / Active / Completed` com atualização dinâmica da lista.
- Criar a alternância de tema usando contexto e manter o layout consistente em ambos os temas.
- Tratar a remoção da tarefa com confirmação via `window.confirm`.

## 🔓 O que eu aprendi
- Como criar e usar um hook customizado em React (`useTodo`).
- Como trabalhar com `useContext` e `ThemeContext` para alternar tema.
- Como filtrar arrays de tarefas sem alterar o estado original.
- Como simular um carregamento assíncrono usando `useEffect` e `setTimeout`.
- A importância de manter componentes pequenos e com responsabilidade única.

## 💭 Possíveis atualizações futuras
- Persistir os todos no `localStorage`.
- Adicionar validação e feedback de erro para o formulário.
- Implementar funcionalidade de arrastar e soltar para reordenar tarefas.
- Adicionar animações de transição entre temas.
- Criar página de resumo ou histórico de tarefas.
- Implementar testes unitários para o hook e componentes.

## 🚀 Como rodar o projeto
Siga os passos abaixo para executar o app na sua máquina:

### Pré-requisitos
- **Node.js** e **npm** instalados

### Passos
1. Abra o terminal no diretório do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador em:
   ```bash
   http://localhost:5173
   ```
