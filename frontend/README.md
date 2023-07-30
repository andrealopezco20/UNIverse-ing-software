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









