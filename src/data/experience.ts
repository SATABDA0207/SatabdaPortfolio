export type ExperienceBullet = {
  text: string
  accent?: 'orange' | 'teal' | 'dark'
}

export type ExperienceItem = {
  id: string
  company: string
  companyInitial: string
  role: string
  duration: string
  yearLabel: string
  side: 'left' | 'right'
  isCurrent?: boolean
  dotAccent: 'orange' | 'teal' | 'dark'
  bulletsPreview: ExperienceBullet[]
  bulletsFull: ExperienceBullet[]
  tags: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'razorpay',
    company: 'Razorpay',
    companyInitial: 'R',
    role: 'Software Dev Engineer',
    duration: 'Mar 2025 → present',
    yearLabel: 'now',
    side: 'right',
    isCurrent: true,
    dotAccent: 'orange',
    bulletsPreview: [
      {
        accent: 'orange',
        text: 'Stabilized Magic Checkout Shipping Platform - latency ↓25%, failures ↓60%, and enabled international zipcode support.',
      },
      {
        accent: 'teal',
        text: 'Integrated CamsPay Gateway - 5Cr+ weekly payments across 2000+ transactions.',
      },
    ],
    bulletsFull: [
      {
        accent: 'orange',
        text: 'Stabilized Magic Checkout Shipping Platform using graceful degradation for 5xx failures and optimized DB queries, cutting latency by 25% and failures by 60%.',
      },
      {
        accent: 'teal',
        text: 'Integrated CamsPay Gateway into the optimizer service, handling 5Cr+ weekly payments across 2000+ transactions.',
      },
      {
        accent: 'dark',
        text: 'Built a RAG-powered internal AI assistant ingesting PDFs, images, and videos into a searchable vector knowledge base.',
      },
      {
        accent: 'orange',
        text: 'Improved onboarding speed and developer productivity across teams through internal AI enablement.',
      },
    ],
    tags: ['Go', 'Python', 'Vector DB', 'GenAI', 'RAG', 'Git'],
  },
  {
    id: 'amazon',
    company: 'Amazon',
    companyInitial: 'A',
    role: 'Software Dev Engineer',
    duration: 'Jan 2024 → Feb 2025',
    yearLabel: '2024',
    side: 'left',
    dotAccent: 'teal',
    bulletsPreview: [
      {
        accent: 'teal',
        text: 'Built Bulk Appeal flows for Seller App, helping global sellers dispute violations in bulk with ~50% lower latency.',
      },
      {
        accent: 'orange',
        text: 'Launched Pay On Delivery for MCF with ~10k orders/week and 40% monthly growth post launch.',
      },
    ],
    bulletsFull: [
      {
        accent: 'teal',
        text: 'Collaborated with a 5-member cross-functional team to design and launch Bulk Appeal, reducing latency by 50%.',
      },
      {
        accent: 'orange',
        text: 'Implemented Pay On Delivery for Multi Channel Fulfillment sellers, scaling to 10k weekly orders in India.',
      },
      {
        accent: 'dark',
        text: 'Led SellerCapacity migration from eu-west-1 to eu-south-2 with zero downtime and 20% infra cost savings.',
      },
      {
        accent: 'orange',
        text: 'Received 2024 Q3 team award for impact on the MCF COD launch.',
      },
    ],
    tags: ['Java', 'SpringBoot', 'DynamoDB', 'SQS', 'Lambda', 'API Gateway', 'React', 'AWS'],
  },
  {
    id: 'molit',
    company: 'MOL-IT',
    companyInitial: 'M',
    role: 'Application Developer',
    duration: 'Sep 2023 → Dec 2023',
    yearLabel: '2023',
    side: 'right',
    dotAccent: 'dark',
    bulletsPreview: [
      {
        accent: 'dark',
        text: 'Maintained MOL PCC platform and resolved 10+ contractual and booking issues each week.',
      },
      {
        accent: 'teal',
        text: 'Improved user workflows for operations at one of the world’s largest car carrier ecosystems.',
      },
    ],
    bulletsFull: [
      {
        accent: 'dark',
        text: 'Owned maintenance and incremental feature delivery for core booking and contractual workflows.',
      },
      {
        accent: 'teal',
        text: 'Improved UX consistency across high-traffic internal workflows for logistics and vessel teams.',
      },
      {
        accent: 'dark',
        text: 'Contributed to docs, demos, and cross-team coordination to improve delivery quality and predictability.',
      },
    ],
    tags: ['.NET', 'Git', 'Teamwork'],
  },
]
