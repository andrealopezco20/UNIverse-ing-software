# UNIverse-ing-software

## 1. Propósito del proyecto

En esta sección, se describe el propósito y objetivo principal del proyecto. Se proporciona una visión general de lo que se pretende lograr con el desarrollo del software.

## 2. Funcionalidades

### 2.1 Diagrama de Casos de Uso

Se presenta un diagrama de casos de uso que ilustra las interacciones entre los actores y las funciones principales del sistema. Esto ayuda a comprender las diversas acciones que los usuarios pueden realizar.

### 2.2 Prototipo o GUI

Se muestra un prototipo o interfaz gráfica de usuario (GUI) que representa la apariencia visual y la navegación básica del software. Esto proporciona una idea visual de cómo será la experiencia del usuario.

## 3. Modelo de Dominio

### 3.1 Diagrama de Clases

Se exhibe un diagrama de clases que representa las entidades principales del sistema y sus relaciones. Esto ayuda a visualizar la estructura y organización de los datos en el software.

### 3.2 Diagrama de Módulos

Se presenta un diagrama de módulos que muestra la división de componentes funcionales del sistema en módulos discretos. Esto ayuda a comprender cómo se organiza el código en unidades lógicas.

## 4. Arquitectura y Patrones

### 4.1 Diagrama de Componentes o Paquetes

Se incluye un diagrama que representa la arquitectura de componentes o paquetes del sistema. Esto ayuda a comprender la distribución y la interacción de los diferentes componentes del software.

## 5. Prácticas de Codificación Limpia

### 5.1 Parte Implementada en el Proyecto

#### 5.1.1 Código Limpio en el Componente Auth

Sea componente `Auth.jsx` de la carpeta `Auth`

1. **Nombres descriptivos:**
   - `handleChange`, `handleSubmit`, `resetForm`, `loading`, `confirmPass`, `isSignUp` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código en general mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - Los comentarios en línea que explican qué hace cada sección de código:

```javascript
// handle Change in input
const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

// Form Submission
const handleSubmit = (e) => {
  setConfirmPass(true);
  e.preventDefault();
  if (isSignUp) {
    data.password === data.confirmpass
      ? dispatch(signUp(data, navigate))
      : setConfirmPass(false);
  } else {
    dispatch(logIn(data, navigate));
  }
};
```

4. **Separación de preocupaciones:**
   - Cada función tiene una responsabilidad específica y está bien definida en su propósito, como `handleChange`, `handleSubmit`, `resetForm`, etc.

5. **Reutilización de código:**
   - El estado `data` se utiliza para manejar los datos del formulario en lugar de repetir los campos.

6. **Evitar redundancia:**
   - La función `resetForm` restablece los datos y el estado de confirmación de contraseña.

7. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad en varias partes.

8. **Uso de destructuring:**
   - Ejemplos de destructuring en el código:

```javascript
const loading = useSelector((state) => state.authReducer.loading);
```

9. **Manejo de eventos:**
   - Los manejadores de eventos `onChange` y `onClick` se utilizan para gestionar la interacción del usuario.

10. **Ternarios para claridad:**
    - Se utiliza un operador ternario para mostrar el mensaje de error de confirmación de contraseña:

```javascript
<span
  style={{
    color: "red",
    fontSize: "12px",
    alignSelf: "flex-end",
    marginRight: "5px",
    display: confirmPass ? "none" : "block",
  }}
>
  *Confirm password is not same
</span>
```

#### 5.1.2 Código Limpio en el Componente Chat

Sea componente `Chat.jsx` de la carpeta `Chat`

1. **Nombres descriptivos:**
   - `socket`, `chats`, `onlineUsers`, `currentChat`, `sendMessage`, `receivedMessage` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - Los comentarios en línea explican las funciones de cada bloque de código:

