# Trabajo Integrador Programación III

## Objetivo

El objetivo de este trabajo integrador es que los estudiantes demuestren sus habilidades con las herramientas que utilizarán en el desarrollo web. Está diseñado para evaluar sus capacidades en la creación de sitios web MVC tanto en la capa frontend como backend.

Pondremos el foco en obtener un **código simple, bien diseñado y organizado**, así como el cumplimiento de todos los requerimientos solicitados.

**Fecha de evaluacion:** 6 de diciembre.

## Condición de Aprobación

Para aprobar el Trabajo Integrador, se deben realizar 5 puntos de la sección asignada o 4 puntos de esa sección y 2 puntos de la otra sección (ya sea Frontend o Backend).

<br/>
<br/>

## Requisitos de Stack

Para el desarrollo de la aplicación deberá utilizar:

- Node.js
- Sequelize
- MySQL
- EJS
- Bootstrap
- JavaScript
- HTML
- CSS

## Desarrollo del trabajo práctico

- Se deberá clonar o "forkear" este repositorio para poder modificarlo y completarlo con la resolución del proyecto.
- Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisemos.

<br/><br/>

## Trabajo Práctico

## Frontend

- Corregir la creación de tareas: _El nombre de la tarea debe reflejarse correctamente en la lista después de ser creada._
- Agregar la fecha de creación: _Incluir la fecha junto al nombre de cada tarea en la lista._
- Crear función de eliminación: _Implementar el script para eliminar tareas y vincularlo con la ruta DELETE /:id_
- Crear función de actualización: _Implementar el script para modificar el estado de una tarea (completada o no) y vincularlo con la ruta PUT /:id (con el cuerpo {status})_
- Crear footer: _Diseñar y agregar un footer al sitio_
- Estilizar y agregar alertas: _Mejorar los estilos con Bootstrap y agregar alertas (o notificaciones) según el flujo de la aplicación_

## Backend

- Ruta para obtener tarea por ID: _Implementar la ruta GET /:id para obtener una tarea específica_
- Corregir el controllador de obtencion de tareas por id: _Revisar y corregir la lógica de la ruta GET /:id_
- Eliminar tarea: _Implementar el controlador deleteTasksController para eliminar una tarea_
- Eliminar tarea: _Crear la ruta DELETE /:id_
- Actualizar tarea: _Implementar el controlador updateTaskController para modificar el estado de la tarea (marcar como completada o no)_
- Actualizar tarea: _Crear la ruta PUT /:id con el cuerpo {status}_
