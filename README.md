# Ekomuz Backend

API de l'application Ekomuz — Node.js + Express.

## Installation

```bash
npm install
```

## Configuration

Copier `.env.example` en `.env` et remplir les variables :

```bash
cp .env.example .env
```

## Développement

```bash
npm run dev
```

## Production

```bash
npm start
```

## Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /health | Health check |
| GET | /api/status | Statut de l'API |

## Stack
- Node.js
- Express.js
- CORS
- dotenv