```jsx
// Get the chat in chat section
useEffect(() => {
  const getChats = async () => {
    try {
      const { data } = await userChats(user._id);
      setChats(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getChats();
}, [user._id]);

// Connect to Socket.io
useEffect(() => {
  socket.current = io("ws://localhost:8800");
  socket.current.emit("new-user-add", user._id);
  socket.current.on("get-users", (users) => {
    setOnlineUsers(users);
  });
}, [user]);
```

4. **Separación de preocupaciones:**
   - Las funciones `checkOnlineStatus`, `handleChatClick`, `handleSendMessage` tienen responsabilidades bien definidas.

5. **Reutilización de código:**
   - La función `checkOnlineStatus` se encarga de verificar el estado en línea de un miembro del chat.

6. **Evitar redundancia:**
   - Se utiliza el estado `sendMessage` para evitar el envío de mensajes innecesarios al servidor.

7. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las partes de la interfaz izquierda y derecha.

8. **Uso de destructuring:**
   - Ejemplo de destructuring en el código:

```jsx
const { user } = useSelector((state) => state.authReducer.authData);
```

9. **Manejo de eventos:**
   - Los manejadores de eventos `onClick` se utilizan para gestionar la interacción del usuario:

```jsx
<Conversation
  data={chat}
  currentUser={user._id}
  online={checkOnlineStatus(chat)}
  onClick={() => handleChatClick(chat)}
/>
```

10. **Uso de `map` para generar elementos:**
    - Se utiliza el método `map` para generar elementos en la lista de chats:

```jsx
{chats.map((chat) => (
  <div key={chat.id} onClick={() => handleChatClick(chat)}>
    <Conversation
      data={chat}
      currentUser={user._id}
      online={checkOnlineStatus(chat)}
    />
  </div>
))}
```


#### 5.1.3 Código Limpio en el Componente Conversation

Sea componente `Conversation.jsx` de la carpeta `Conversation`

1. **Nombres descriptivos:**
   - `data`, `currentUser`, `online`, `userData`, `dispatch`, `getUserData` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - Se incluyen comentarios que explican el propósito de las secciones clave:

```jsx
// Obtener datos del usuario y mostrar en el componente de conversación
useEffect(() => {
  const userId = data.members.find((id) => id !== currentUser);
  
  const getUserData = async () => {
    try {
      const { data } = await getUser(userId);
      setUserData(data);
      dispatch({ type: "SAVE_USER", data: data });
    } catch (error) {
      console.log(error);
    }
  };

  getUserData();
}, []);
```

4. **Separación de preocupaciones:**
   - El efecto `useEffect` se utiliza para separar la lógica de obtención de datos del usuario y el dispatch de Redux.

5. **Reutilización de código:**
   - Se reutiliza el estado `userData` para manejar los datos del usuario y evitar la duplicación.

6. **Evitar redundancia:**
   - La imagen de perfil predeterminada se maneja de manera coherente, ya sea con una imagen personalizada o una imagen predeterminada.

7. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad.

8. **Uso de operador ternario:**
   - Se utiliza un operador ternario para mostrar el estado en línea del usuario:

```jsx
<span style={{ color: online ? "#51e200" : "" }}>
  {online ? "Online" : "Offline"}
</span>
```

9. **Manejo de propiedades:**
   - Las propiedades `data`, `currentUser` y `online` se manejan de manera adecuada y se utilizan en el componente.

10. **Uso de destructuring:**
    - Ejemplo de destructuring en el código:

```jsx
const { data } = await getUser(userId);
```

11. **Envolvimiento adecuado:**
    - El componente `Conversation` está envuelto en un fragment para evitar elementos adicionales en el DOM.
   



#### 5.1.4 Código Limpio en el Componente PostShare

Sea componente `PostShare.jsx` de la carpeta `PostShare`

1. **Nombres descriptivos:**
   - `dispatch`, `user`, `loading`, `image`, `desc`, `serverPublic`, `onImageChange`, `imageRef`, `handleUpload`, `resetShare` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - Los comentarios en línea explican el propósito de algunas funciones y secciones:

