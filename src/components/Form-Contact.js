import React, { useState } from 'react';
import '../style-sheets/style-form.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una solicitud a un servidor o un servicio de correo electrónico.
    console.log('Formulario enviado:', formData);
    // También puedes restablecer el formulario después de enviarlo si es necesario.
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="hidden" id="contact">
      <div className="contact-form-container">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Correo electrónico:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Mensaje:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}