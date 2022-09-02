# Modelo de Cajas
### **Felipe de Jesus Martinez Salinas 19100211**  

En CSS, todo contiene cajas alrededor, así que al entender como funcionan estas, podremos aplicar mejores diseños y lograr mejores resultados en nuestros proyectos.  

## Cajas en bloque y en línea  
En CSS hay dos tipos de cajas: cajas en bloque y en línea. Esto se refiere, a como se comportan en nuestra página y también en respecto a otros elementos.  

>En este caso, el **modelo de cajas** solo se aplica a las cajas con comportamiento en bloque.
  
  
---

Este modelo nos define como funcionan juntas todas las partes de una caja(margen, borde, relleno y contenido).

### **Partes de una caja:**  
- Contenido(*content box*): Es el área donde se muestra el contenido, su tamaño se puede modificar con propiedades como **width** y **height**.
- Relleno(*padding box*): El relleno o **padding** como se suele llamar, es espacio en blanco que se encuentra alrededor del contenido. Podemos modificar su tamaño con la propiedad **padding** y demás relacionadas.
- Borde de la caja(*border box*): Este borde envuelve a todo el contenido y su relleno. Se puede modificar su tamaño con la propiedad **border** y demás relacionadas.
- Margen de la caja(*margin box*): Es la capa más externa. Envuelve a todo el contenido, padding y borde. Es posible controlar su tamaño con la propiedad **margin** y demás relacionadas.