import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use body parser for JSON content
  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    try {
      const response = await fetch("https://n8n.performanceboost.ch/webhook/carlacares/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      });

      if (!response.ok) {
        throw new Error(`n8n responded with status ${response.status}`);
      }

      // Check if response contains json or plain text
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        return res.json(data);
      } else {
        const text = await response.text();
        return res.json({ success: true, message: text });
      }
    } catch (error: any) {
      console.error("Proxy error:", error);
      return res.status(500).json({ error: error.message || "Failed to contact proxy" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