```jsx
// handle Image Change
const onImageChange = (event) => {
  if (event.target.files?.[0]) {
    let img = event.target.files[0];
    setImage(img);
  }
};

// Reset Post Share
const resetShare = () => {
  setImage(null);
  desc.current.value = "";
};
```

4. **Separación de preocupaciones:**
   - El componente `PostShare` se encarga de la interfaz de usuario y la lógica de carga de publicaciones.

5. **Reutilización de código:**
   - La lógica de reseteo se coloca en una función `resetShare` para evitar duplicación.

6. **Evitar redundancia:**
   - Se evita la redundancia en el manejo del estado de la imagen y el campo de descripción.

7. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad.

8. **Uso de iconos:**
   - Se utilizan iconos para representar diferentes opciones de publicación.

9. **Uso de eventos y acciones:**
   - Los eventos `onClick` y `onChange` se utilizan para manejar la interacción del usuario.

10. **Manejo de propiedades:**
    - Se manejan las propiedades `user` y `loading` utilizando `useSelector`.

11. **Uso de formularios:**
    - Se utiliza un formulario para recopilar la información de la publicación.

12. **Uso de destructuring:**
    - Ejemplo de destructuring en el código:


#### 5.1.5 Código Limpio en el Componente User

Sea componente `User.jsx` de la carpeta `User`

1. **Nombres descriptivos:**
   - `publicFolder`, `user`, `dispatch`, `following`, `handleFollow` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - Los comentarios en línea explican el propósito de algunas secciones del código:

```jsx
// Manejo del estado de seguir / no seguir y envío a Redux
const handleFollow = () => {
  following
    ? dispatch(unfollowUser(person._id, user))
    : dispatch(followUser(person._id, user));
  setFollowing((prev) => !prev);
};
```

4. **Separación de preocupaciones:**
   - El componente `User` se encarga de mostrar información de un usuario y gestionar el seguimiento.

5. **Reutilización de código:**
   - Se reutiliza la lógica para manejar el estado de "following" en la función `handleFollow`.

6. **Evitar redundancia:**
   - Se evita la redundancia en la construcción de la URL de la imagen de perfil.

7. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad.

8. **Uso de propiedades y datos:**
   - La propiedad `person` se utiliza para mostrar la información del usuario.

9. **Uso de botones y eventos:**
   - El evento `onClick` se utiliza para manejar el seguimiento y no seguimiento del usuario.

10. **Uso de estados y actualización:**
    - El estado `following` se utiliza para reflejar el estado actual de seguimiento.

11. **Uso de destructuring:**
    - Ejemplo de destructuring en el código:

```jsx
const { user } = useSelector((state) => state.authReducer.authData);
```

12. **Uso de operador ternario:**
    - Se utiliza un operador ternario para determinar el texto del botón de seguimiento:

```jsx
{following ? "Unfollow" : "Follow"}
```


#### 5.1.6 Código Limpio en el Componente FollowersModal

Sea componente `FollowersModal.jsx` de la carpeta `FollowersModal`

1. **Nombres descriptivos:**
   - `theme`, `modalOpened`, `setModalOpened` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - No se necesitan comentarios adicionales ya que el código es bastante legible en sí mismo.

4. **Separación de preocupaciones:**
   - El componente `FollowersModal` se encarga de mostrar un modal con los seguidores.

5. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad.

6. **Uso de propiedades:**
   - Las propiedades `modalOpened` y `setModalOpened` se utilizan para manejar la apertura y cierre del modal.

7. **Uso de componentes externos:**
   - El componente utiliza `Modal` de la biblioteca Mantine para mostrar el modal.

8. **Configuración de estilo y apariencia:**
   - El modal tiene configuraciones de estilo y apariencia, como colores de superposición y tamaño.

```jsx
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
    <FollowersCard location='modal' />
  </Modal>
);
```


#### 5.1.7 Código Limpio en el Componente InfoCard

