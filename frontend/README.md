# Laboratorio 9: Estilos de Programación
## 1. Estilo de Programación Cook Book

El estilo de programación "Cook Book" se caracteriza por seguir un enfoque estructurado y paso a paso al escribir código. Es similar a seguir una receta en un libro de cocina, donde cada paso se detalla claramente y en orden. Este estilo es especialmente útil cuando se trabaja en proyectos con tareas bien definidas y repetitivas.

Características principales
Pasos detallados: Cada tarea o función se descompone en pasos individuales que se explican de manera clara y concisa. Esto facilita el seguimiento y la comprensión de cada paso del proceso.

Comentarios detallados: El código se acompaña de comentarios que explican cada paso o acción realizada. Estos comentarios actúan como instrucciones adicionales para guiar a los desarrolladores a través del código.

Reusabilidad: Dado que cada función o tarea se divide en pasos discretos, estos pasos pueden reutilizarse en diferentes partes del código cuando sea necesario.

Fácil de mantener: Debido a su naturaleza estructurada, el estilo de programación "Cook Book" es más fácil de mantener a medida que el código crece o cuando se realizan cambios en el mismo.

__EJEMPLOS IMPLEMENTADOS EN EL PROYECTO__

* __Ejemplo 1__
  
El código proporcionado (`Profile.jsx`) esta utilizando el estilo de programación Cook Book. En lugar de escribir todo el código personalizado para la página de perfil, el código utiliza componentes reutilizables de otros archivos para construir la página.

En este código, se utilizan cuatro componentes diferentes (`ProfileLeft`, `ProfileCard`, `PostSide` y `RightSide`), que se importan desde otros archivos en lugar de ser escritos desde cero. Estos componentes probablemente han sido diseñados para ser reutilizables en otras páginas o proyectos, y se han utilizado aquí para construir la página de perfil.

Además, el código sigue las convenciones de React y utiliza una estructura clara y fácil de entender. Los nombres de los componentes y las clases CSS también son descriptivos y fáciles de entender, lo que facilita la lectura y el mantenimiento del código.

```jsx
import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile
```

* __Ejemplo 2__
  
El siguiente código (`ProfileLeft.jsx`) utiliza el estilo de programación Cook Book. El código define un componente llamado `ProfileLeft`, que utiliza otros componentes (`LogoSearch`, `InfoCard` y `FollowersCard`) para construir la interfaz de usuario.

Veamos el código por partes:

1. Importaciones de componentes:

```jsx
import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
```

En esta sección se importan los componentes que se utilizarán en el componente `ProfileLeft`. Cada componente se importa desde un archivo diferente en la carpeta `components/`.

2. Definición del componente `ProfileLeft`:

```jsx
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard/>
       <FollowersCard/>
   </div>
  )
}
```

En esta sección se define el componente `ProfileLeft`. Este componente es una función que devuelve un fragmento de JSX. El fragmento consiste en un contenedor con la clase CSS `ProfileSide` y tres componentes: `LogoSearch`, `InfoCard` y `FollowersCard`.

3. Exportación del componente `ProfileLeft`:

```jsx
export default ProfileLeft
```

En esta sección se exporta el componente `ProfileLeft` para que pueda ser utilizado en otras partes de la aplicación.

En resumen, este código utiliza el estilo de programación Cook Book al utilizar componentes reutilizables (`LogoSearch`, `InfoCard` y `FollowersCard`) para construir el componente `ProfileLeft`. Al utilizar componentes ya existentes en lugar de escribir todo el código personalizado desde cero, se maximiza la eficiencia del desarrollo y se hace que el código sea más fácil de entender y mantener.

## 2. Estilo de Programación Code Golf

El estilo de programación conocido como "Code Golf" se centra en escribir código de la manera más concisa y compacta posible para resolver un problema o implementar una función específica. En esencia, se trata de reducir la longitud del código al mínimo absoluto sin sacrificar la funcionalidad y sin violar las reglas del desafío de Code Golf en cuestión.

El objetivo principal de Code Golf es expresar la solución al problema en la menor cantidad de caracteres o líneas de código posible. Esto puede incluir el uso creativo de operadores, abreviaciones, funciones predefinidas y todo tipo de técnicas que permitan reducir la longitud del código. A menudo, los participantes recurren a trucos matemáticos, operaciones bitwise y optimizaciones específicas del lenguaje para alcanzar este objetivo.

