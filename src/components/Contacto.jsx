function Contacto () {

    return(
        <section className="contact">
  <h2>Contactanos</h2>
  <form>
    <label>Nombre : </label>
    <input type="text" placeholder="Tu nombre" />

    <label>Email : </label>
    <input type="email" placeholder="Tu correo electrónico" />

    <label>Mensaje : </label>
    <textarea placeholder="Escribe tu mensaje aquí" ></textarea>

    <button type="submit">Enviar</button>
  </form>

  <div className="contact-details">
    <h3>Nuestras redes</h3>
    <p>📧 <strong>Correo:</strong> Alejandronatera5@gmail.com</p>
    <p>📱 <strong>WhatsApp:</strong> 0800ecommer</p>
  </div>
</section>


        


    )
}

export default Contacto;