import dns from "dns/promises";

dns.resolveSrv("_mongodb._tcp.cluster0.7azsyfx.mongodb.net")
  .then(console.log)
  .catch(console.error);