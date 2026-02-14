# Portfólio — João Pedro

Portfólio pessoal como Desenvolvedor Front-End.

---

# Como colocar no GitHub e pegar o link para o LinkedIn

Siga estes passos na ordem. No final você terá um link (tipo `https://seu-usuario.github.io/portifolio/`) para colocar no LinkedIn e em qualquer lugar.

---

## Parte 1: Criar o repositório no GitHub

1. Entre no site do GitHub e faça login: **[github.com](https://github.com)**

2. Clique no **+** no canto superior direito e escolha **"New repository"** (Novo repositório).

3. Preencha:
   - **Repository name:** `portifolio` (ou outro nome que quiser, ex: `meu-portifolio`)
   - **Description:** pode deixar em branco ou escrever "Meu portfólio"
   - **Public** deve estar marcado
   - **Não marque** "Add a README file"
   - Clique em **"Create repository"**

4. Depois que a página do repositório abrir, **anote a URL** que aparece no topo. Algo como:
   ```text
   https://github.com/SEU-USUARIO/portifolio
   ```
   Troque mentalmente `SEU-USUARIO` pelo seu usuário do GitHub (o que aparece no seu perfil).

---

## Parte 2: Enviar os arquivos do portfólio para o GitHub

1. Abra o **terminal** (PowerShell ou CMD) no Windows.
   - Dica: na pasta do portfólio, você pode clicar na barra de endereço, digitar `cmd` ou `powershell` e apertar Enter.

2. Confirme que está na pasta certa (onde estão `index.html`, `style.css`, `script.js`):
   ```powershell
   cd "C:\Users\joao\Desktop\portifólio"
   ```
   (Ajuste o caminho se a sua pasta estiver em outro lugar.)

3. Rode os comandos abaixo **um por vez**. Quando pedir login do GitHub, use seu usuário e senha (ou token, se tiver configurado).

   **Primeiro: iniciar o Git na pasta**
   ```powershell
   git init
   ```

   **Segundo: adicionar todos os arquivos**
   ```powershell
   git add .
   ```

   **Terceiro: criar o primeiro “commit”**
   ```powershell
   git commit -m "Portfolio inicial"
   ```

   **Quarto: nomear a branch como main**
   ```powershell
   git branch -M main
   ```

   **Quinto: ligar esta pasta ao repositório que você criou**  
   Troque `SEU-USUARIO` pelo seu usuário do GitHub e `portifolio` pelo nome do repositório, se for diferente:
   ```powershell
   git remote add origin https://github.com/SEU-USUARIO/portifolio.git
   ```

   **Sexto: enviar tudo para o GitHub**
   ```powershell
   git push -u origin main
   ```

4. Se der certo, ao atualizar a página do repositório no navegador você verá os arquivos (`index.html`, `style.css`, etc.) lá.

---

## Parte 3: Ativar o GitHub Pages (gerar o link do site)

1. Dentro do repositório no GitHub, clique em **"Settings"** (Configurações).

2. No menu da esquerda, procure **"Pages"** (em "Code and automation") e clique.

3. Em **"Source"** (Build and deployment):
   - Selecione **"Deploy from a branch"**.

4. Em **"Branch"**:
   - Escolha a branch **`main`**.
   - Escolha a pasta **`/ (root)`**.
   - Clique em **"Save"**.

5. Aguarde 1 ou 2 minutos. No topo da mesma página de **Pages** deve aparecer uma caixa azul com algo como:
   ```text
   Your site is live at https://SEU-USUARIO.github.io/portifolio/
   ```

6. **Esse é o seu link.** Copie e guarde. Esse é o endereço que você vai usar no LinkedIn e em qualquer lugar.

---

## Parte 4: Onde colocar o link no LinkedIn

1. Acesse **[linkedin.com](https://www.linkedin.com)** e faça login.

2. **Opção A – No seu perfil (recomendado)**  
   - Clique na sua **foto** ou em **"Eu"** → **"Ver perfil"**.
   - Clique em **"Adicionar seção de perfil"** ou edite a seção **"Informações de contato"**.
   - Procure o campo **"Website"** ou **"Site"** / **"Link"**.
   - Cole o link do portfólio, por exemplo: `https://seu-usuario.github.io/portifolio/`
   - Você pode colocar o texto que aparece no botão, ex: **"Meu portfólio"** ou **"Portfólio"**.
   - Salve.

3. **Opção B – Na seção "Destaques"**  
   - No perfil, na seção **"Destaques"**, clique em **"Adicionar"**.
   - Escolha **"Link"** e cole o endereço do portfólio.
   - Dê um título, por exemplo: **"Portfólio – Projetos e tecnologias"**.

4. **Opção C – Na experiência ou formação**  
   - Ao editar um cargo ou curso, há campo para **"URL"** ou **"Link"**. Você pode colocar o link do portfólio em um item que fale de desenvolvimento web / front-end.

Use o mesmo link em todos os lugares: **https://SEU-USUARIO.github.io/portifolio/** (trocando `SEU-USUARIO` pelo seu usuário do GitHub).

---

## Resumo rápido

| O que fazer | Onde / Como |
|-------------|-------------|
| Criar repositório | GitHub → + → New repository → nome `portifolio` → Create |
| Enviar arquivos | Na pasta do portfólio: `git init` → `git add .` → `git commit -m "Portfolio inicial"` → `git branch -M main` → `git remote add origin https://github.com/SEU-USUARIO/portifolio.git` → `git push -u origin main` |
| Ativar o site | Repositório → Settings → Pages → Deploy from a branch → branch `main`, pasta `/ (root)` → Save |
| Pegar o link | Na página Pages: `https://SEU-USUARIO.github.io/portifolio/` |
| Colocar no LinkedIn | Perfil → editar → Website / Link → colar o link |

Se algo der erro em algum passo (por exemplo no `git push`), copie a mensagem de erro e pesquise ou peça ajuda dizendo em qual passo parou.
