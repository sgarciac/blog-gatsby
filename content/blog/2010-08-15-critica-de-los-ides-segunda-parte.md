---
description: none
title: Crítica de los IDEs (segunda parte)
author: sergio
type: post
date: 2010-08-15T01:48:39+00:00
url: /2010/08/15/critica-de-los-ides-segunda-parte/
categories:
  - opinion
  - programación

---
Inspirado por [un buen comentario][1] de Manuel Cerón, estuvé pensando un rato sobre las verdaderas razones por las cuales usar eclipse no me llega a parecer del todo placentero. El primer comentario de Manuel es bastante acertado: el tiempo de arranque de eclipse es irrelevante dado que arrancar eclipse es algo que se hace muy raramente. En mi caso, por ejemplo, usualmente lanzo eclipse el lunes en la mañana y lo vuelvo a cerrar el viernes en la noche. Al trabajar en java en eclipse, uno _hace todo_ a partir de eclipse, todo el tiempo, por lo cual tiene sentido que eclipse permanezca abierto todo el tiempo, dominando toda la pantalla.

Creo que este último punto esta en la base de mi principal problema con eclipse (y en general los IDEs): para cumplir su promesa de facilitar la tarea de escribir codigo, eclipse exige una especie de entrega total. Parafraseando al Duce Mussolini, _Todo en eclipse, nada por fuera de eclipse_. Eclipse se hace cargo de todos los detalles peludos del asunto, a cambio de que uno renuncia a la posibilidad de meterle mano en la mitad a la cadena de herramientas y pasos involucrados. Por la misma razón, es dificil introducir una herramienta externa al manejo de un proyecto sin introducir perturbaciones que eclipse es incapaz de tratar correctamente.

Manuel señala correctamente que el refactoring es solo una de las facilidades de edición que ofrece eclipse, al lado de otras estilo auto-expansión del código o el navegar a la definición de una función desde una referencia a ella (esto ultimo lo ofrece emacs en C desde tiempos inmemoriales). En mi opinión las funciones de refactoring son tal vez las funciones de edición mas sofisticadas de eclipse y se me ocurre que es posible que para Python (el lenguaje de preferencia de Manuel) sean menos avanzadas que para java. Esto me conduce a pensar en otro punto, de bastante menor importancia y por el cual no se puede culpar a eclipse, y es el hecho de que en general me parece que los paquetes oficiales son de muchisima mas calidad que los no-tan-oficiales. Por ejemplo, el soporte a CVS es _brutalmente_ bueno, mientras que para GIT no existe nada siquiera aceptable.

 [1]: http://blog.crazyrobot.net/?p=285&cpage=1#comment-668
