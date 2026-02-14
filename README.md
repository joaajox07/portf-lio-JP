# Portfólio — João Pedro

YYYSite pessoal como **Desenvolvedor Front-End**, focado em apresentar experiência, stack e formas de contato. Interface moderna, responsiva e com identidade visual futurista.

---

## Sobre o projeto

Este portfólio é uma página estática (HTML, CSS e JavaScript) que apresenta:

- **Quem sou** — breve apresentação e foco em Front-End, UX, performance e código limpo  
- **Tecnologias** — stack em que trabalho: HTML5, CSS3, JavaScript, C++, SQL, Git, GitHub, Node.js/APIs e lógica de programação  
- **Contato** — e-mail e WhatsApp para projetos e oportunidades  

O design usa tema escuro, acentos em verde-água/ciano, tipografia **Outfit** e **JetBrains Mono**, com fundo em grid sutil e animação de estrelas em canvas.

---

## Funcionalidades

- **Hero** — mensagem de impacto e CTAs para “Ver tecnologias” e “Falar comigo”  
- **Sobre** — texto de apresentação e pills (Front-End, UX & Interface, Performance, Código limpo)  
- **Tecnologias** — grid de ícones com as ferramentas da stack  
- **Contato** — links para e-mail e WhatsApp  
- **Header fixo** — logo “JP” e navegação (Sobre, Tecnologias, Contato)  
- **Menu mobile** — botão hambúrguer que abre/fecha o menu em telas pequenas  
- **Animações** — reveal no scroll e estrelas interativas no fundo (reagem ao movimento do mouse)  
- **Cursor customizado** — círculo que acompanha o mouse e muda em hover em links/botões (desativado em touch)  
- **Footer** — ano atual preenchido via JavaScript  

---

## Stack do site

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura e semântica |
| **CSS3** | Layout, responsividade, variáveis CSS, animações 
| **JavaScript** | Interações, menu mobile, reveal, canvas (estrelas), cursor, ano no footer |
| **Fontes** | [Google Fonts](https://fonts.google.com/) — Outfit e JetBrains Mono |
| **Ícones** | Devicons (CDN) e Flaticon para a seção de tecnologias |

Sem frameworks: apenas arquivos estáticos (`index.html`, `style.css`, `script.js`).

---

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/jp.git
   cd jp
   ```
2. Abra o `index.html` no navegador ou use um servidor local, por exemplo:
   ```bash
   npx serve .
   ```
   e acesse o endereço indicado (ex.: `http://localhost:3000`).

---

## Estrutura dos arquivos

```
jp/
├── index.html   # Página principal (seções: hero, sobre, tecnologias, contato)
├── style.css    # Estilos, tema escuro, responsivo, animações
├── script.js    # Menu mobile, reveal, estrelas (canvas), cursor, ano
├── README.md
└── .gitignore
```

---

## Publicar no GitHub e usar no LinkedIn

| Passo | O que fazer |
|-------|-------------|
| **1. Repositório** | GitHub → **+** → **New repository** → nome (ex.: `jp` ou `portifolio`) → **Create** |
| **2. Enviar código** | Na pasta do projeto: `git init` → `git add .` → `git commit -m "Portfolio inicial"` → `git branch -M main` → `git remote add origin https://github.com/SEU-USUARIO/jp.git` → `git push -u origin main` |
| **3. GitHub Pages** | Repositório → **Settings** → **Pages** → **Deploy from a branch** → branch **main**, pasta **/ (root)** → **Save** |
| **4. Link do site** | Após 1–2 min, em **Pages** aparecerá: `https://SEU-USUARIO.github.io/jp/` (ou o nome do repo que você usou) |
| **5. LinkedIn** | No perfil → editar → **Website** ou **Link** → colar o link do GitHub Pages |

---

## Licença

Projeto pessoal. © João Pedro.