Algunas características comunes del estilo de programación de Code Golf incluyen:

1. Abreviaciones y nombres de variables mínimos: Los nombres de variables suelen ser muy cortos y crípticos para reducir la longitud del código.

2. Uso extensivo de operadores abreviados: En lugar de utilizar operaciones completas, se prefieren operadores abreviados para reducir la cantidad de caracteres utilizados.

3. Uso creativo de estructuras de control: A menudo, se utilizan estructuras de control poco convencionales para lograr la funcionalidad requerida con menos líneas de código.

4. Aprovechar funciones y bibliotecas predefinidas: Los participantes de Code Golf utilizan las funciones incorporadas del lenguaje o bibliotecas disponibles para evitar tener que implementar funciones personalizadas más largas.

5. Técnicas matemáticas avanzadas: Se utilizan trucos matemáticos, algoritmos compactos y operaciones bitwise para manipular datos de manera eficiente.

6. Combinación de instrucciones: Se combinan múltiples operaciones en una sola línea para reducir la cantidad total de líneas de código.

Es importante tener en cuenta que el estilo de programación de Code Golf puede resultar en código difícil de leer y mantener, ya que la legibilidad no es una prioridad en este contexto. El objetivo principal es obtener la solución más corta y eficiente para cumplir con las reglas del desafío. Este estilo de programación es común en competiciones y desafíos en línea relacionados con la programación, donde la longitud del código es un factor determinante para calificar la solución como ganadora.

__EJEMPLOS IMPLEMENTADOS EN EL PROYECTO__

* __Ejemplo 1__

El código proporcionado (`FollowersCard.jsx`) es un componente de React escrito en un estilo compacto y conciso, que se asemeja al estilo de programación de Code Golf en cierta medida. A continuación, analizaré algunas características del código que muestran cómo se ha utilizado este estilo:

1. Nombres de variables cortos: Se utilizan nombres cortos y crípticos para las variables. Por ejemplo, `Followers` se refiere a un arreglo de datos, y `follower` es el elemento individual dentro del arreglo.

2. Uso eficiente de las funciones incorporadas de JavaScript y de React: El código utiliza el método `map()` de JavaScript para iterar sobre el arreglo de `Followers` y renderizar cada elemento. También aprovecha los componentes de React para construir la estructura del componente.

3. Uso de funciones flecha (arrow functions): Las funciones flecha se utilizan para mantener el código más compacto.

4. Operador ternario implícito: En la línea `<img src={follower.img} alt="" className='followerImage' />`, el atributo `alt` se deja vacío (`alt=""`) para evitar que se muestre un texto alternativo para la imagen, lo cual podría ser un truco intencional para ahorrar caracteres.

5. Uso eficiente de JSX: El JSX se utiliza de manera eficiente para crear la estructura del componente con una sintaxis compacta.

En general, el código muestra una implementación concisa y funcional del componente `FollowersCard`, y parece haberse escrito de manera que prioriza la brevedad y la eficiencia.
```jsx
import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers. map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
```
* __Ejemplo 2__

Es un código (`InfoCard.jsx`) muy conciso y compacto, priorizando la reducción de longitud al máximo. Algunas características específicas del estilo de Code Golf presentes en el código:

Uso de nombres de variables muy cortos: Por ejemplo, modalOpened se podría haber llamado m o o, y setModalOpened se podría haber llamado s. Sin embargo, aún se utiliza una versión más larga de los nombres de variables, lo cual es un signo de consideración por la legibilidad.

Colocación de componentes JSX en la misma línea: Los elementos JSX están escritos en una sola línea, lo cual es común en Code Golf para reducir la cantidad de líneas en el código.

Evitar saltos de línea innecesarios: El código evita agregar saltos de línea innecesarios para mantenerlo compacto y reducir el número total de líneas.

Uso de funciones flecha y desestructuración: Se utilizan funciones flecha y desestructuración para mantener el código breve.

Mínimo espacio en blanco: El código evita el uso excesivo de espacios en blanco, lo que ayuda a reducir la longitud del código.

En resumen, el código proporcionado efectivamente sigue el estilo de programación de Code Golf. Es un ejemplo de código muy conciso y optimizado para reducir la longitud al máximo, aunque sigue siendo lo suficientemente legible como para entender su funcionalidad. El estilo de Code Golf es apreciado en entornos donde se premia la brevedad del código y no se enfoca tanto en la legibilidad para propósitos prácticos y de mantenimiento.

