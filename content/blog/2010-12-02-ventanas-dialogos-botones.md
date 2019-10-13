---
description: none
title: Ventanas, Dialogos, Botones
author: sergio
type: post
date: 2010-12-02T15:29:56+00:00
url: /2010/12/02/ventanas-dialogos-botones/
categories:
  - programación

---
El siguiente caso ilustra bien las diferencias de éstilo que veo entre los mundos java y .Net.

En la librería para aplicaciones gráficas de .Net, un programa puede abrir cualquier _Ventana_ en modo _Dialogo_. Todos los _Botones_ tienen asociado un atributo llamado _DialogResult_. Cuando este atributo tiene un valor en un botón que es oprimido, la _Ventana_ que contiene el botón, si está en modo _Dialogo_, se cierra y retorna el valor asociado al botón.

Para un programador acostumbrado al estilo predominante en el mundo Java, esta manera de implementar ventanas de dialogo parece poco elegante por las siguientes razones:

  * Una Ventana de Dialogo es solo un caso particular del concepto abstracto de _Ventan_a. De ninguna manera el comportamiento propio de ese caso particular debe incluirse en la definición  del caso general. Lo adecuado sería definir un tipo particular de _Ventana_ que se haga cargo de esa funcionalidad especial.
  * Peor aun, el comportamiento de un caso particular de _Ventana_ no tiene por que hacerse visible en el tipo _Botón_. Un botón es teoricamente un concepto independiente al de _Ventana_ y aún más independiente del muy particular concepto de _Ventana de Dialogo_.

En resumen, hay cosas que no están en su lugar. Para el programador de Java, al esquema usado por .Net le hacen falta un par de clases para conservar la limpieza _conceptual_ de cada clase.

C# acepta contaminar las clases _Ventana_ y _Botón_ con el fin de ofrecer la funcionalidad de una ventana de dialogo. A cambio, no necesita agregar nuevas clases, con lo cual logra mantener una estructura de clases sencilla. En contraste, en el mundo de Java se privilegia la _pureza_ de cada clase individual sobre la simplicidad de la estructura de clases.

Pero la diferencia fundamental en mi opinión es que, en el espiritú de java, la funcionalidad de ventana de dialogo no merece ninguna consideración particular al diseñar las clases mas abstractas de una librería. En el espiritú, mucho mas pragmático, de c#, el hecho mas importante es que un diálogo es el caso **más frecuente** de uso de una ventana, lo cual lo hace merecer el tratamiento privilegiado.
