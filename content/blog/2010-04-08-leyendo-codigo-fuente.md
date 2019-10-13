---
description: none
title: Leyendo código fuente
author: sergio
type: post
date: 2010-04-08T20:23:10+00:00
url: /2010/04/08/leyendo-codigo-fuente/
categories:
  - Uncategorized

---
Sería chevere si uno pudiera leer un programa de computador tal como se lee un libro: en linea recta del principio al fin. Esto casi nunca es posible porque los programas no suelen estar organizados linealmente. Lo que hay, frecuentemente, es un manojo de archivos regados en directorios. Casi siempre me cuesta trabajo encontrar que pedazos del programa hay que leer, y en que orden, para entender globalmente su funcionamiento.

Las diferentes técnicas que he usado son:

  * Si hay suerte, el autor del programa ha escrito un archivo donde explica la estructura del programa y la responsabilidad de cada modulo. Eso da una idea de qué pedazos hay que leer, según lo que uno quiera entender del sistema. Si la documentación es suficientemente buena, el problema está mas o menos resuelto.
  * Mirar el sistema de &#8220;build&#8221; del programa (el Makefile, el archivo ant, .asd etc) e intentar deducir algo de la estructura del mismo.
  * Mirar los directorios en los que estan repartidos los archivos para deducir algo de la estructura.
  * Leer &#8220;de arriba a abajo&#8221;. Comenzar leyendo la función que arranca el programa (el &#8220;main&#8221;) e intentar identificar las funciones de alto nivel. Luego intentar leer &#8220;hacia abajo&#8221;, haciendo diagramas que muestran como se encadenan las funciones.
  * Si es un programa &#8220;orientado a objetos&#8221;, a medida que se lee el programa de arriba a abajo, se va haciendo el diagrama de clases.

Lamentablemente, salvo por los programas cuya estructura está bien documentada, la lectura de un programa escrito por otra persona tiene mucho de una actividad a ciegas.

Sospecho, por su nombre, que la técnica de [literate programming][1] de Knuth produce programas que se pueden leer como un libro. Nunca he intentado practicarla ni he leido programas escritos así. Que alguién me confirme.

**P.S.** Muchas veces el problema es que uno esta haciendo dos cosas al tiempo: intentando entender un programa e intentando aprender el idioma en el que esta escrito, es decir la manera particular en la que el autor del programa usa el lenguaje de programación subyacente. (Esto es mucho menos problematico cuando uno es mucho mas familiar con el lenguaje de programación y conoce estilos mas comunes con los que se usa.)

 [1]: http://en.wikipedia.org/wiki/Literate_programming
