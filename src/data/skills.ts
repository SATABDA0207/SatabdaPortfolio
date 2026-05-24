export type SkillCategory = {
  id: string
  file: string
  title: string
  theme: 'backend' | 'frontend' | 'infra' | 'ai'
  skills: string[]
}

export type SkillMetric = {
  value: string
  label: string
}

export const skillsCategories: SkillCategory[] = [
  {
    id: 'backend',
    file: 'backend.ts',
    title: 'Backend Systems',
    theme: 'backend',
    skills: [
      'Go',
      'Java',
      'SpringBoot',
      'Node.js',
      'REST APIs',
      'Microservices',
      'Distributed Systems',
      'System Design',
      'Concurrency',
    ],
  },
  {
    id: 'frontend',
    file: 'frontend.tsx',
    title: 'Engineering Fundamentals',
    theme: 'frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML/CSS', 'JavaScript'],
  },
  {
    id: 'infra',
    file: 'infra.tf',
    title: 'Cloud & Infra',
    theme: 'infra',
    skills: ['AWS', 'Lambda', 'DynamoDB', 'Redis', 'Kafka', 'SQS', 'Docker', 'Kubernetes'],
  },
  {
    id: 'ai',
    file: 'ai-stack.py',
    title: 'AI / RAG Lab',
    theme: 'ai',
    skills: [
      'RAG',
      'Vector DB',
      'Claude',
      'Prompt Engineering',
      'Agentic Workflows',
      'LLM Tooling',
    ],
  },
]

export const skillsStatus = {
  title: 'Backend Engineer focused on scalable systems & developer tooling.',
  description:
    'Building distributed systems, integration frameworks, AI tooling, and backend infrastructure with strong emphasis on scalability and developer experience.',
  metrics: [
    { value: '3+', label: 'years experience' },
    { value: '6+', label: 'production systems' },
  ] as SkillMetric[],
}

export const exploringTopics = [
  'Observability',
  'AI Agents',
  'Event-Driven Systems',
  'Platform Engineering',
]
