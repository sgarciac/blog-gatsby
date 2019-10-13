---
description: none
title: Abstracción sintactica
author: sergio
type: post
date: 2010-03-19T18:35:39+00:00
url: /2010/03/19/abstraccion-sintactica/
categories:
  - programación

---
<p style="text-align: center">
  <div id="attachment_194" style="width: 333px" class="wp-caption aligncenter">
    <a href="http://blog.crazyrobot.net/files/2010/03/joanmiro1.jpg"><img class="size-full wp-image-194 " src="http://blog.crazyrobot.net/files/2010/03/joanmiro1.jpg" alt="le coq" width="323" height="422" /></a>
    
    <p class="wp-caption-text">
      Le Coq - Joan Miro
    </p>
  </div>
  
  <p>
    Recordemos algunas nociones básicas.
  </p>
  
  <p>
    La misión del desarrollador de software consiste en escribir programas que sean faciles de entender. Un programa es facil de entender cuando esta escrito como un conjunto sencillo de relaciones entre conceptos. Como estos conceptos pueden ser a su vez complejos, el programador retiene de ellos unicamente la información necesaria para entender sus relaciones con los demás conceptos. Cada concepto del programa principal es representado por otro pedazo del programa, escrito de manera similar. Este mecanismo de reducción del nivel de detalle de una parte del programa se conoce como <em>abstracción</em>.
  </p>
  
  <p>
    Si en un programa existen pedazos de código muy similares, el programador debe preguntarse si no existe un concepto implicito que merezca ser representado por una abstracción.
  </p>
  
  <p>
    Los dos tipos de abstracción mas conocidos son tal vez el <em>procedimiento</em>, que captura una serie de acciones, y los <em>ti</em><em>pos de datos</em>, que representan la entidades sobre las cuales un programa actua. Los diferentes tipos de abstracción permiten reducir la complejidad de los programas de diferentes maneras. Cada lenguaje de programación ofrece sus propios mecanismos de abstracción según el estilo de programación que promueven, por ejemplo funcional u orientado a objetos.
  </p>
  
  <p style="text-align: center">
    <div id="attachment_197" style="width: 386px" class="wp-caption aligncenter">
      <a href="http://blog.crazyrobot.net/files/2010/03/Leger_railway_crossing.jpg"><img class="size-full wp-image-197 " src="http://blog.crazyrobot.net/files/2010/03/Leger_railway_crossing.jpg" alt="Railway Crossing" width="376" height="310" srcset="http://blog.crazyrobot.net/files/2010/03/Leger_railway_crossing-300x247.jpg 300w, http://blog.crazyrobot.net/files/2010/03/Leger_railway_crossing-363x300.jpg 363w, http://blog.crazyrobot.net/files/2010/03/Leger_railway_crossing.jpg 850w" sizes="(max-width: 376px) 100vw, 376px" /></a>
      
      <p class="wp-caption-text">
        Railway Crossing - Leger
      </p>
    </div>
    
    <p>
      La <em>abstracción sintactica</em> permite regrupar formas sintacticas similares. Para explicar a que me refiero con &#8220;formas sintacticas similares&#8221; daré un ejemplo. En el lenguaje java, en las versiones anteriores a 1.5, la manera mas familiar de iterar sobre un arreglo era escribir algo asi:
    </p>
    
    <p>
      <code>&lt;br />
int[] arreglo = {1,2,3};</code><code> </code>
    </p>
    
    <p>
      <code>for (int i = 0; i &lt; arreglo.length ; i++){&lt;br />
int var = arreglo[i];&lt;br />
doSomethingWith(var);&lt;br />
}&lt;br />
</code>
    </p>
    
    <p>
      Al escribir código como este muchas veces, es obvio que hay algo que puede generalizarse. Java 1.5 ofrece la siguiente forma de escribir esto mismo:
    </p>
    
    <p>
      <code>int[] arreglo = {1,2,3};&lt;br />
</code>
    </p>
    
    <p>
      <code>for (int var : arreglo){&lt;br />
doSomethingWith(var);&lt;br />
}</code>
    </p>
    
    <p>
      La ganancia en legibilidad es enorme cuando se tiene en cuenta el enorme número de iteraciones sobre un arreglo que pueden aparecer en un programa. Como java no ofrece soporte a la abstracción funcional, los programadores de java tuvimos que esperar hasta que los encargados de el lenguaje ofrecieran esta nueva forma de iterar sobre un arreglo, sin poder hacer nada al respecto. En un lenguaje como lisp que permite la abstracción sintactica el programador podría haber creado su propia versión de &#8220;for&#8221;, de considerarlo necesario. En lisp esto se hace gracias a un poderoso sistema de <em>macros</em>.
    </p>
    
    <p>
      Veamos otro ejemplo, basado en common lisp pero explicado en pseudo código. Si imaginamos una librería que permita escribir lineas de texto a un archivo, su uso en un lenguaje tradicional se parecerá a esto:
    </p>
    
    <p>
      <code>&lt;br />
variable stream = open("archivo");&lt;br />
try {&lt;br />
print(stream, "hello");&lt;br />
print(stream, "world");&lt;br />
}&lt;br />
finally {&lt;br />
close(stream);&lt;br />
}&lt;br />
</code>
    </p>
    
    <p>
      Luego de escribir código parecido al anterior muchas veces, podemos imaginar lo conveniente que sería reducir lo anterior a una forma mas pura, algo parecido a esto:
    </p>
    
    <p>
      <code>&lt;br />
with-open-file (stream "archivo") {&lt;br />
stream.print("hello world");&lt;br />
}</code>
    </p>
    
    <p>
      que &#8220;esconda&#8221; los detalles de captura de excepciones y de cerrar el <em>stream</em> al final de su uso.
    </p>
    
    <p>
      En lisp existe un macro que hace exactamente eso. Pero el punto aquí no es que lisp soporte esta sintaxis sino que, de no existir, el programador podria introducirla sin ningun problema.
    </p>