Sea componente `InfoCard.jsx` de la carpeta `InfoCard`

1. **Nombres descriptivos:**
   - `dispatch`, `params`, `modalOpened`, `profileUserId`, `profileUser`, `handleLogOut` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - No se necesitan comentarios adicionales ya que el código es bastante legible en sí mismo.

4. **Separación de preocupaciones:**
   - El componente `InfoCard` se encarga de mostrar información de perfil y opciones de edición.

5. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad.

6. **Uso de propiedades y datos:**
   - Las propiedades `modalOpened`, `setModalOpened`, `data` se utilizan para manejar la edición del perfil.

7. **Uso de componentes externos:**
   - El componente utiliza `ProfileModal` para mostrar un modal de edición de perfil.

8. **Uso de enrutamiento:**
   - Se utiliza `useParams` para obtener el parámetro de la URL.

9. **Uso de Redux:**
   - Se utiliza `useDispatch` y `useSelector` para manejar acciones y el estado global.

10. **Uso de eventos y acciones:**
    - El evento `onClick` se utiliza para manejar la apertura del modal de edición y el cierre de sesión.

11. **Uso de efectos y actualización:**
    - Se utiliza `useEffect` para cargar los detalles del perfil del usuario y reaccionar a cambios.

12. **Uso de operador ternario:**
    - Se utiliza un operador ternario para mostrar el icono de edición y el botón de cierre de sesión.

```jsx
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
    <ProfileModal
      modalOpened={modalOpened}
      setModalOpened={setModalOpened}
      data={user}
    />
  </Modal>
);
```


#### 5.1.8 Código Limpio en el Componente LogoSearch

Sea componente `LogoSearch.jsx` de la carpeta `LogoSearch`

1. **Nombres descriptivos:**
   - `LogoSearch`, `unsalogoPrincipal` son ejemplos de nombres descriptivos.

2. **Indentación y formato:**
   - El código mantiene una estructura de indentación consistente y utiliza espacios en blanco de manera efectiva.

3. **Comentarios claros:**
   - No se necesitan comentarios adicionales ya que el código es bastante legible en sí mismo.

4. **Separación de preocupaciones:**
   - El componente `LogoSearch` se encarga de mostrar el logo y la barra de búsqueda.

5. **Uso adecuado de espacios en blanco:**
   - El código utiliza espacios en blanco para separar visualmente las secciones lógicas y mejorar la legibilidad.

6. **Uso de componentes externos:**
   - Se utilizan íconos de varias bibliotecas para mostrar íconos de búsqueda.

```jsx
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <DiJqueryUiLogo className="unsalogoPrincipal" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="">
          <BiSolidSearchAlt2 className="unsa" />
        </div>
      </div>
    </div>
  );
};
```



#### 5.1.9 Código Limpio en el Componente LogoSearch



## 6. Estilos de Programación

### 6.1 Descripción

Se va a describir el enfoque y los estilos de programación utilizados en el proyecto, destacando cómo contribuyen a la coherencia y eficiencia del código.

### 6.2 Fragmento de Código (Evidencia)

Se muestra un fragmento de código que ilustra la implementación de un estilo de programación particular.

## 7. Principios SOLID

### 7.1 Descripción

Se explica cómo se aplicaron los principios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) en el desarrollo del software.

### 7.2 Fragmento de Código (Evidencia)

Se exhibe un fragmento de código que demuestra la adhesión a uno o varios principios SOLID.

## 8. Conceptos DDD

### 8.1 Descripción

Se detalla cómo se incorporaron los conceptos de Domain-Driven Design (DDD) en el diseño y desarrollo del proyecto.

### 8.2 Fragmento de Código (Evidencia)

Se muestra un fragmento de código que refleja la implementación de un concepto DDD específico.

Este README proporciona una estructura completa para documentar tu proyecto de manera organizada y detallada. Asegúrate de llenar cada sección con la información relevante y las pruebas correspondientes para mostrar el enfoque y los logros de tu proyecto.
