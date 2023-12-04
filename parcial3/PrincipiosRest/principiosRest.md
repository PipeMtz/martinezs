# Principios de la Arquitectura REST

## 1. Interfaz Uniforme

La interfaz uniforme es una restricción fundamental en el diseño RESTful. Los servicios se conceptualizan y clasifican como recursos de la aplicación, cada uno con su propia interfaz de cliente. Es esencial que estos recursos sean lo suficientemente pequeños en alcance y volumen de datos para que una única interfaz pueda manejarlos eficientemente. Los mecanismos de interfaz deben comportarse de manera coherente entre recursos relacionados.

Para lograr esto, es necesario tratar los recursos como "sustantivos" o entidades únicas que aceptan entradas e interpretan llamadas como instrucciones de procedimiento. La consistencia en las definiciones de recursos y los diseños de API es esencial para evitar confusiones y comparticiones erróneas de datos entre diferentes interfaces.

## 2. Modelo Cliente-Servidor

La restricción del modelo cliente-servidor establece que el acoplamiento entre un recurso RESTful y sus API asociadas debe existir solo en la interfaz del lado del cliente. Esto permite que los recursos evolucionen de manera independiente, facilitando la colaboración entre equipos de desarrollo de backend y frontend.

Este acoplamiento flexible reduce las dependencias mal administradas, evitando roturas y simplificando los procesos de actualización. Al separar las responsabilidades entre el cliente y el servidor, se mejora la capacidad de respuesta y la colaboración entre equipos.

## 3. Sin Estado (Stateless)

La restricción sin estado, o apátrida, es crítica en las arquitecturas REST. Implica que los recursos del servidor no deben almacenar información entre solicitudes ni imponer una secuencia de procesamiento requerida. Cada solicitud se trata de manera independiente, basándose únicamente en la información contenida en esa solicitud y la operación especificada.

Esta propiedad es clave para la escalabilidad y resiliencia de los servicios, ya que cada instancia de un recurso responde de la misma manera, independientemente de eventos pasados o secuencias de operaciones. Implementar un diseño sin estado puede ser complicado, especialmente cuando las solicitudes contienen datos significativos relacionados con el estado.

## 4. Almacenamiento en Caché

La restricción de almacenamiento en caché permite que las respuestas del servidor se almacenen temporalmente en un repositorio intermedio. Esto mejora la eficiencia y la velocidad de las respuestas, ya que se pueden recuperar de la caché en lugar de generarse nuevamente en el servidor.

No todas las respuestas deben ser almacenables en caché, pero es esencial identificar aquellas que pueden beneficiarse de esta práctica. La implementación de un mecanismo de caché robusto contribuye a la escalabilidad y la reducción de la carga del servidor, siempre que se maneje de manera segura.

## 5. Modelo de Sistema en Capas

La restricción del modelo de sistema en capas permite que una aplicación defina recursos asignándolos a capas de funcionalidad. Cada capa corresponde a una capacidad de servicio compartido, desde actividades simples de equilibrio de carga hasta procesos más complejos como el procesamiento de big data.

No es necesario segmentar cada servicio en su propia capa, pero la arquitectura debe admitir el modelo en capas cuando sea necesario. La implementación de este modelo simplifica la escalabilidad y la gestión de servicios, especialmente en entornos complejos.

## 6. Código Bajo Demanda

La restricción de código bajo demanda es opcional y permite que los recursos RESTful proporcionen código ejecutable en el lado del cliente en lugar del servidor. Esto distribuye la carga de trabajo y mejora el rendimiento al ejecutar ciertas funciones en el cliente.

Implementar código bajo demanda requiere la identificación de las capacidades de ejecución de código en el cliente. Se logra mediante el uso de un lenguaje de programación de propósito general que la mayoría de los componentes de la aplicación admiten. Esta práctica es opcional y puede no ser adecuada para todas las aplicaciones, pero ofrece flexibilidad en entornos donde la ejecución en el lado del cliente es ventajosa.