```jsx
import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  // Definición del estado local 'modalOpened' utilizando useState
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          {/* Icono de lápiz utilizando el componente 'UilPen' */}
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          {/* Componente 'ProfileModal' para mostrar un modal */}
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      {/* Bloques de información */}
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      {/* Botón de logout */}
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
```
  
## 3. Estilo de Programación Pipeline
El estilo de programación "Pipeline" se basa en la idea de construir una serie de pasos o etapas conectados en secuencia, donde el resultado de cada paso se utiliza como entrada para el siguiente. Es similar a cómo fluye un líquido a través de un tubo, de ahí el nombre "Pipeline".

Características principales
Secuencialidad: Cada paso o etapa se ejecuta en secuencia, y el resultado de cada paso se pasa al siguiente.

Modularidad: Cada paso se encapsula en su propia función o módulo, lo que facilita la reutilización y el mantenimiento del código.

Legibilidad: Al estar organizado en una secuencia lógica, el código escrito en el estilo "Pipeline" suele ser más legible y comprensible.

Ideal para operaciones en serie: Este estilo es especialmente útil cuando se requiere realizar una serie de operaciones o transformaciones en un conjunto de datos.

__EJEMPLOS IMPLEMENTADOS EN EL PROYECTO__

* __Ejemplo 1__

En el código `Auth.jsx`, las funciones `Auth`, `LogIn`, y `SignUp` actúan como etapas del pipeline, donde cada una procesa y renderiza diferentes partes de la interfaz de autenticación. La salida de `Auth` es un contenedor que contiene la interfaz de inicio de sesión (`LogIn`), y en una aplicación más grande, podría contener otras etapas como la interfaz de registro (`SignUp`) o cualquier otra página relacionada.

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

* __Ejemplo 2__

En el código `RightSide.jsx`, podemos identificar las siguientes etapas del pipeline:

Etapa 1: Se define el estado local modalOpened utilizando useState. Esto determina si el modal está abierto o cerrado.

Etapa 2: Se renderiza la barra de navegación con íconos en la interfaz.

Etapa 3: Se renderiza el componente TrendCard.

Etapa 4: Se renderiza un botón con el texto "Publicar". Cuando el botón se hace clic, se ejecuta la función setModalOpened para actualizar el estado modalOpened y abrir el modal.

Etapa 5: Se renderiza el componente ShareModal que representa la última etapa en este pipeline. Se le pasan las propiedades modalOpened y setModalOpened como propiedades para controlar el estado del modal.

Cada etapa en este código representa una operación secuencial que se ejecuta en orden para componer la interfaz de usuario final. Esto cumple con las características del estilo de programación Pipeline. Nuevamente, mis disculpas por los errores previos en mis respuestas.
```jsx
import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  // Etapa 1: Definir el estado local para controlar si el modal está abierto o cerrado
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Etapa 2: Renderizar la barra de navegación con íconos */}
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      {/* Etapa 3: Renderizar el componente TrendCard */}
      <TrendCard />

      {/* Etapa 4: Renderizar el botón para abrir el modal */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Publicar
      </button>

      {/* Etapa 5: Renderizar el componente ShareModal */}
      {/* El componente ShareModal representa la última etapa en este pipeline */}
      {/* Se le pasa modalOpened y setModalOpened como propiedades */}
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
```
# Laboratorio 10: Clean Code

Las prácticas de codificación legible son técnicas y principios que los programadores pueden utilizar para escribir código que sea fácil de leer, entender y mantener. La legibilidad del código es importante porque permite a otros programadores entender y trabajar con el código de manera más eficiente y efectiva, lo que a su vez reduce el tiempo y el costo del desarrollo y mejora la calidad del software.

Algunas prácticas comunes de codificación legible incluyen:

- Utilizar nombres de variables y funciones descriptivos y significativos: Los nombres de variables y funciones deben ser claros y descriptivos para que otros programadores puedan entender su propósito y uso.

- Escribir comentarios claros y útiles: Los comentarios deben proporcionar información adicional sobre el código, como su propósito, limitaciones y posibles problemas.

- Utilizar una estructura clara y coherente: El código debe tener una estructura clara y fácil de seguir, con una indentación y una organización coherentes.

