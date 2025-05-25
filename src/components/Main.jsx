function Main() {
  return (
    <main style={{
      fontFamily: "sans-serif",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "30px",
        textAlign: "center",
        color: "#333"
      }}>
        <img
          src="/carro.jpg"
          alt="Carrito robot"
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto 20px",
            display: "block",
            borderRadius: "12px"
          }}
        />
        <h2 style={{ color: "#0077cc" }}>¡Te Facilitamos la vida!</h2>
        <p style={{ fontSize: "18px" }}>
          Solución para tu día a día en un solo click
        </p>

        <h2 style={{ marginTop: "30px", color: "#0077cc" }}>¿Por qué elegirnos?</h2>
        <h3 style={{ fontWeight: "normal" }}>Tenemos productos innovadores</h3>

        <img
          src="/cuadro.jpg"
          alt="Comparativa Telotengo"
          style={{
            width: "100%",
            maxWidth: "500px",
            marginTop: "20px",
            borderRadius: "10px"
          }}
        />
      </div>
    </main>
  );
}

export default Main;