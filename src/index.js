import app, { listen, get as _get } from '../config/server.js';

require('./app/routes/news')(app);

listen(_get(get('port'), () => {
    console.log('server on port ', _get('port'));
}));


// document.addEventListener("DOMContentLoaded", (event) => {
//     // Usar la API de ipify para obtener la IP pública
//     fetch("https://api.ipify.org?format=json")
//         .then((response) => response.json())
//         .then((data) => {
//             const userIp = data.ip;
//             console.log("IP Pública del usuario:", userIp);

//             // Puedes hacer algo con la IP obtenida, como enviarla a tu servidor
//             // o mostrarla en la página web
//             // Ejemplo: Mostrar la IP en un elemento de la página
//             document.getElementById(
//                 "user-ip"
//             ).textContent = `IP Pública: ${userIp}`;
//         })
//         .catch((error) => {
//             console.error("Error al obtener la IP pública:", error);
//         });
// });
/** Info obtenida con mi ip desde ipinfo.io
 * {ip: "190.131.109.114",
hostname:
"cgnathfc-190-131-109-114.customer.claro.com.ec",
city:
"Guayaquil",
region:
"Guayas",
country:
"EC",
loc:
"-2.1962,-79.8862",
org:
"AS27738 Ecuadortelecom S.A.",
postal:
"090307",
timezone:
"America/Guayaquil",
asn:
Object,
asn:
"AS27738",
name:
"Ecuadortelecom S.A.",
domain:
"claro.com.ec",
route:
"190.131.109.0/24",
type:
"isp",
company:
Object,
name:
"Ecuadortelecom S.A.",
domain:
"claro.com.ec",
type:
"isp",
privacy:
Object,
vpn:
false,
proxy:
false,
tor:
false,
relay:
false,
hosting:
false,
service:
"",
abuse:
Object,
address:
"AV. FRANCISCO DE ORELLANA EDIF. CENTRUM, P09, -, - - Guayaquil -",
country:
"EC",
email:
"ticcorporativoredesyseguridades@claro.com.ec",
name:
"Corporativo Red Fija",
network:
"190.131.64.0/18",
phone:
"+593 45004040 [2070]",
}
 */