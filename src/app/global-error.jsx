"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          backgroundColor: "#050505",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Ops! Algo deu errado.
          </h2>
          <p style={{ color: "#A1A1AA", marginBottom: "2rem" }}>
            Ocorreu uma instabilidade momentânea no carregamento da página.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.85rem 1.8rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #FF8F68, #FF3D00)",
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Tentar Novamente
          </button>
        </div>
      </body>
    </html>
  );
}
