function Header() {
  return (
    <header
      style={{
        backgroundColor: "#003366",
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
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
          height: "100px", // Tamaño aumentado del logo
          marginRight: "20px"
        }}
      />
      <h1 style={{ margin: 0, fontSize: "24px" }}>
        Bienvenidos a mi App React
      </h1>
    </header>
  );
}

export default Header;