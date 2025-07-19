<h1 align="center">💬 Scalable Chat Application</h1>

<p align="center">
  <b>A production-ready, real-time messaging app built with a modern microservice-first architecture.</b><br/>
  Featuring Next.js 15, Kafka, Redis, PostgreSQL, WebSockets, and Turborepo.
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Kafka-JS-231F20?style=for-the-badge&logo=apachekafka" />
  <img src="https://img.shields.io/badge/Redis-PubSub-DC382D?style=for-the-badge&logo=redis" />
  <img src="https://img.shields.io/badge/PostgreSQL-DB-336791?style=for-the-badge&logo=postgresql" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/TypeScript-Typed-3178C6?style=for-the-badge&logo=typescript" />
</p>

---

## 🖼️ UI Preview

<p align="center">
  <img width="1901" height="980" alt="image" src="https://github.com/user-attachments/assets/ed72f2ff-5881-4d1e-aa9a-528d1967e632" />

  <br />
  <i>⚡ Modern dark-themed chat interface with real-time updates</i>
</p>

---

## 🧠 Key Features

- 🔌 Real-time messaging with **Socket.IO** & **Redis Pub/Sub**
- 📨 Message queuing using **Kafka** for durability
- 💾 Persistent storage via **PostgreSQL** + **Prisma ORM**
- 🚀 Frontend with **Next.js App Router**, **React 19**, and **Tailwind**
- 🧱 Modular monorepo setup using **Turborepo**
- 🐳 Docker-ready for scalable deployments

---

## 🧱 Architecture Overview
```bash
scalable-chat/
├── apps/
│ ├── web/ # Frontend (Next.js)
│ ├── server/ # Backend (Socket.IO + Kafka)
├── packages/
│ ├── ui/ # Shared components
│ └── config/ # Shared TypeScript & ESLint configs
└── turbo.json # Turborepo config
```

### 🔄 Message Lifecycle

Frontend → WebSocket → Redis PubSub → Kafka → DB (PostgreSQL)
↘
All clients via WebSocket

---

## ⚙️ Tech Stack

### 🖥️ Frontend

| Tech        | Description                      |
|-------------|----------------------------------|
| ![next](https://img.shields.io/badge/-Next.js-black?logo=next.js) | App Router based frontend |
| ![react](https://img.shields.io/badge/-React-61DAFB?logo=react)   | Component-based UI         |
| ![tailwind](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwindcss) | Utility-first styling      |
| ![ts](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript) | Strict typing              |

### 🧠 Backend

| Tech        | Description                       |
|-------------|-----------------------------------|
| ![node](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs)     | Core runtime            |
| ![socketio](https://img.shields.io/badge/-Socket.IO-black?logo=socket.io) | Real-time communication |
| ![redis](https://img.shields.io/badge/-Redis-DC382D?logo=redis)         | Pub/Sub messaging       |
| ![kafka](https://img.shields.io/badge/-KafkaJS-231F20?logo=apachekafka) | Event streaming         |
| ![postgres](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql) | Persistent storage   |
| ![prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma)     | ORM                     |

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js v18+
- Yarn v1.22+
- PostgreSQL
- Redis
- Apache Kafka

---

## 🛠️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/anishvkalbhor/scalable-chat.git
cd scalable-chat
```
2️⃣ Install Dependencies
```bash
yarn install
```

3️⃣ Configure Environment Variables
```bash
Create .env in apps/server/:

.env
# PostgreSQL
DATABASE_URL="postgresql://username:password@localhost:5432/scalable_chat"

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_USERNAME=default
REDIS_PASSWORD=your_redis_password

# Kafka
KAFKA_HOST=localhost
KAFKA_PORT=9092
KAFKA_USERNAME=your_kafka_username
KAFKA_PASSWORD=your_kafka_password

# Server
PORT=8000
```
4️⃣ Run Prisma Migrations
```bash
cd apps/server
npx prisma migrate dev
npx prisma generate
```
5️⃣ Start Development Mode
```bash
yarn dev
Frontend: http://localhost:3000

Backend: http://localhost:8000
```
🧪 Useful Scripts
```bash
yarn dev          # Start all apps in dev mode
yarn build        # Build all apps
yarn lint         # Lint the codebase
yarn format       # Format with Prettier
yarn check-types  # Type-check the entire monorepo
```


📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author

Built with ❤️ by Anish Kalbhor
Happy shipping! 🚀
