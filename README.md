# Pokédex App 🎮

Um aplicativo mobile desenvolvido com **React Native** e **Expo** que consome a [PokeAPI](https://pokeapi.co/) para listar e exibir detalhes dos Pokémons.

## 🚀 Funcionalidades
- **Listagem Dinâmica:** Exibe os nomes dos Pokémons consumindo dados em tempo real.
- **Navegação:** Transição entre a tela de lista e a tela de detalhes de cada Pokémon.
- **Detalhes Completos:** Exibe a imagem oficial, altura e peso do Pokémon selecionado.
- **Feedback de Carregamento:** Uso de ActivityIndicator enquanto os dados são buscados.

## 🛠️ Tecnologias Utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) (Stack)
- [Axios](https://axios-http.com/) (Consumo de API)

## 📁 Estrutura de Pastas
```text
pokedex-app/
├── src/
│   ├── routes/      # Configuração das rotas (Navegação)
│   ├── screens/     # Telas do App (Home e Details)
│   ├── services/    # Configuração do Axios (API)
├── App.js           # Ponto de entrada do aplicativo
└── app.json         # Configurações do ambiente Expo
```

## ▶️ Como rodar o projeto
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd pokedex-app

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```
