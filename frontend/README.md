# Laboratorio 9: Estilos de Programación
## 1. Estilo de Programación Cook Book

El estilo de programación "Cook Book" se caracteriza por seguir un enfoque estructurado y paso a paso al escribir código. Es similar a seguir una receta en un libro de cocina, donde cada paso se detalla claramente y en orden. Este estilo es especialmente útil cuando se trabaja en proyectos con tareas bien definidas y repetitivas.

Características principales
Pasos detallados: Cada tarea o función se descompone en pasos individuales que se explican de manera clara y concisa. Esto facilita el seguimiento y la comprensión de cada paso del proceso.

Comentarios detallados: El código se acompaña de comentarios que explican cada paso o acción realizada. Estos comentarios actúan como instrucciones adicionales para guiar a los desarrolladores a través del código.

Reusabilidad: Dado que cada función o tarea se divide en pasos discretos, estos pasos pueden reutilizarse en diferentes partes del código cuando sea necesario.

Fácil de mantener: Debido a su naturaleza estructurada, el estilo de programación "Cook Book" es más fácil de mantener a medida que el código crece o cuando se realizan cambios en el mismo.

## 2. Estilo de Programación Thing

El estilo de programación "Thing" se centra en la creación de objetos o entidades independientes que encapsulan sus propios datos y comportamientos. Cada objeto actúa como una "cosa" con su propia lógica interna, y las interacciones entre las "cosas" son manejadas a través de mensajes o eventos.

Características principales
Abstracción: Cada "cosa" es una abstracción de un objeto del mundo real o una entidad en el dominio del problema.

Encapsulación: Cada "cosa" encapsula su estado y comportamiento, lo que evita el acceso directo y promueve una mayor cohesión.

Comunicación basada en mensajes: Las interacciones entre las "cosas" se realizan enviando mensajes o eventos, lo que promueve un acoplamiento más débil y una mayor modularidad.

Reusabilidad: Los objetos se pueden reutilizar en diferentes contextos y son fácilmente intercambiables.

## 3. Estilo de Programación Pipeline
El estilo de programación "Pipeline" se basa en la idea de construir una serie de pasos o etapas conectados en secuencia, donde el resultado de cada paso se utiliza como entrada para el siguiente. Es similar a cómo fluye un líquido a través de un tubo, de ahí el nombre "Pipeline".

Características principales
Secuencialidad: Cada paso o etapa se ejecuta en secuencia, y el resultado de cada paso se pasa al siguiente.

Modularidad: Cada paso se encapsula en su propia función o módulo, lo que facilita la reutilización y el mantenimiento del código.

Legibilidad: Al estar organizado en una secuencia lógica, el código escrito en el estilo "Pipeline" suele ser más legible y comprensible.

Ideal para operaciones en serie: Este estilo es especialmente útil cuando se requiere realizar una serie de operaciones o transformaciones en un conjunto de datos.

En el código, las funciones `Auth`, `LogIn`, y `SignUp` actúan como etapas del pipeline, donde cada una procesa y renderiza diferentes partes de la interfaz de autenticación. La salida de `Auth` es un contenedor que contiene la interfaz de inicio de sesión (`LogIn`), y en una aplicación más grande, podría contener otras etapas como la interfaz de registro (`SignUp`) o cualquier otra página relacionada.

Aquí está la explicación del código y cómo se ajusta al estilo de programación Pipeline:

1. **Etapa 1: `Auth`**

```jsx
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        {/* Contenido de la izquierda, como un logo o título */}
        <div className="Webname">
          <h6>Conectando persona, creando relaciones</h6>
        </div>
      </div>
      {/* Etapa 2: Renderizar la interfaz de inicio de sesión */}
      <LogIn />
    </div>
  );
};
```

2. **Etapa 2: `LogIn`**

```jsx
const LogIn = () => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Iniciar Sesion</h3>

        <div>
          {/* Input para el nombre de usuario */}
          <input
            type="text"
            placeholder="Usuario"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          {/* Input para la contraseña */}
          <input
            type="password"
            className="infoInput"
            placeholder="Contrseña"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account Sign up</span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
};
```

En esta implementación, `Auth` representa la primera etapa del pipeline, que renderiza el contenedor principal y luego pasa el control a la siguiente etapa, `LogIn`, que renderiza la interfaz de inicio de sesión. En una aplicación más compleja, podríamos tener más etapas, como la interfaz de registro `SignUp` o cualquier otra página que forme parte de la autenticación.

En conclusión, el código proporcionado efectivamente utiliza el estilo de programación Pipeline al representar una secuencia de etapas que procesan y renderizan diferentes partes de la interfaz de autenticación de manera secuencial.


