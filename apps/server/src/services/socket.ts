import { Server } from "socket.io";
import Redis from "ioredis";

const pub = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || "6379"),
  username: process.env.REDIS_USERNAME || "default",
  password: process.env.REDIS_PASSWORD,
});

const sub = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || "6379"),
  username: process.env.REDIS_USERNAME || "default",
  password: process.env.REDIS_PASSWORD,
});

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Initializing SocketService");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("MESSAGES");
  }

  public initListeners() {
    const io = this._io;
    console.log("initializing Socket listeners");

    io.on("connect", (socket) => {
      console.log(`New Socket connected:`, socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log(`Message received:`, message);
        // publish this message to redis
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });

    sub.on("message", (channel, message) => {
      if (channel === "MESSAGES") {
        console.log(`Message received from Redis:`, message);
        io.emit("message", message);
        
      }
    });
  }
  get io() {
    return this._io;
  }
}

export default SocketService;