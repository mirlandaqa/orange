## Casos de Teste -  Login

### 1. Verificar se é possível realizar login no sistema com login e senha válidos.
**Teste Automatizado: `Should login with a valid user`**
- **Pré-condições**: O usuário deve ter uma conta válida.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo "Usuário" com um nome de usuário válido.
  3. Preencher o campo "Senha" com uma senha válida.
  4. Clicar no botão "Login".
- **Resultado Esperado**: O usuário deve ser redirecionado para a página padrão do sistema

---

### 2. Verificar se ao clicar em "Esqueci senha", o usuário é redirecionado para a tela para cadastrar uma nova senha.
**Teste Automatizado: `Should show popup to reset password`**
- **Pré-condições**: O usuário está na página de login.
- **Passos**:
  1. Acessar a página de login.
  2. Clicar no link "Esqueci senha".
- **Resultado Esperado**: O usuário deve ser redirecionado para a página de recuperação de senha.

---

### 3. Verificar se é possível resetar a senha e confirmar.
**Teste Automatizado: `Should be able to reset the password`**
- **Pré-condições**: O usuário deve estar na página de recuperação de senha.
- **Passos**:
  1. Acessar a página de recuperação de senha.
  2. Preencher o campo de e-mail com o e-mail associado à conta.
  3. Clicar no botão "Enviar".
  4. Seguir o link enviado para o e-mail.
  5. Preencher o novo campo de senha.
  6. Confirmar a nova senha.
  7. Clicar no botão "Salvar".
- **Resultado Esperado**: O usuário deve receber uma mensagem de confirmação de que a senha foi redefinida com sucesso.

---

### 4. Verificar se, ao abrir a página de login, o foco é exibido no campo do usuário.
**Teste Automatizado: `Should show focus on the username field`**
- **Pré-condições**: A página de login está acessível.
- **Passos**:
  1. Acessar a página de login.
- **Resultado Esperado**: O foco deve estar no campo "Usuário" assim que a página for carregada.


### 5. Verificar se é possível realizar login somente quando os campos obrigatórios são preenchidos corretamente.
**Teste automatizado: `Should validate required fields`**
- **Pré-condições**: O usuário deve ter uma conta válida.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo "Usuário" com um nome de usuário válido.
  3. Preencher o campo "Senha" com uma senha válida.
  4. Clicar no botão "Login".
- **Resultado Esperado**: O usuário deve ser redirecionado para a página inicial do sistema, e a mensagem de boas-vindas deve ser exibida.

---

### 6. Verificar se, ao preencher usuário inválido, o sistema não permite realizar login no sistema.
**Teste automatizado: `Should show error message for invalid user`**
- **Pré-condições**: O usuário deve estar na página de login.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo "Usuário" com um nome de usuário inválido.
  3. Preencher o campo "Senha" com uma senha válida.
  4. Clicar no botão "Login".
- **Resultado Esperado**: O sistema deve exibir uma mensagem de erro informando que as credenciais estão incorretas, e o usuário deve permanecer na página de login.

---

### 7. Verificar se, ao preencher senha inválida, o sistema não permite realizar login no sistema.
**Teste automatizado: `Should show error message for invalid password`**
- **Pré-condições**: O usuário deve estar na página de login.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo "Usuário" com um nome de usuário válido.
  3. Preencher o campo "Senha" com uma senha inválida.
  4. Clicar no botão "Login".
- **Resultado Esperado**: O sistema deve exibir uma mensagem de erro informando que as credenciais estão incorretas, e o usuário deve permanecer na página de login.

---

### 8. Verificar se a tela de login é exibida após clicar em Cancelar na tela de resetar senha.
**Teste automatizado: `Should return to login screen when clicking Cancel in reset password page`**
- **Pré-condições**: O usuário deve estar na página de recuperação de senha.
- **Passos**:
  1. Acessar a página de recuperação de senha.
  2. Clicar no botão "Cancelar".
- **Resultado Esperado**: O usuário deve ser redirecionado para a página de login.

## Casos de Teste -  Menu

### 1. Verificar se as opções do menu estão corretas.
**Teste automatizado: `Should show the correct menu options`**
- **Pré-condições**: O usuário deve estar logado no sistema.
- **Passos**:
  1. Acessar a página inicial após o login.
  2. Obter a lista de opções disponíveis no menu.
