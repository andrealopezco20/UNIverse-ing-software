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

#### Código Limpio en el Componente Auth

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

#### Código Limpio en el Componente Chat

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


#### Código Limpio en el Componente Conversation

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
   



#### Código Limpio en el Componente PostShare

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

```jsx
const { user } = useSelector((state) => state.authReducer.authData);
const loading = useSelector((state) => state.postReducer.uploading);
```

import React, { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  return (
    <div className="Posts">
      {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;




## 6. Estilos de Programación

### 6.1 Descripción

Se describe el enfoque y los estilos de programación utilizados en el proyecto, destacando cómo contribuyen a la coherencia y eficiencia del código.

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