- Evitar la repetición y la complejidad innecesarias: El código debe ser conciso y evitar la repetición y la complejidad innecesarias, lo que puede dificultar su comprensión y mantenimiento.

- Utilizar nombres de variables y funciones consistentes: Los nombres de variables y funciones deben seguir las convenciones de nomenclatura estándar para el lenguaje de programación utilizado.

- Utilizar comentarios de bloque para explicar la lógica compleja: Si se utiliza una lógica compleja, se pueden agregar comentarios de bloque para explicar la lógica detrás del código.

- Mantener la simplicidad del código: El código debe ser simple y fácil de entender. La complejidad excesiva puede dificultar su comprensión y mantenimiento.

En resumen, las prácticas de codificación legible se enfocan en escribir código que sea fácil de leer, entender y mantener, lo que permite a otros programadores trabajar con el código de manera más eficiente y efectiva.

__EJEMPLOS IMPLEMENTADOS EN EL PROYECTO__

* __Ejemplo 1__

  Sea el codigo `Auth.jsx`:
  
```jsx
  import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";



const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        {/*<img src={Logo} alt="" width="120" height="150" />*/}
        <div className="Webname">
          <h6>Conectando persona, creando relaciones</h6>
        </div>
      </div>

      <LogIn />
    </div>
  );
};

const LogIn = () => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Iniciar Sesion</h3>

        <div>
          <input
            type="text"
            placeholder="Usuario"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
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

const SignUp = () => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Auth;
```

1. **Nombres significativos**:
   - `Auth`, `LogIn`, `SignUp`: Nombres descriptivos y concisos para los componentes.
   - `infoForm`, `authForm`, `infoInput`, `button`, etc.: Nombres de clases CSS descriptivos para estilizar los elementos.
   - `placeholder`, `name`, `type`, etc.: Atributos con nombres claros en los campos de entrada.

2. **Comentarios útiles**:
   - Se utilizan comentarios para explicar la ausencia del logo y como nota para posibles activaciones futuras.
   - El comentario `// Encabezado del formulario de inicio de sesión` explica la función del encabezado en el componente `LogIn`.
   - El comentario `// Encabezado del formulario de registro` explica la función del encabezado en el componente `SignUp`.
   - El comentario `// Campo de entrada para el nombre de usuario` explica la función de un campo de entrada en el componente `LogIn`.
   - El comentario `// Campo de entrada para la contraseña` explica la función de un campo de entrada en el componente `LogIn`.
   - El comentario `// Enlace para dirigir al usuario al formulario de registro` explica el enlace presente en el componente `LogIn`.
   - El comentario `// Botón para enviar el formulario de inicio de sesión` explica el botón presente en el componente `LogIn`.
   - El comentario `// Campo de entrada para el nombre del usuario` explica la función de un campo de entrada en el componente `SignUp`.
   - El comentario `// Campo de entrada para el apellido del usuario` explica la función de un campo de entrada en el componente `SignUp`.
   - El comentario `// Campo de entrada para el nombre de usuario` explica la función de un campo de entrada en el componente `SignUp`.
   - El comentario `// Campo de entrada para la contraseña` explica la función de un campo de entrada en el componente `SignUp`.
   - El comentario `// Campo de entrada para confirmar la contraseña` explica la función de un campo de entrada en el componente `SignUp`.
   - El comentario `// Enlace para dirigir al usuario al formulario de inicio de sesión` explica el enlace presente en el componente `SignUp`.
   - El comentario `// Botón para enviar el formulario de registro` explica el botón presente en el componente `SignUp`.

3. **Consistente Formateo**:
   - Todo el código sigue un formateo consistente, con sangrías adecuadas y alineación coherente.

4. **Evitar código redundante**:
   - Se utilizan componentes reutilizables, como `LogIn` y `SignUp`, para evitar duplicación de código entre las partes correspondientes del formulario.

5. **Funciones pequeñas y cohesivas**:
   - Las funciones `LogIn` y `SignUp` representan formularios individuales, lo que mejora la modularidad y comprensión.

6. **Uso adecuado de espacios en blanco**:
   - El código utiliza espacios en blanco de manera adecuada, como espaciado entre elementos y dentro de las etiquetas.

7. **Organización lógica**:
   - Los componentes están organizados de manera coherente, con cada uno representando una funcionalidad específica, facilitando la localización de las partes relevantes del código.

