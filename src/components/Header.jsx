function Header() {
  return (
    <header
      style={{
        backgroundColor: "#003366",
        padding: "10px 30px", // Aumentamos padding horizontal para margen izquierdo
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Alinea a la izquierda
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
      <img
        src="/logo.jpg"
        alt="Logo de la página"
        style={{
          height: "75px", // Antes era 50px. Esto es un 50% más grande
          marginRight: "25px" // Más separación del texto
        }}
      />
      <h1 style={{ margin: 0, fontSize: "24px" }}>
        Bienvenidos a mi App React
      </h1>
    </header>
  );
}