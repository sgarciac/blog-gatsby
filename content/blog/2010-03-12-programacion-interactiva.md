---
description: none
title: Programación interactiva
author: sergio
type: post
date: 2010-03-12T18:58:29+00:00
url: /2010/03/12/programacion-interactiva/
categories:
  - programación

---
Una de las cosas que mas me gustan de programar en Lisp es que encuentro facil mantener la concentración cuando lo hago. Creo que esto se debe en buena parte a la _programación interactiva_ que facilitan los ambientes de desarrollo en lisp. La programación interactiva consiste en ir modificando un programa poco a poco mientras éste se encuentra activo. Es decir, el termino de _programación interactiva_ no tiene que ver con el estilo en el queesta escrito un programa sino con el _proceso_ de escritura del código. Veamos esto un poco mas en detalle.

<p style="text-align: center">
  <img class="aligncenter" src="http://upload.wikimedia.org/wikipedia/commons/9/9a/Symbolics-keyboard.jpg" alt="" width="450" />
</p>

<p style="text-align: center">
  Teclado symbolics
</p>

En ambientes no interactivos los programadores trabajan intercalando dos tipos de actividades bien separadas: la edición y la ejecución. La programación es entonces una secuencia de sesiones de edición de código y de sesiones de ejecución (y a veces también de fases de compilación). Al terminar una sesión de edición, se lanza el programa y se observan los efectos sobre el comportamiento del programa. Una vez se ha observado el programa en ejecución, se interrumpe el programa para empezar una nueva sesión de edición. Cada actividad esta claramente delimitada e implica un tipo de gestos distinto. El cambio entre una actividad y otra implica un cambio de contexto mental que se convierte en un esfuerzo adicional. El programador tiende entonces a programar en sesiones de edición largas para evitar el tener que cambiar frecuentemente de actividad.

En ambientes interactivos, el programa todo el tiempo esta en ejecución y el programador modifica su comportamiento haciendo un pequeño cambio a la vez. El programador trabaja en micro-sesiones de edición tras las cuales observa inmediatamente el resultado de la edición. La sensación del programador es que las dos actividades, modificar el programa y observar el resultado de las modificaciones, se funden en una sola actividad.

Los programadores de common lisp suelen usar el editor de texto Emacs junto a Slime, una adaptación que permite programar interactivamente. Una sesión de trabajo consiste habitualmente en:

  1. Cargar el sistema en el que se va a trabajar, a partir del editor;
  2. Escribir nuevas funciones o modificar las existentes y hacer que el sistema en ejecución use estas nuevas definiciones tan pronto se van escribiendo;
  3. Probar constantemente estas nuevas funciones ejecutando fragmentos de código, que luego pueden deshecharse.

Como se puede ver, el programador &#8220;lanza&#8221; el sistema al inicio de una sesión de trabajo y no lo detiene sino cuando termina de trabajar.

En java se puede lograr un cierto nivel de interactividad usando un buen ambiente de desarrollo integrado, por ejemplo Eclipse, en el que un programa puede facilmente ejecutarse en modo &#8220;debug&#8221; y modificar las clases &#8220;en caliente&#8221; sin tener que detener la ejecución. Aún así, en java muchas veces es necesario detener la ejecución del programa, por ejemplo cuando se cambia el nombre de un método.

<p style="text-align: center">
  <img class="aligncenter" src="http://upload.wikimedia.org/wikipedia/en/c/cb/Tc15startup.png" alt="" width="450" />
</p>

<p style="text-align: center">
  Turbo C
</p>

Aparte del ambiente de desarrollo, el lenguaje en si mismo influye en que tan interactivamente se pueda programar. Por ejemplo, muchas veces en java, para poder usar una cierta librería, es necesario crear sub-clases. Crear una clase implica una sesión de tecleo relativamente larga, que destruye la fluidez de la programación interactiva.

Uno de los ambientes **menos** interactivos en los que he trabajado lo sufrí desarrollando una cierta aplicación en java que solo podia ejecutarse en un servidor de aplicaciones instalado en otra máquina. Cada vez que modificaba el código y queria probar mis cambios, debia detener la aplicación, subir el programa usando una interfaz web y relanzarlo. Para una persona como yo, a la que le cuesta concentrarse, mantener la cabeza en lo que estaba haciendo era una odisea en esas condiciones.

Creo que la academia debería interesarse al tema del placer en la programación. Por que puede ser mas placentero programar de una cierta manera que otra y cómo se refleja el placer del programador sobre el resultado final.