* __Ejemplo 2__
  
Sea el codigo `RightSide.jsx`:
  ```jsx
  import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Publicar
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
```
Las partes del código donde se aplican las prácticas de codificación legible:

1. **Nombres significativos**:
   - `const RightSide = ()`: El nombre `RightSide` representa claramente la función del componente.
   - `TrendCard` y `ShareModal`: Los nombres de los componentes representan la funcionalidad que proporcionan.
   - `modalOpened` y `setModalOpened`: Nombres descriptivos para el estado local y su función para controlar el modal.

2. **Consistente Formateo**:
   - Todas las líneas están correctamente indentadas y alineadas, lo que facilita la lectura del código.

3. **Importación organizada**:
   - Las importaciones están agrupadas y organizadas por tipo, separando componentes de terceros, imágenes y componentes locales.

4. **Uso adecuado de espacios en blanco**:
   - Se utilizan espacios en blanco de manera adecuada, como después de las comas en las importaciones, entre propiedades y valores, y alrededor de operadores.

5. **Estado local con useState**:
   - `const [modalOpened, setModalOpened] = useState(false)`: Se utiliza el hook `useState` para declarar y gestionar el estado local `modalOpened`, y `setModalOpened` se usa para actualizar dicho estado.

6. **Manejo de eventos**:
   - `onClick={() => setModalOpened(true)}`: El botón "Publicar" tiene un evento `onClick` que llama a la función `setModalOpened(true)` para abrir el modal de compartir.

7. **Reutilización de componentes**:
   - `<TrendCard />`: Se utiliza el componente `TrendCard` para mostrar una tarjeta de tendencia.
   - `<ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />`: Se utiliza el componente `ShareModal` para mostrar el modal de compartir, pasando los estados y funciones necesarios como props.

8. **Uso de imágenes e iconos**:
   - `<img src={Home} alt="" />`: Se importa y muestra la imagen `Home`.
   - `<UilSetting />`: Se muestra el ícono de ajustes usando el componente `UilSetting` de la librería `@iconscout/react-unicons`.

* __Ejemplo 3__

Sea el codigo `ProfileModal.jsx`:
  ```jsx
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
```
Las partes del código donde se aplican las prácticas de codificación legible:

1. **Nombres significativos**:
   - `ProfileModal`: El nombre del componente representa claramente su función, que es un modal para editar el perfil de usuario.
   - `theme`: El nombre de la variable representa el tema utilizado para el modal.

2. **Consistente Formateo**:
   - El código sigue un formateo consistente, con sangrías adecuadas y alineación coherente en todo el archivo.

3. **Uso adecuado de espacios en blanco**:
   - El código utiliza espacios en blanco de manera adecuada, lo que mejora la legibilidad y la estructura del modal.

4. **Uso de condicionales para temas**:
   - `overlayColor` utiliza un operador ternario para determinar el color del fondo del modal dependiendo del tema (`theme.colorScheme === "dark"`).

5. **Uso de propiedades de Mantine**:
   - Se utilizan propiedades específicas de Mantine para definir el comportamiento y estilo del modal, como `overlayOpacity`, `overlayBlur`, y `size`.

6. **Uso de eventos**:
   - `onClose={() => setModalOpened(false)}`: Se usa el evento `onClose` para cerrar el modal al hacer clic en la "X" o en el fondo oscuro.

7. **Formulario para edición de perfil**:
   - Se presenta un formulario con campos de entrada para editar la información del perfil del usuario.
   - Los nombres de los campos de entrada son descriptivos, como "First Name", "Last Name", "Works at", "Lives in", "Country", "Relationship Status".

8. **Uso de etiquetas y descripciones**:
   - Se incluyen etiquetas claras y descriptivas para los campos de entrada, como "Profile Image" y "Cover Image".
   - Se proporcionan descripciones en los campos de entrada para que el usuario sepa qué información debe ingresar.


* __Ejemplo 4__

  Sea el codigo `ProfileCard.jsx`:

```jsx
import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;


```


1. **Nombres significativos**:
   - `ProfileCard`: El nombre del componente representa claramente su función, que es mostrar una tarjeta de perfil.

2. **Consistente Formateo**:
   - El código sigue un formateo consistente, con sangrías adecuadas y alineación coherente en todo el archivo.

