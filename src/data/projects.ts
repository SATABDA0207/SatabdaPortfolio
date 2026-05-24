export type ProjectType = 'work' | 'university' | 'side'

export type ProjectCard = {
  id: string
  panel: string
  title: string
  company: string
  type: ProjectType
  badge: string
  description: string
  impacts: Array<{ text: string; accent?: 'orange' | 'teal' }>
  tags: string[]
  note: string
  href?: string
  className?: string
}

export const projectsData: ProjectCard[] = [
  {
    id: 'gif',
    panel: '#01',
    title: 'GIF - Generic Integration Framework',
    company: 'Razorpay',
    type: 'work',
    badge: 'G',
    description:
      'Built a pluggable integration framework for Magic Checkout to standardize shipping, COD, and coupon providers using reusable adapters and config-driven onboarding.',
    impacts: [
      { text: 'Reduced integration effort from 7 days to under 2 hours.', accent: 'orange' },
      {
        text: 'Added agentic onboarding workflows for faster provider integrations.',
        accent: 'teal',
      },
    ],
    tags: ['Go', 'Microservices', 'Adapters', 'Agentic Workflows', 'Claude'],
    note: 'integration infra at scale →',
    className: 'md:col-span-2 bg-gradient-to-br from-brand-teal/15 via-brand-bg to-brand-orange/10',
  },
  {
    id: 'rag-assistant',
    panel: '#02',
    title: 'RAG-Powered AI Assistant',
    company: 'Razorpay',
    type: 'work',
    badge: 'R',
    description:
      'Internal knowledge assistant ingesting PDFs, images, and videos into vector stores for onboarding and engineering support workflows.',
    impacts: [{ text: 'Multi-modal retrieval pipeline with vector search.', accent: 'teal' }],
    tags: ['Python', 'RAG', 'Vector DB', 'GenAI'],
    note: 'production AI tooling →',
    className: 'bg-gradient-to-br from-brand-orange/10 via-brand-bg to-brand-teal/15',
  },
  {
    id: 'pod-mcf',
    panel: '#03',
    title: 'Pay On Delivery - MCF',
    company: 'Amazon',
    type: 'work',
    badge: 'A',
    description:
      'Cash-on-delivery support for Multi-Channel Fulfillment sellers across India with scalable order processing flows.',
    impacts: [{ text: '10k+ orders/week processed at launch.', accent: 'orange' }],
    tags: ['Java', 'SpringBoot', 'Lambda', 'DynamoDB'],
    note: 'scaled fulfillment infra →',
    className: 'bg-gradient-to-br from-brand-teal/15 via-brand-bg to-brand-teal/5',
  },
  {
    id: 'aws-migration',
    panel: '#04',
    title: 'AWS Region Migration',
    company: 'Amazon',
    type: 'work',
    badge: 'A',
    description:
      'DUB to ZAZ migration for SellerCapacity serving constant 200k traffic with zero downtime.',
    impacts: [{ text: 'Delivered 20% infra cost reduction.', accent: 'orange' }],
    tags: ['AWS', 'DynamoDB', 'SQS'],
    note: 'zero downtime migration →',
    className: 'bg-gradient-to-br from-brand-orange/10 via-brand-bg to-brand-teal/10',
  },
  {
    id: 'sdn',
    panel: '#05',
    title: 'SDN System',
    company: 'DRDO',
    type: 'university',
    badge: 'S',
    description:
      'Software Defined Network using OpenFlow protocol with GUI and CLI controls built in Django.',
    impacts: [{ text: 'Implemented a programmable network control layer.', accent: 'teal' }],
    tags: ['Python', 'Django', 'MongoDB'],
    note: 'networking systems research →',
    className: 'bg-gradient-to-br from-brand-dark/10 via-brand-bg to-brand-teal/10',
  },
  {
    id: 'lets-talk',
    panel: '#06',
    title: "Let's Talk - Live Chat App",
    company: 'Personal',
    type: 'side',
    badge: 'L',
    description:
      'Real-time chat application with personal and group messaging using Socket.io for low-latency communication.',
    impacts: [],
    tags: ['JavaScript', 'Node.js', 'Socket.io', 'HTML/CSS'],
    note: 'real-time communication experiment →',
    className:
      'md:col-span-2 bg-gradient-to-br from-brand-orange/15 via-brand-bg to-brand-orange/5',
  },
]
