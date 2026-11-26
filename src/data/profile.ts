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
    logo: 'logos/aicu.png',
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
    logo: 'logos/betterup.png',
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
    logo: 'logos/kaleyra.jpeg',
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
    logo: 'logos/pierpont.jpeg',
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
    text: 'Learned channel gates that prune YOLOv6 for edge deployment: 12% fewer MACs at 1.3 mAP below the unpruned detector on VOC, with TensorRT FP16 and QAT INT8.',
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
    name: 'Laura',
    image: 'projects/laura.png',
    text: 'Private bilingual voice assistant on my k3s cluster: streaming ASR, speaker verification and a local 9B LLM that hands real work to my agent, together in about 6 GB of a laptop GPU (6.3 GB peak). About 1.1 s to first audio, a distilled 16M-parameter voice that runs on the CPU, Android phone, watch and overlay clients.',
    resumeText: 'Bilingual voice assistant: streaming ASR, speaker verification and a 9B LLM in ~6 GB of GPU, ~1.1 s to first audio, distilled 16M-param CPU voice.',
    stack: ['PyTorch', 'NeMo', 'llama.cpp', 'ONNX Runtime', 'Kotlin', 'OpenGL ES', 'Helm'],
    repo: 'https://github.com/hectorandac/laura-voice',
  },
  {
    name: 'Pierpont',
    image: 'projects/pierpont.png',
    text: 'Live car auctions with ML pricing (LightGBM, conformal intervals), CLIP photo checks in int8 ONNX and weekly retraining behind a promotion gate.',
    stack: ['Rails 8', 'Hotwire', 'LightGBM', 'ONNX', 'FastAPI', 'Helm'],
    repo: 'https://github.com/pierpontglobal/pierpont',
    demo: 'https://ppg.hect.dev',
  },
  {
    name: 'finance-dashboard',
    image: 'projects/finance.png',
    text: 'Self-hosted finance app with an MCP endpoint, so an AI agent can manage it through task-level tools behind a token and a NetworkPolicy.',
    stack: ['Fastify', 'Next.js', 'Flutter', 'MongoDB', 'MCP', 'Helm'],
    repo: 'https://github.com/hectorandac/finance-dashboard',
  },
  {
    name: 'CRAFT Line Extractor',
    image: 'projects/craft.png',
    text: 'Document line segmentation built on CRAFT word detection: deskewing, polygon grouping into lines, and a web API.',
    stack: ['PyTorch', 'OpenCV', 'Flask', 'Next.js'],
    repo: 'https://github.com/hectorandac/CRAFT-Line-Extractor',
    demo: 'https://el.ai.hect.dev',
  },
  {
    name: 'affine-ollama-proxy',
    image: 'projects/affine.png',
    text: 'Speaks the OpenAI Responses, Chat Completions and Anthropic Messages APIs and runs them on local Ollama models. Tested at 95% coverage, signed images with SBOMs.',
    stack: ['FastAPI', 'Ollama', 'Cosign'],
    repo: 'https://github.com/hectorandac/affine-ollama-proxy',
  },
  {
    name: 'Rock Paper Scissors AI',
    image: 'projects/rps.png',
    imageFit: 'contain',
    text: 'Hand gesture classifier trained from scratch, served as a playable game.',
    stack: ['TensorFlow', 'Python'],
    repo: 'https://github.com/hectorandac/Rock-Paper-Scissor-AI-Game',
  },
];