3. **Uso adecuado de espacios en blanco**:
   - El código utiliza espacios en blanco de manera adecuada, lo que mejora la legibilidad y la estructura de la tarjeta de perfil.

4. **Imágenes y rutas de imágenes**:
   - Las rutas de las imágenes `Cover` y `Profile` están correctamente importadas y se utilizan para mostrar las imágenes correspondientes en la tarjeta de perfil.

5. **Uso de condicionales para renderizado condicional**:
   - `{ProfilePage && (...)}`: Se utiliza un operador lógico AND para renderizar el contenido condicional solo si `ProfilePage` es verdadero.

6. **Uso de elementos semánticos**:
   - Se utilizan elementos semánticos HTML como `div`, `span` y `hr` para proporcionar una estructura significativa a la tarjeta de perfil.

7. **Información clara y descriptiva**:
   - Se muestran el nombre (`Zendaya MJ`) y el título (`Senior UI/UX Designer`) del perfil con información descriptiva.

8. **Estilo y clases CSS**:
   - Se utiliza una clase `ProfileCard` para aplicar el estilo específico de la tarjeta de perfil.

Las partes del código donde se aplican las prácticas de codificación legible:

* __Ejemplo 5__
 Sea el codigo `PostShare.jsx`:

```jsx
import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  const handleImageClose = () => {
    setImage(null);
  };

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleShareClick = () => {
    // Lógica para compartir el post
  };

  return (
    <div className="PostShare">
      <img className="PostShare__profile-image" src={ProfileImage} alt="" />
      <div className="PostShare__input-wrapper">
        <input
          className="PostShare__input"
          type="text"
          placeholder="What's happening"
        />
        <PostOptions
          onImageClick={handleImageClick}
          onShareClick={handleShareClick}
        />
        {image && (
          <PreviewImage image={image} onCloseClick={handleImageClose} />
        )}
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          onChange={onImageChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

const PostOptions = ({ onImageClick, onShareClick }) => {
  return (
    <div className="PostShare__post-options">
      <Option color="var(--photo)" icon={<UilScenery />} onClick={onImageClick}>
        Photo
      </Option>
      <Option color="var(--video)" icon={<UilPlayCircle />}>
        Video
      </Option>
      <Option color="var(--location)" icon={<UilLocationPoint />}>
        Location
      </Option>
      <Option color="var(--shedule)" icon={<UilSchedule />}>
        Shedule
      </Option>
      <button className="PostShare__button ps-button" onClick={onShareClick}>
        Share
      </button>
    </div>
  );
};

const Option = ({ color, icon, onClick, children }) => {
  return (
    <div className="PostShare__option" style={{ color }} onClick={onClick}>
      {icon}
      {children}
    </div>
  );
};

const PreviewImage = ({ image, onCloseClick }) => {
  return (
    <div className="PostShare__preview-image">
      <UilTimes onClick={onCloseClick} />
      <img src={image.image} alt="" />
    </div>
  );
};

export default PostShare;
```


Las partes del código donde se aplican las prácticas de codificación legible:

1. **Nombres significativos**:
   - `PostShare`: El nombre del componente representa claramente su función, que es el formulario para compartir publicaciones.
   - `PostOptions`: El nombre del componente representa claramente su función, que es la sección de opciones para compartir publicaciones.
   - `Option`: El nombre del componente representa claramente su función, que es una opción específica en la sección de opciones.
   - `PreviewImage`: El nombre del componente representa claramente su función, que es la vista previa de una imagen cargada.

2. **Consistente Formateo**:
   - El código sigue un formateo consistente, con sangrías adecuadas y alineación coherente en todo el archivo.

3. **Uso adecuado de espacios en blanco**:
   - El código utiliza espacios en blanco de manera adecuada, lo que mejora la legibilidad y la estructura del formulario.

4. **Uso de useState y useRef**:
   - Se utiliza el hook `useState` para declarar y gestionar el estado de la imagen (`image`) que se comparte.
   - Se utiliza el hook `useRef` para obtener una referencia a un elemento `<input>` de tipo archivo para cargar la imagen.

5. **Uso de eventos**:
   - `onChange={onImageChange}`: Se utiliza el evento `onChange` para detectar cambios en el campo de entrada de archivo y cargar la imagen seleccionada.

6. **Componentes Reutilizables**:
   - Se utilizan los componentes `PostOptions` y `Option` para mostrar las opciones de compartir, lo que mejora la modularidad del código.

