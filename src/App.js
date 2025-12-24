import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="love-message">
          <h1>Para Mi Amor 💖</h1>
          
          <section className="memory">
            <h2>Nuestro Primer Encuentro</h2>
            <p>
              Recuerdo con claridad aquel viernes de mayo, hace ya dos años y medio. 
              Era una tarde cualquiera hasta que te vi por primera vez. En un instante, 
              algo cambió dentro de mí. Tu presencia me impactó de una manera que no podía explicar, 
              dejando una huella en mi alma que el tiempo no ha podido borrar.
            </p>
            <p>
              Tuve que esperar, reunir valor, dejar que el destino tejiera sus hilos pacientemente. 
              Pero en mi corazón ya sabía que eras especial, diferente a todo lo que había conocido antes.
            </p>
          </section>

          <section className="christmas-message">
            <h2>Esta Navidad Contigo</h2>
            <p>
              En esta Navidad, miro hacia atrás y veo cómo aquella impresión inicial 
              se transformó en el amor más profundo que he conocido. Las luces navideñas 
              me recuerdan el brillo que vi en ti aquella tarde de mayo.
            </p>
            <p>
              Eres el regalo que la vida me preparó durante tanto tiempo. Cada día a tu lado 
              confirma que aquella espera valió la pena infinitamente.
            </p>
          </section>

          <section className="promises">
            <h3>Mis Promesas para Ti 🌟</h3>
            <ul>
              <li>Nunca olvidar la magia de aquel primer encuentro</li>
              <li>Amarte con la profundidad de quien esperó para encontrar su alma gemela</li>
              <li>Recordar cada Navidad aquel mayo que cambió nuestro destino</li>
              <li>Escribir nuestra historia con paciencia y certeza</li>
            </ul>
          </section>

          <div className="final-message">
            <p>
              Gracias por existir, por estar aquí, por ser la respuesta a una búsqueda 
              que comenzó hace dos años y medio en una simple tarde de viernes.
            </p>
            <p className="signature">Feliz Navidad, mi amor 💕</p>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;