<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="50">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="50">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="50">
</p>

<h1 align="center">AWS S3 Upload File</h1>
<p align="center">🚧 In progress...🚧</>

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white)](https://nodejs.org/)  
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white)](https://yarnpkg.com/)

### ⚙️ Installation

```sh
git clone git@github.com:jessicasantosb/aws-s3-upload-file.git
```

```sh
❯ cd aws-s3-upload-file
```

```sh
❯ yarn
```


#### ESLint


```sh
❯ yarn lint
```
```sh
❯ yarn lint:fix
```

---

### 🤖 Uso

#### Variáveis de Ambiente

- Crie um bucket no AWS S3: no Console, clique em 'Create bucket', defina nome e região e finalize.
- Confira as permissões do bucket (público/privado) e verifique se o usuário IAM tem acesso programático com a política AmazonS3FullAccess (ou uma customizada).
- Crie o arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```sh
❯ AWS_BUCKET_NAME=<your_key>
❯ AWS_BUCKET_REGION=<your_key>
❯ AWS_ACCESS_KEY=<your_key>
❯ AWS_SECRET_ACCESS_KEY=<your_key>
```

---

## 💻 Technologies

- NextJS
- Typescript
- AWS S3  
- AWS SDK
- React Hook Form
- Zod
- ESLint

---

## 🤝 Contributions

- 🔰 Mention any known issues or limitations
- 🐛 Outline your plans for future improvements
