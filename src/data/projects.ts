export const projects = [
  {
    description:
      'Took a compliance-critical recording system from concept to production: a RabbitMQ-based state machine synchronising real-time call events from the Avaya AES WebSocket Telephony Interface with recording servers, enriching recordings with agent metadata and issuing resume-recording commands so only registered agents are recorded — across thousands of concurrent calls.',
    techStack: [
      'TypeScript',
      'RabbitMQ',
      'Kubernetes',
      'Avaya AES',
      'WebSockets',
    ],
    title: 'Selective Call Recording Worker',
  },
  {
    description:
      'Built a widget integrated with Genesys Cloud CX that links web sessions with SIP call messaging and web chat, giving agents full customer context in one place and improving handling efficiency.',
    techStack: ['TypeScript', 'Genesys Cloud CX', 'SIP', 'Web Chat'],
    title: 'Genesys Cloud CX Web Integration',
  },
  {
    description:
      'Developed and maintained payment-processing microservices in TypeScript and Node.js, expanding payment service provider coverage and improving reliability and security. Earlier, built secure payment pages and web proxies for major clients, and configured Kamailio dial-plans routing calls between secure voice appliances and agents.',
    techStack: ['TypeScript', 'Node.js', 'PSP APIs', 'Kamailio'],
    title: 'Payment Processing Microservices',
  },
  {
    description:
      'Delivered serverless APIs on AWS: a DNIS data API using Lambda, DynamoDB, and Secrets Manager for secure IVR-to-agent data handling. Deployed and managed services with Kubernetes, Helm, and Istio.',
    techStack: ['AWS Lambda', 'DynamoDB', 'Redis', 'Auth0', 'Helm', 'Istio'],
    title: 'Serverless & Cloud Platform Work',
  },
];
