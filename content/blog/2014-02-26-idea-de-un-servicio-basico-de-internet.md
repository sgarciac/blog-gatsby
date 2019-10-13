---
description: none
title: Un sistema universal de timestamps
author: sergio
type: post
date: 2014-02-26T15:13:52+00:00
url: /2014/02/26/idea-de-un-servicio-basico-de-internet/
seo_follow:
  - 'false'
seo_noindex:
  - 'false'
categories:
  - programación
  - Uncategorized

---
Será que ya existe en internet algo parecido a un servicio que permita dejar registro de que, al momento de crear ese registro, uno está en posesión de tal o cual documento?

Caso de uso:

Juanito debe entregar un ensayo a su profesor de economía a mas tardar el lunes. El internet de Juanito esta caido y Juanito está enfermo y no podrá ir a la universidad el lunes. Juanito verá a su profesor el miercoles siguiente y podra entregarle el ensayo ese día en una llave USB, pero debe demostrar que lo que está entregando el miercoles ya estaba terminado el domingo. La fecha del archivo en el disco no es suficiente, ya que es facil de manipular. Hay una solucion sencilla: Juanito le envia el lunes al asistente del profesor, por medio de un mensaje de texto, un hash del contenido del archivo. El miercoles, el profesor puede comparar lo que juanito entrega con el hash que envió el lunes, lo que prueba que el archivo que está entregando es el mismo que ya Juanito había terminado ese día.

En resumen, si A necesita dejar registro de que esta en posesion de un cierto contenido, basta con que un garante verifique y registre el hecho y el momento en que lo hace ( en el ejemplo anterior, el garante es el asistente del profesor). No es necesario que el garante guarde el contenido completo, ni siquiera que lo conozca. Basta con que guarde el hash del contenido, el cual puede ser usado cuando un tercero necesite verificar que ese contenido ya existía como mínimo desde el momento en que la entrada en registro fue creada. Adicionalmente, se puede garantizar la identidad de la persona que crea el registro, por medio de llave publica/privada, para verificar que el contenido existia y estaba en posesión de esa persona. Alguna organización lo suficientemente confiable debería crear un sistema que permita guardar ese tipo de registros, muy sencillo de implementar ya que no se necesita conservar el contenido de los documentos en cuestión (lo cual es responsabilidad del dueño del contenido, obviamente si el contenido se pierde, el registro no sirve para nada).

Creo que podrían existir muchos usos. Por ejemplo, si alguien crea una imagen y la publica en internet, podría primero crear un registro en ese sistema, para probar, como minimo, que a tal fecha, el ya estaba en posesión de esa imagen, lo que podría ser util si alguien decide &#8220;robarse&#8221; la autoría.

Ya existe algo así o algo que cumpla la misma función?