export const writing: { title: string; date: string; text: string; url: string; image: string; draft?: boolean }[] = [
  {
    title: "I'm not a designer, so I ran an AI design council",
    date: '2026-11-26',
    text: "AI critics scored six rounds of real renders of my voice assistant's avatar in one evening. The ship call was mine.",
    url: 'https://hect.dev/writing/ai-design-council-avatar',
    image: 'writing/ai-design-council.jpg',
  },
  {
    title: 'AI Gait Analysis: How a Phone Video Becomes Gait Measurements',
    date: '2026-10-25',
    text: 'Markerless vs marker-based capture, the five steps from video to gait measures, and what studies show about accuracy.',
    url: 'https://gait.aicu.life/learn/ai-gait-analysis-how-markerless-works',
    image: 'writing/ai-gait.jpg',
  },
  {
    title: 'Is Gait Analysis From a Phone Accurate? How Validation Works',
    date: '2026-10-23',
    text: 'Reference systems, ICC, Bland–Altman limits of agreement and meaningful change, applied to published camera and phone tools.',
    url: 'https://gait.aicu.life/learn/is-phone-gait-analysis-accurate-validation',
    image: 'writing/validation.jpg',
  },
  {
    title: 'Gait Analysis Software Compared: Motion Capture, Walkways, Sensors and Video',
    date: '2026-11-03',
    text: 'The five kinds of gait analysis system, from optical motion capture to markerless video and phone apps, and what each measures.',
    url: 'https://gait.aicu.life/learn/gait-analysis-software-compared',
    image: 'writing/gait-software.jpg',
  },
  {
    title: 'Gait Parameters and Normal Values',
    date: '2026-11-01',
    text: 'The gait cycle, stance and swing, double support, cadence, step and stride length and symmetry, with normal values.',
    url: 'https://gait.aicu.life/learn/gait-parameters-normal-values',
    image: 'writing/gait-params.jpg',
  },
  {
    title: 'OSNet ReID in Python: Variants, ONNX Export and CPU Latency',
    date: '2026-11-03',
    text: 'Matching YOLO11 person crops with torchreid OSNet, exporting to ONNX and comparing four variants on CPU.',
    url: 'https://blog.aicu.life/posts/osnet-reid-python-onnx-cpu-benchmark/',
    image: 'writing/osnet.jpg',
  },
  {
    title: 'Build an MCP Server in Python: YOLO11 as a Tool, Measured',
    date: '2026-11-04',
    text: 'YOLO11 detection exposed as an MCP tool over stdio, with protocol latency, cold start and token cost measured.',
    url: 'https://blog.aicu.life/posts/mcp-server-python-yolo-object-detection-benchmark/',
    image: 'writing/mcp-server.jpg',
  },
  {
    title: 'Build an MCP Gateway in Python: Per-Agent Tool Filtering',
    date: '2026-11-05',
    text: 'A 143-line gateway with per-role tool allow-lists and an audit log: 57–69% fewer tool tokens for 0.6 ms per call.',
    url: 'https://blog.aicu.life/posts/mcp-gateway-python-least-privilege-tool-filtering/',
    image: 'writing/mcp-gateway.jpg',
  },
  {
    title: 'Real-Time Object Detection in Flutter: libyuv + TFLite GPU',
    date: '2025-06-02',
    text: 'A person detector on every camera frame at 30 FPS: YUV to RGB in C++, a GPU to NNAPI to CPU fallback, and Metal on iOS.',
    url: 'https://blog.aicu.life/posts/real-time-video-processing-with-flutter-native-c-and-tensorflow-lite/',
    image: 'writing/flutter.jpg',
  },
  {
    title: 'CT Hounsfield Units by Tissue, Measured with pydicom',
    date: '2026-11-09',
    text: 'HU values of eight tissues measured on a public chest CT, plus three DICOM traps that silently corrupt them.',
    url: 'https://blog.aicu.life/posts/ct-hounsfield-units-pydicom-hands-on/',
    image: 'writing/ct-hu.jpg',
  },
  {
    title: 'What Diffusion Can Teach a Biomechanical Model',
    date: '2026-08-10',
    text: 'Using NVIDIA Kimodo motion diffusion to synthesize rare gait patterns, and why its free foot-contact labels matter more.',
    url: 'https://blog.aicu.life/posts/what-diffusion-can-teach-a-biomechanical-model/',
    image: 'writing/diffusion.png',
  },
];

export const writingMore = 'https://blog.aicu.life/author/hector/';

export const skills = [
  { group: 'ML & CV', items: ['PyTorch', 'TensorFlow', 'YOLO', 'Pose estimation', 'OpenCV', 'Core ML', 'CUDA/C++'] },
  { group: 'Platforms', items: ['iOS', 'Android', 'Edge inference', 'Ollama', 'MCP'] },
  { group: 'Backend', items: ['Python', 'Go', 'Ruby on Rails', 'TypeScript', 'Java'] },
  { group: 'Infra', items: ['Kubernetes (k3s)', 'Helm', 'Docker', 'VictoriaMetrics', 'Grafana', 'GitHub Actions'] },
];

export const education = [
  { school: 'Kyungpook National University', degree: 'MSc, Computer Science, Global Korea Scholarship (GKS)', place: 'Daegu, South Korea', years: '2024', url: 'https://www.knu.ac.kr' },
  { school: 'INTEC', degree: 'Software Engineering (Ingeniero de Software)', place: 'Santo Domingo, Dominican Republic', years: '2015 – 2019', url: 'https://www.intec.edu.do' },
];