7. **Uso de íconos**:
   - Se utilizan íconos de la librería `@iconscout/react-unicons` para representar diferentes opciones de compartir, como foto, video, ubicación, etc.

8. **Estilo y clases CSS**:
   - Se utilizan clases CSS para aplicar estilos específicos a cada sección del formulario de compartir.



# Laboratorio 11: Principios SOLID

Los principios SOLID son un conjunto de principios de diseño de software que ayudan a crear código limpio, modular y fácil de mantener. Estos principios fueron formulados por Robert C. Martin y son ampliamente utilizados en el desarrollo de software orientado a objetos.

### 1. Principio de Responsabilidad Única (SRP)

El Principio de Responsabilidad Única establece que una clase debe tener una única responsabilidad y solo debe cambiar por una razón. Esto significa que cada clase debe estar enfocada en realizar una tarea específica y no mezclar funcionalidades distintas.

## 2. Principio de Abierto/Cerrado (OCP)

El Principio de Abierto/Cerrado sugiere que las entidades de software deben estar abiertas para su extensión, pero cerradas para su modificación. En otras palabras, al agregar nuevas funcionalidades, no se debe modificar el código existente, sino extenderlo a través de nuevas clases o módulos.

## 3. Principio de Sustitución de Liskov (LSP)

El Principio de Sustitución de Liskov establece que las clases derivadas deben ser sustituibles por sus clases base sin afectar la funcionalidad del programa. Esto significa que los objetos de las clases derivadas deben poder utilizarse en lugar de objetos de las clases base sin provocar errores o comportamientos inesperados.

## 4. Principio de Segregación de Interfaces (ISP)

El Principio de Segregación de Interfaces establece que un cliente no debe verse obligado a depender de interfaces que no utiliza. En lugar de tener interfaces monolíticas, se deben crear interfaces específicas y más pequeñas para cada cliente.

## 5. Principio de Inversión de Dependencias (DIP)

El Principio de Inversión de Dependencias establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

Siguiendo estos principios, se puede lograr un diseño de software más flexible, escalable y fácil de mantener a lo largo del tiempo.

Espero que este ejemplo te sea útil para incluir los principios SOLID en tu archivo `README.md`. Recuerda que el README es una excelente forma de documentar y comunicar aspectos importantes de tu proyecto a otros desarrolladores y colaboradores.
## 1. EJEMPLO DE CODIGO IMPLEMENTADO EN FRONTEND

Sea el codigo `PostShare.jsx`

```jsx
import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  const handleImageClose = () => {
    setImage(null);
  };

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleShareClick = () => {
    // Lógica para compartir el post
  };

  return (
    <div className="PostShare">
      <img className="PostShare__profile-image" src={ProfileImage} alt="" />
      <div className="PostShare__input-wrapper">
        <input
          className="PostShare__input"
          type="text"
          placeholder="What's happening"
        />
        <PostOptions
          onImageClick={handleImageClick}
          onShareClick={handleShareClick}
        />
        {image && (
          <PreviewImage image={image} onCloseClick={handleImageClose} />
        )}
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          onChange={onImageChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

const PostOptions = ({ onImageClick, onShareClick }) => {
  return (
    <div className="PostShare__post-options">
      <Option color="var(--photo)" icon={<UilScenery />} onClick={onImageClick}>
        Photo
      </Option>
      <Option color="var(--video)" icon={<UilPlayCircle />}>
        Video
      </Option>
      <Option color="var(--location)" icon={<UilLocationPoint />}>
        Location
      </Option>
      <Option color="var(--shedule)" icon={<UilSchedule />}>
        Shedule
      </Option>
      <button className="PostShare__button ps-button" onClick={onShareClick}>
        Share
      </button>
    </div>
  );
};

const Option = ({ color, icon, onClick, children }) => {
  return (
    <div className="PostShare__option" style={{ color }} onClick={onClick}>
      {icon}
      {children}
    </div>
  );
};

const PreviewImage = ({ image, onCloseClick }) => {
  return (
    <div className="PostShare__preview-image">
      <UilTimes onClick={onCloseClick} />
      <img src={image.image} alt="" />
    </div>
  );
};

export default PostShare;
```


 A continuación, se muestra cómo se aplican estos principios en el código:

