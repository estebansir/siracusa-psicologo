import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Política de privacidad | Esteban Siracusa',
  description: 'Qué datos se recopilan al visitar este sitio, con qué servicios y con qué fines, y cómo ejercer tus derechos sobre tus datos personales.',
  pathname: '/privacidad',
});

const LAST_UPDATED = '23 de noviembre de 2026';

export default function Privacidad() {
  return (
    <section className="prose-section-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-4">Política de privacidad</h1>
        <p className="text-sm text-gray-600 mb-10">Última actualización: {LAST_UPDATED}</p>

        <h2 className="text-left">Quién es responsable</h2>
        <p className="text-gray-700">
          Este sitio es de Esteban Siracusa, Licenciado en Psicología, Matrícula Nacional N.º 85046, con domicilio en
          Argentina. Para cualquier consulta sobre esta política o sobre tus datos podés escribir a{' '}
          <a href="mailto:esteban.siracusa@gmail.com">esteban.siracusa@gmail.com</a>.
        </p>

        <h2 className="text-left">Qué datos se recopilan en este sitio</h2>
        <p className="text-gray-700">
          El sitio no tiene formularios ni registro de usuarios. No te pido nombre, teléfono, correo ni información sobre
          tu salud a través de la web.
        </p>
        <p className="text-gray-700">
          Al navegar se recopilan datos técnicos y de uso mediante los servicios que se detallan abajo:
        </p>
        <ul className="text-gray-700">
          <li>las páginas que visitás y desde dónde llegaste (por ejemplo, un anuncio o un buscador);</li>
          <li>si te desplazás hasta casi el final de una página (90 % de su largo);</li>
          <li>
            los clics en enlaces que llevan a otros sitios, incluidos los botones de WhatsApp (se registra la dirección
            del enlace, no lo que escribís después);
          </li>
          <li>el tipo de dispositivo y navegador, y una ubicación aproximada (país o ciudad).</li>
        </ul>
        <p className="text-gray-700">
          Estos datos se usan de forma agregada para entender cómo se usa el sitio y medir el resultado de los anuncios.
        </p>

        <h2 className="text-left">Servicios de terceros que usa el sitio</h2>
        <ul className="text-gray-700">
          <li>
            <strong>Google Analytics 4</strong> (Google LLC): mide las visitas, los desplazamientos, los clics en
            enlaces externos y el uso de los botones de WhatsApp. Usa dos cookies propias de Analytics,{' '}
            <code>_ga</code> y <code>_ga_PE2V2P34NK</code>, que según la configuración predeterminada de Google duran
            hasta 2 años. Los datos de eventos se conservan 2 meses y los asociados a un usuario, 14 meses; después de esos
            plazos solo quedan en informes agregados. Según Google, Analytics 4 no registra ni almacena direcciones IP.
          </li>
          <li>
            <strong>Google Signals</strong> (función de Google Analytics): está activado. Si iniciaste sesión en tu
            cuenta de Google y permitiste la personalización de anuncios, Google puede asociar estas visitas con tu
            cuenta para generar informes agregados, por ejemplo de uso entre dispositivos o datos demográficos. Yo no
            recibo datos que te identifiquen. Podés controlar esta asociación desde la configuración de tu cuenta de
            Google (Mi Actividad y Configuración de anuncios). La recopilación de datos proporcionados por usuarios
            (como correos o teléfonos) no está habilitada.
          </li>
          <li>
            <strong>Google Ads</strong> (Google LLC): si llegás desde un anuncio, Google agrega a la dirección un
            identificador de clic. Google Analytics informa a Google Ads cuándo se tocó un botón de WhatsApp después de
            ese clic, para medir qué anuncios funcionan. No uso listas de remarketing ni audiencias personalizadas, y no
            envío a Google datos sobre consultas, sesiones ni pacientes.
          </li>
          <li>
            <strong>Vercel</strong> (Vercel Inc.): aloja el sitio. Como cualquier servidor web, procesa datos técnicos
            de la conexión, como la dirección IP y el navegador, para entregar las páginas y por seguridad.
          </li>
          <li>
            <strong>WhatsApp</strong> (WhatsApp LLC, del grupo Meta): los botones de contacto abren WhatsApp con un
            mensaje prellenado. Ese mensaje termina con un código breve, por ejemplo «(ref. C1)», que indica por qué vía
            llegaste al sitio: un anuncio, un buscador, un asistente de inteligencia artificial, un directorio, una red
            social, o ninguna referencia detectable. El código no incluye tu nombre ni otros datos tuyos, pero si enviás
            el mensaje queda en la conversación de WhatsApp, junto con tu número y lo que escribas. Lo uso solo para
            saber qué canales generan consultas, y podés borrarlo antes de enviar el mensaje. Lo que escribas por
            WhatsApp queda sujeto también a las políticas de WhatsApp.
          </li>
        </ul>
        <p className="text-gray-700">
          Estos proveedores pueden procesar datos en servidores ubicados fuera de Argentina, por ejemplo en Estados
          Unidos.
        </p>

        <h2 className="text-left">Cómo cuido la información que me envías</h2>
        <p className="text-gray-700">
          Los datos que me compartas al consultar por WhatsApp o por correo, y toda la información que surja de la
          terapia, se usan solo para responder tu consulta, coordinar y llevar adelante la atención, y emitir
          facturas. Están protegidos por el secreto profesional y no se comparten con terceros, salvo en los casos en
          que la ley lo exija.
        </p>

        <h2 className="text-left">Cookies y cómo evitarlas</h2>
        <p className="text-gray-700">
          El sitio no usa cookies propias. Para armar el código del mensaje de WhatsApp guarda en tu navegador, en el
          almacenamiento de sesión, un dato de dos caracteres con la vía de llegada, que se borra al cerrar la pestaña.
          Ese código no se agrega a los datos que el sitio envía a Google Analytics. Las únicas cookies son las de
          Google Analytics mencionadas arriba.
        </p>
        <p className="text-gray-700">
          Podés bloquear o borrar las cookies desde la configuración de tu navegador, o instalar el complemento de
          inhabilitación de Google Analytics que ofrece Google. El sitio sigue funcionando igual sin cookies.
        </p>

        <h2 className="text-left">Tus derechos</h2>
        <p className="text-gray-700">
          Podés pedir acceso, rectificación, actualización o supresión de tus datos personales escribiendo a{' '}
          <a href="mailto:esteban.siracusa@gmail.com">esteban.siracusa@gmail.com</a>.
        </p>
        <p className="text-gray-700">
          El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma
          gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme
          lo establecido en el artículo 14, inciso 3 de la Ley N.º 25.326. La Agencia de Acceso a la Información
          Pública, en su carácter de Órgano de Control de la Ley N.º 25.326, tiene la atribución de atender las
          denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las
          normas vigentes en materia de protección de datos personales.
        </p>

        <h2 className="text-left">Cambios en esta política</h2>
        <p className="text-gray-700 mb-0!">
          Si cambian los servicios que usa el sitio o la forma de tratar los datos, voy a actualizar esta página y la
          fecha de arriba.
        </p>
      </div>
    </section>
  );
}