- **Resultado Esperado**: As opções do menu devem corresponder à lista esperada:
  - 'Admin'
  - 'PIM'
  - 'Leave'
  - 'Time'
  - 'Recruitment'
  - 'My Info'
  - 'Performance'
  - 'Dashboard'
  - 'Directory'
  - 'Maintenance'
  - 'Claim'
  - 'Buzz'

---

### 2. Validar se o menu Dashboard é selecionado por padrão, após o login no sistema.
**Teste automatizado: `Validates that the Dashboard menu is selected after logging in`**
- **Pré-condições**: O usuário deve estar logado no sistema.
- **Passos**:
  1. Acessar a página inicial após o login.
  2. Verificar qual menu está marcado como ativo.
- **Resultado Esperado**: O menu "Dashboard" deve estar selecionado (ativo).

---

### 3. Validar que o resultado correto é retornado após pesquisar por um menu.
**Teste automatizado: `Validates searching for a menu by name`**
- **Pré-condições**: O usuário deve estar logado no sistema.
- **Passos**:
  1. Acessar a página inicial.
  2. Digitar "Leave" no campo de pesquisa do menu.
  3. Observar os resultados retornados.
- **Resultado Esperado**: O menu "Leave" deve ser exibido nos resultados da pesquisa.

---

### 4. Validar que é possível exibir outras telas ao clicar em outro menu.
**Teste automatizado: `Valid that another menu is opened when it is clicked`**
- **Pré-condições**: O usuário deve estar logado no sistema.
- **Passos**:
  1. Acessar a página inicial após o login.
  2. Clicar em um menu diferente de "Dashboard" (por exemplo, "Admin").
- **Resultado Esperado**: O usuário deve ser redirecionado para a tela correspondente ao menu clicado (por exemplo, a página de administração).

---

### 5. Validar se nenhum resultado é exibido após pesquisar por um menu inexistente.
**Teste automatizado: `Validates that no menu is returned for an invalid search`**
- **Pré-condições**: O usuário deve estar logado no sistema.
- **Passos**:
  1. Acessar a página inicial.
  2. Digitar "MenuInexistente" no campo de pesquisa do menu.
  3. Observar os resultados retornados.
- **Resultado Esperado**: Nenhum resultado deve ser exibido, e uma mensagem informando que nenhum item foi encontrado deve ser mostrada.

## Casos de Teste -  PIM (Formulário de Funcionário)

### 1. Verificar se é possível salvar formulário de funcionário sem preencher os detalhes do login.
**Teste automatizado: `Should save new employee form without filling login details`**
- **Pré-condições**: O usuário deve estar logado no sistema e na tela de adicionar funcionário.
- **Passos**:
  1. Acessar a página de adicionar funcionário.
  2. Preencher os campos obrigatórios: "Primeiro Nome", "Nome do Meio" e "Último Nome".
  3. Não preencher os campos de detalhes de login (como nome de usuário e senha).
  4. Clicar no botão "Salvar".
- **Resultado Esperado**: O formulário deve ser salvo com sucesso, e uma mensagem de sucesso deve ser exibida. O usuário deve ser redirecionado para a lista de funcionários.

---

### 2. Verificar se é possível salvar formulário de funcionário com os detalhes do login.
**Teste automatizado: `Should save new employee form with login details`**
- **Pré-condições**: O usuário deve estar logado no sistema e na tela de adicionar funcionário.
- **Passos**:
  1. Acessar a página de adicionar funcionário.
  2. Preencher os campos obrigatórios: "Primeiro Nome", "Nome do Meio" e "Último Nome".
  3. Preencher os campos de detalhes de login (nome de usuário e senha).
  4. Clicar no botão "Salvar".
- **Resultado Esperado**: O formulário deve ser salvo com sucesso, e uma mensagem de sucesso deve ser exibida. O usuário deve ser redirecionado para a lista de funcionários.

---

### 3. Verificar se não é possível salvar formulário sem preencher os campos obrigatórios.
**Teste automatizado: `Should prevent saving an employee when required fields are missing`**
- **Pré-condições**: O usuário deve estar logado no sistema e na tela de adicionar funcionário.
- **Passos**:
  1. Acessar a página de adicionar funcionário.
  2. Não preencher nenhum dos campos obrigatórios.
  3. Clicar no botão "Salvar".
- **Resultado Esperado**: O sistema deve exibir mensagens de erro para os campos obrigatórios não preenchidos, e o formulário não deve ser salvo.