1. **Principio de Responsabilidad Única (SRP):**
El componente "PostShare" cumple con el principio de SRP al tener una única responsabilidad, que es manejar la lógica para compartir un post, incluyendo el texto y las imágenes seleccionadas por el usuario.

2. **Principio de Abierto/Cerrado (OCP):**
El código sigue el principio de OCP al permitir la extensión sin modificar directamente el código existente. Se añaden nuevas funcionalidades mediante la introducción de nuevos componentes como "Option" y "PreviewImage" sin alterar el código existente.

3. **Principio de Sustitución de Liskov (LSP):**
Dado que esta aplicación está principalmente implementada utilizando componentes funcionales de React, la herencia directa de clases no es común. Por lo tanto, el principio de LSP no se aplica directamente en este contexto.

4. **Principio de Segregación de Interfaces (ISP):**
El ISP no es aplicable directamente, ya que esta base de código utiliza principalmente componentes funcionales en React, donde las interfaces tradicionales no se utilizan explícitamente.

5. **Principio de Inversión de Dependencias (DIP):**
El código cumple parcialmente con el principio de DIP al depender de abstracciones a través de componentes funcionales de React. Por ejemplo, el componente "PostOptions" y "PreviewImage" son abstracciones que el componente "PostShare" utiliza sin preocuparse por los detalles internos de su implementación.

## 2. EJEMPLO DE CODIGO IMPLEMENTADO EN FRONTEND

Sea el codigo `Auth.jsx`


```jsx

import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide

```
 A continuación, se muestra cómo se aplican estos principios en el código:

1. **Principio de responsabilidad única (Single Responsibility Principle, SRP):** El componente ProfileSide parece cumplir con el principio de responsabilidad única. Su función principal es renderizar la sección lateral de un perfil, y se encarga de mostrar el logo de búsqueda, la tarjeta de perfil y la tarjeta de seguidores. Cada uno de estos componentes se separa en módulos independientes, lo que permite que el componente ProfileSide se centre en su función principal.

2. **Principio de abierto/cerrado (Open/Closed Principle, OCP):** El código muestra una implementación parcial del principio de abierto/cerrado. Si se desea agregar nuevos componentes o funcionalidades relacionadas con la sección lateral del perfil, se puede hacer sin modificar directamente el código del componente ProfileSide. Esto se logra mediante la adición de nuevos componentes en el lugar correspondiente dentro del componente ProfileSide.


## 3. EJEMPLO DE CODIGO IMPLEMENTADO EN FRONTEND

Sea el codigo `Home.jsx`

```jsx

import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home

```

 A continuación, se muestra cómo se aplican estos principios en el código:

1. **Principio de responsabilidad única (Single Responsibility Principle, SRP):** El componente Home parece cumplir con el principio de responsabilidad única. Su función principal es renderear la página de inicio y se encarga de mostrar tres componentes: ProfileSide, PostSide y RightSide. Cada uno de estos componentes tiene una responsabilidad específica y se separa en módulos independientes, lo que permite que el componente Home se centre en su función principal.

2. **Principio de abierto/cerrado (Open/Closed Principle, OCP):** El código muestra una implementación parcial del principio de abierto/cerrado. Si se desea agregar nuevos componentes o funcionalidades relacionadas con la página de inicio, se puede hacer sin modificar directamente el código del componente Home. Esto se logra mediante la adición de nuevos componentes en el lugar correspondiente dentro del componente Home.


## 4. EJEMPLO DE CODIGO IMPLEMENTADO EN FRONTEND

Sea el codigo `ProfileModal.jsx`


```jsx

import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;




```

 A continuación, se muestra cómo se aplican estos principios en el código:

1. **Principio de responsabilidad única (Single Responsibility Principle, SRP):** El componente ProfileModal parece cumplir con el principio de responsabilidad única. Su función principal es renderizar un modal de perfil que muestra un formulario para actualizar la información del perfil. El componente se encarga de manejar el estado del modal y proporciona una interfaz para cerrar el modal.

2. **Principio de abierto/cerrado (Open/Closed Principle, OCP):** El código no muestra una implementación directa del principio de abierto/cerrado. Sin embargo, el componente ProfileModal está diseñado de manera modular y se puede utilizar en diferentes partes de la aplicación sin modificar su código. Esto permite que el componente sea abierto para su extensión al agregar más funcionalidades relacionadas con el perfil en el futuro.
