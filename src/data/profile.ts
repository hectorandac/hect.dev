export const person = {
  name: 'Hector Andres Acosta Pozo',
  shortName: 'Hector Acosta',
  role: 'ML Engineer, Computer Vision & Edge AI',
  location: 'Daegu, South Korea',
  email: 'hector.acosta.pozo@gmail.com',
  summary:
    'I build computer vision models and ship them to the edge. I lead the AICU Gait Scanner, from pose and gait models to optimized on-device builds for iOS and Android, and the services behind them.',
  years: '8+ years of software engineering, 3+ years of applied ML',
  links: {
    github: 'https://github.com/hectorandac',
    linkedin: 'https://www.linkedin.com/in/hector-acosta-213388106/',
    orcid: 'https://orcid.org/0009-0003-6784-8882',
  },
};

export const experience = [
  {
    org: 'AICU',
    url: 'https://aicu.life',
    role: 'Machine Learning Researcher, Gait Scanner lead',
    period: 'Nov 2024 – Present',
    points: [
      'Lead the AICU Gait Scanner: computer vision models for real-time gait analysis used by clinicians.',
      'Own the path from training to shipping: optimized edge inference with Core ML on iOS and CUDA/C++ accelerators, native Android and iOS apps.',
      'Connect the on-device stack with Python and Ruby on Rails services for regulatory-ready rollouts.',
    ],
  },
  {
    org: 'BetterUp',
    url: 'https://www.betterup.com',
    role: 'Software Developer, part-time contractor',
    period: 'Sep 2021 – May 2025',
    points: [
      'Built internal integrations with Microsoft Teams, Slack and other third-party platforms (Ruby on Rails, JavaScript).',
      'Helped build Microsites, the alternative payment platform that handled thousands of partner transactions.',
    ],
  },
  {
    org: 'Kaleyra (formerly mGage)',
    url: 'https://www.kaleyra.com',
    role: 'Software Engineer Specialist',
    period: 'Sep 2019 – Sep 2022',
    points: [
      'Designed a multimedia transcoding system and high-throughput messaging applications at mGage.',
      'After the Kaleyra acquisition, moved PHP monoliths to multithreaded Go services (Java, Rails, Go, PHP).',
    ],
  },
  {
    org: 'Pierpont Global',
    url: 'https://ppg.hect.dev',
    role: 'Co-founder, lead software developer',
    period: 'Nov 2018 – Nov 2019',
    points: [
      'Co-founded an online car auction platform and led a team of four building the full stack (Rails, JavaScript, Java).',
      'Rebuilt in 2026 as a live demo with ML pricing and photo-assisted listings.',
    ],
  },
];

export const research = [
  {
    title: 'Gated YOLO',
    kind: 'MSc thesis',
    text: 'A dynamic gating mechanism inside YOLOv6 with scene-specific pruning, to cut compute for real-time detection on edge devices without losing accuracy.',
    url: 'https://github.com/hectorandac/Gated-YOLO',
    linkLabel: 'Code',
  },
  {
    title: 'A scene-specific object detection system utilizing the advantages of fixed-location cameras',
    kind: 'JICCE 2023, co-author',
    text: 'Edge AI detection for fixed cameras on embedded hardware.',
    url: 'https://research.knu.ac.kr/en/publications/a-scene-specific-object-detection-system-utilizing-the-advantages/',
    linkLabel: 'Paper',
  },
  {
    title: 'ROAD-SEC dataset',
    kind: 'Dataset, 2023',
    text: '13,221 images and 166,192 labeled objects from fixed security cameras over highways and roads, in varied weather and light.',
    url: 'https://datasetninja.com/road-sec',
    linkLabel: 'Dataset',
  },
];

export const projects = [
  {
    name: 'Pierpont',
    text: 'Live car auctions with ML pricing (LightGBM, conformal intervals), CLIP photo checks in int8 ONNX and weekly retraining behind a promotion gate.',
    stack: ['Rails 8', 'Hotwire', 'LightGBM', 'ONNX', 'FastAPI', 'Helm'],
    repo: 'https://github.com/pierpontglobal/pierpont',
    demo: 'https://ppg.hect.dev',
  },
  {
    name: 'finance-dashboard',
    text: 'Self-hosted finance app with an MCP endpoint, so an AI agent can manage it through task-level tools behind a token and a NetworkPolicy.',
    stack: ['Fastify', 'Next.js', 'Flutter', 'MongoDB', 'MCP', 'Helm'],
    repo: 'https://github.com/hectorandac/finance-dashboard',
  },
  {
    name: 'CRAFT Line Extractor',
    text: 'Document line segmentation built on CRAFT word detection: deskewing, polygon grouping into lines, and a web API.',
    stack: ['PyTorch', 'OpenCV', 'Flask', 'Next.js'],
    repo: 'https://github.com/hectorandac/CRAFT-Line-Extractor',
    demo: 'https://el.ai.hect.dev',
  },
  {
    name: 'affine-ollama-proxy',
    text: 'Speaks the OpenAI Responses, Chat Completions and Anthropic Messages APIs and runs them on local Ollama models. Tested at 95% coverage, signed images with SBOMs.',
    stack: ['FastAPI', 'Ollama', 'Cosign'],
    repo: 'https://github.com/hectorandac/affine-ollama-proxy',
  },
  {
    name: 'Rock Paper Scissors AI',
    text: 'Hand gesture classifier trained from scratch, served as a playable game.',
    stack: ['TensorFlow', 'Python'],
    repo: 'https://github.com/hectorandac/Rock-Paper-Scissor-AI-Game',
  },
];

export const skills = [
  { group: 'ML & CV', items: ['PyTorch', 'TensorFlow', 'YOLO', 'Pose estimation', 'OpenCV', 'Core ML', 'CUDA/C++'] },
  { group: 'Platforms', items: ['iOS', 'Android', 'Edge inference', 'Ollama', 'MCP'] },
  { group: 'Backend', items: ['Python', 'Go', 'Ruby on Rails', 'TypeScript', 'Java'] },
  { group: 'Infra', items: ['Kubernetes (k3s)', 'Helm', 'Docker', 'VictoriaMetrics', 'Grafana', 'GitHub Actions'] },
];

export const education = [
  { school: 'Kyungpook National University', degree: 'MSc, Computer Science', place: 'Daegu, South Korea', url: 'https://www.knu.ac.kr' },
  { school: 'INTEC', degree: 'Undergraduate studies', place: 'Santo Domingo, Dominican Republic', url: 'https://www.intec.edu.do' },
];
