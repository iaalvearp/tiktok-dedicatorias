fetch('https://tu-servidor.com/guardar-ip', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ip: userIp })
})
    .then(response => response.json())
    .then(result => {
        console.log('IP guardada en el servidor:', result);
    })
    .catch(error => {
        console.error('Error al enviar la IP al servidor:', error);
    });


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