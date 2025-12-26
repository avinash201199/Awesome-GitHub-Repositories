export interface RoadmapResource {
  title: string;
  url: string;
  description: string;
}

export interface RoadmapRole {
  title: string;
  description: string;
  sections: {
    title: string;
    resources: RoadmapResource[];
  }[];
}

export interface RoadmapDomain {
  id: string;
  title: string;
  icon: string;
  description: string;
  roles: RoadmapRole[];
}

export const roadmaps: RoadmapDomain[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Master artificial intelligence, machine learning, and deep learning technologies",
    roles: [
      {
        title: "AI Engineer",
        description: "Build intelligent systems using AI and machine learning",
        sections: [
          {
            title: "Fundamentals",
            resources: [
              {
                title: "practical-tutorials/project-based-learning",
                url: "https://github.com/practical-tutorials/project-based-learning",
                description: "Curated project-based AI/ML tutorials with hands-on implementation"
              },
              {
                title: "microsoft/AI-For-Beginners",
                url: "https://github.com/microsoft/AI-For-Beginners",
                description: "12-week, 24-lesson AI curriculum by Microsoft"
              },
              {
                title: "afshinea/stanford-cs-229-machine-learning",
                url: "https://github.com/afshinea/stanford-cs-229-machine-learning",
                description: "Stanford CS229 Machine Learning cheatsheets"
              }
            ]
          },
          {
            title: "Deep Learning",
            resources: [
              {
                title: "fastai/fastai",
                url: "https://github.com/fastai/fastai",
                description: "Simplified deep learning library with practical courses"
              },
              {
                title: "d2l-ai/d2l-en",
                url: "https://github.com/d2l-ai/d2l-en",
                description: "Interactive deep learning book with code, math, and discussions"
              },
              {
                title: "tensorflow/tensorflow",
                url: "https://github.com/tensorflow/tensorflow",
                description: "End-to-end ML platform with tutorials and examples"
              }
            ]
          },
          {
            title: "AI Projects & Applications",
            resources: [
              {
                title: "eugeneyan/applied-ml",
                url: "https://github.com/eugeneyan/applied-ml",
                description: "Curated papers & tech blogs from companies applying ML"
              },
              {
                title: "trekhleb/homemade-machine-learning",
                url: "https://github.com/trekhleb/homemade-machine-learning",
                description: "Python examples of ML algorithms with interactive demos"
              }
            ]
          }
        ]
      },
      {
        title: "Machine Learning Engineer",
        description: "Design and deploy production-ready ML systems",
        sections: [
          {
            title: "ML Fundamentals",
            resources: [
              {
                title: "ujjwalkarn/Machine-Learning-Tutorials",
                url: "https://github.com/ujjwalkarn/Machine-Learning-Tutorials",
                description: "Comprehensive ML tutorials and resources"
              },
              {
                title: "josephmisiti/awesome-machine-learning",
                url: "https://github.com/josephmisiti/awesome-machine-learning",
                description: "Curated ML frameworks, libraries, and software"
              }
            ]
          },
          {
            title: "Production ML",
            resources: [
              {
                title: "chiphuyen/machine-learning-systems-design",
                url: "https://github.com/chiphuyen/machine-learning-systems-design",
                description: "ML systems design patterns and best practices"
              },
              {
                title: "visenger/awesome-mlops",
                url: "https://github.com/visenger/awesome-mlops",
                description: "MLOps tools, frameworks, and best practices"
              }
            ]
          },
          {
            title: "Interview Prep",
            resources: [
              {
                title: "khangich/machine-learning-interview",
                url: "https://github.com/khangich/machine-learning-interview",
                description: "ML interview preparation guide with 500+ questions"
              }
            ]
          }
        ]
      },
      {
        title: "Generative AI Engineer",
        description: "Create AI systems that generate content, text, images, and more",
        sections: [
          {
            title: "Foundation Models",
            resources: [
              {
                title: "openai/openai-cookbook",
                url: "https://github.com/openai/openai-cookbook",
                description: "Official OpenAI examples and guides for GPT models"
              },
              {
                title: "huggingface/transformers",
                url: "https://github.com/huggingface/transformers",
                description: "State-of-the-art ML models for NLP, vision, and audio"
              }
            ]
          },
          {
            title: "LLM Development",
            resources: [
              {
                title: "microsoft/generative-ai-for-beginners",
                url: "https://github.com/microsoft/generative-ai-for-beginners",
                description: "18-lesson course on Generative AI by Microsoft"
              },
              {
                title: "langchain-ai/langchain",
                url: "https://github.com/langchain-ai/langchain",
                description: "Building applications with LLMs through composability"
              }
            ]
          },
          {
            title: "Image & Video Generation",
            resources: [
              {
                title: "CompVis/stable-diffusion",
                url: "https://github.com/CompVis/stable-diffusion",
                description: "Latent text-to-image diffusion model"
              }
            ]
          },
          {
            title: "Prompt Engineering",
            resources: [
              {
                title: "dair-ai/Prompt-Engineering-Guide",
                url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
                description: "Comprehensive guide on prompt engineering"
              }
            ]
          }
        ]
      },
      {
        title: "MLOps Engineer",
        description: "Manage ML lifecycle, deployment, and operations",
        sections: [
          {
            title: "MLOps Fundamentals",
            resources: [
              {
                title: "visenger/awesome-mlops",
                url: "https://github.com/visenger/awesome-mlops",
                description: "Curated MLOps tools and references"
              },
              {
                title: "GokuMohandas/Made-With-ML",
                url: "https://github.com/GokuMohandas/Made-With-ML",
                description: "Complete MLOps course with production best practices"
              },
              {
                title: "DataTalksClub/mlops-zoomcamp",
                url: "https://github.com/DataTalksClub/mlops-zoomcamp",
                description: "Free MLOps course by DataTalks.Club"
              }
            ]
          },
          {
            title: "ML Platforms & Tools",
            resources: [
              {
                title: "mlflow/mlflow",
                url: "https://github.com/mlflow/mlflow",
                description: "Open source platform for ML lifecycle"
              },
              {
                title: "kubeflow/kubeflow",
                url: "https://github.com/kubeflow/kubeflow",
                description: "ML toolkit for Kubernetes"
              }
            ]
          },
          {
            title: "Model Deployment",
            resources: [
              {
                title: "bentoml/BentoML",
                url: "https://github.com/bentoml/BentoML",
                description: "Unified model serving framework"
              }
            ]
          }
        ]
      },
      {
        title: "NLP Engineer",
        description: "Process and understand human language with AI",
        sections: [
          {
            title: "NLP Fundamentals",
            resources: [
              {
                title: "keon/awesome-nlp",
                url: "https://github.com/keon/awesome-nlp",
                description: "Curated NLP resources and libraries"
              },
              {
                title: "microsoft/nlp-recipes",
                url: "https://github.com/microsoft/nlp-recipes",
                description: "Best practices and examples for NLP by Microsoft"
              }
            ]
          },
          {
            title: "Transformers & LLMs",
            resources: [
              {
                title: "huggingface/transformers",
                url: "https://github.com/huggingface/transformers",
                description: "State-of-the-art NLP models"
              }
            ]
          },
          {
            title: "NLP Applications",
            resources: [
              {
                title: "explosion/spaCy",
                url: "https://github.com/explosion/spaCy",
                description: "Industrial-strength NLP library"
              }
            ]
          }
        ]
      },
      {
        title: "Computer Vision Engineer",
        description: "Enable machines to see and understand visual data",
        sections: [
          {
            title: "CV Fundamentals",
            resources: [
              {
                title: "microsoft/computervision-recipes",
                url: "https://github.com/microsoft/computervision-recipes",
                description: "Best practices and examples for Computer Vision"
              },
              {
                title: "spmallick/learnopencv",
                url: "https://github.com/spmallick/learnopencv",
                description: "OpenCV tutorials and projects"
              }
            ]
          },
          {
            title: "Deep Learning for Vision",
            resources: [
              {
                title: "pytorch/vision",
                url: "https://github.com/pytorch/vision",
                description: "PyTorch image and video datasets, models, and transforms"
              },
              {
                title: "ultralytics/ultralytics",
                url: "https://github.com/ultralytics/ultralytics",
                description: "YOLOv8 & YOLOv5 for object detection"
              }
            ]
          },
          {
            title: "Advanced CV",
            resources: [
              {
                title: "facebookresearch/detectron2",
                url: "https://github.com/facebookresearch/detectron2",
                description: "Object detection and segmentation platform"
              },
              {
                title: "facebookresearch/segment-anything",
                url: "https://github.com/facebookresearch/segment-anything",
                description: "Segment Anything Model (SAM)"
              }
            ]
          }
        ]
      },
      {
        title: "AI Research Scientist",
        description: "Advance the state-of-the-art in AI research",
        sections: [
          {
            title: "Research Fundamentals",
            resources: [
              {
                title: "paperswithcode/paperswithcode",
                url: "https://github.com/paperswithcode/paperswithcode",
                description: "Papers with code for reproducible research"
              },
              {
                title: "labmlai/annotated_deep_learning_paper_implementations",
                url: "https://github.com/labmlai/annotated_deep_learning_paper_implementations",
                description: "Annotated implementations of research papers"
              }
            ]
          },
          {
            title: "Research Tools",
            resources: [
              {
                title: "pytorch/pytorch",
                url: "https://github.com/pytorch/pytorch",
                description: "Tensors and Dynamic neural networks with GPU acceleration"
              },
              {
                title: "google/jax",
                url: "https://github.com/google/jax",
                description: "Composable transformations of Python+NumPy programs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "☁️",
    description: "Build and manage scalable cloud infrastructure and DevOps pipelines",
    roles: [
      {
        title: "Cloud Engineer",
        description: "Design, deploy, and manage cloud infrastructure",
        sections: [
          {
            title: "Linux & Cloud Fundamentals",
            resources: [
              {
                title: "practical-tutorials/project-based-learning",
                url: "https://github.com/practical-tutorials/project-based-learning",
                description: "Curated project-based tutorials (includes Linux basics + hands-on projects)"
              },
              {
                title: "learnbyexample/cli-computing",
                url: "https://github.com/learnbyexample/cli-computing",
                description: "Beginner to intermediate Linux CLI guide with examples"
              }
            ]
          },
          {
            title: "AWS",
            resources: [
              {
                title: "open-guides/og-aws",
                url: "https://github.com/open-guides/og-aws",
                description: "Practical, real-world AWS guide with best practices"
              },
              {
                title: "acantril/learn-cantrill-io-labs",
                url: "https://github.com/acantril/learn-cantrill-io-labs",
                description: "Hands-on AWS labs and demos (labs are free to use)"
              }
            ]
          },
          {
            title: "Azure",
            resources: [
              {
                title: "MicrosoftLearning",
                url: "https://github.com/MicrosoftLearning",
                description: "Official Microsoft Learning organization with Azure resources"
              }
            ]
          },
          {
            title: "GCP",
            resources: [
              {
                title: "GoogleCloudPlatform/training-data-analyst",
                url: "https://github.com/GoogleCloudPlatform/training-data-analyst",
                description: "Official GCP labs and self-paced training materials"
              }
            ]
          },
          {
            title: "DevOps & Automation",
            resources: [
              {
                title: "kelseyhightower/kubernetes-the-hard-way",
                url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
                description: "Bootstrap Kubernetes manually to understand internals deeply"
              },
              {
                title: "bregman-arie/devops-exercises",
                url: "https://github.com/bregman-arie/devops-exercises",
                description: "2600+ DevOps exercises, interview questions & solutions"
              }
            ]
          },
          {
            title: "Infrastructure as Code",
            resources: [
              {
                title: "brikis98/terraform-up-and-running-code",
                url: "https://github.com/brikis98/terraform-up-and-running-code",
                description: "Production-ready Terraform code examples"
              }
            ]
          }
        ]
      },
      {
        title: "Cloud Architect",
        description: "Design scalable, secure cloud architectures",
        sections: [
          {
            title: "Architecture Fundamentals",
            resources: [
              {
                title: "donnemartin/system-design-primer",
                url: "https://github.com/donnemartin/system-design-primer",
                description: "Learn how to design large-scale systems"
              },
              {
                title: "ByteByteGoHq/system-design-101",
                url: "https://github.com/ByteByteGoHq/system-design-101",
                description: "System design fundamentals explained visually"
              }
            ]
          },
          {
            title: "Cloud Architecture Patterns",
            resources: [
              {
                title: "aws-samples/aws-cdk-examples",
                url: "https://github.com/aws-samples/aws-cdk-examples",
                description: "AWS CDK examples with architectural patterns and best practices"
              }
            ]
          }
        ]
      },
      {
        title: "DevOps Engineer",
        description: "Automate and optimize software delivery",
        sections: [
          {
            title: "DevOps Fundamentals",
            resources: [
              {
                title: "bregman-arie/devops-exercises",
                url: "https://github.com/bregman-arie/devops-exercises",
                description: "2600+ DevOps exercises, questions & solutions"
              },
              {
                title: "MichaelCade/90DaysOfDevOps",
                url: "https://github.com/MichaelCade/90DaysOfDevOps",
                description: "90 days of DevOps learning journey"
              }
            ]
          },
          {
            title: "CI/CD",
            resources: [
              {
                title: "argoproj/argo-cd",
                url: "https://github.com/argoproj/argo-cd",
                description: "Declarative GitOps continuous delivery for Kubernetes"
              }
            ]
          },
          {
            title: "Containerization",
            resources: [
              {
                title: "docker/awesome-compose",
                url: "https://github.com/docker/awesome-compose",
                description: "Awesome Docker Compose samples"
              },
              {
                title: "veggiemonk/awesome-docker",
                url: "https://github.com/veggiemonk/awesome-docker",
                description: "Curated Docker resources and projects"
              }
            ]
          },
          {
            title: "Monitoring & Logging",
            resources: [
              {
                title: "prometheus/prometheus",
                url: "https://github.com/prometheus/prometheus",
                description: "Monitoring system and time series database"
              },
              {
                title: "grafana/grafana",
                url: "https://github.com/grafana/grafana",
                description: "Open observability platform"
              }
            ]
          }
        ]
      },
      {
        title: "Site Reliability Engineer (SRE)",
        description: "Ensure system reliability and performance at scale",
        sections: [
          {
            title: "SRE Fundamentals",
            resources: [
              {
                title: "dastergon/awesome-sre",
                url: "https://github.com/dastergon/awesome-sre",
                description: "Curated SRE resources and practices"
              },
              {
                title: "mxssl/sre-interview-prep-guide",
                url: "https://github.com/mxssl/sre-interview-prep-guide",
                description: "SRE interview preparation guide"
              }
            ]
          },
          {
            title: "Reliability & Chaos Engineering",
            resources: [
              {
                title: "Netflix/chaosmonkey",
                url: "https://github.com/Netflix/chaosmonkey",
                description: "Chaos engineering tool by Netflix"
              },
              {
                title: "chaos-mesh/chaos-mesh",
                url: "https://github.com/chaos-mesh/chaos-mesh",
                description: "Chaos engineering platform for Kubernetes"
              }
            ]
          }
        ]
      },
      {
        title: "Cloud AI Engineer",
        description: "Deploy and scale AI/ML workloads in the cloud",
        sections: [
          {
            title: "Cloud ML Services",
            resources: [
              {
                title: "Azure/MachineLearningNotebooks",
                url: "https://github.com/Azure/MachineLearningNotebooks",
                description: "Azure ML SDK examples and tutorials"
              },
              {
                title: "GoogleCloudPlatform/vertex-ai-samples",
                url: "https://github.com/GoogleCloudPlatform/vertex-ai-samples",
                description: "GCP Vertex AI samples and notebooks"
              }
            ]
          },
          {
            title: "ML Infrastructure",
            resources: [
              {
                title: "kubeflow/kubeflow",
                url: "https://github.com/kubeflow/kubeflow",
                description: "ML toolkit for Kubernetes"
              },
              {
                title: "ray-project/ray",
                url: "https://github.com/ray-project/ray",
                description: "Unified framework for scaling AI applications"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "🔒",
    description: "Protect systems, networks, and data from cyber threats",
    roles: [
      {
        title: "Cybersecurity Analyst",
        description: "Monitor and defend against security threats",
        sections: [
          {
            title: "Security Fundamentals",
            resources: [
              {
                title: "sbilly/awesome-security",
                url: "https://github.com/sbilly/awesome-security",
                description: "Comprehensive security resources collection"
              },
              {
                title: "qazbnm456/awesome-web-security",
                url: "https://github.com/qazbnm456/awesome-web-security",
                description: "Web security materials and resources"
              }
            ]
          },
          {
            title: "Security Operations",
            resources: [
              {
                title: "MITRE-ATT&CK/attack-navigator",
                url: "https://github.com/mitre-attack/attack-navigator",
                description: "Web app for navigating ATT&CK framework"
              },
              {
                title: "Neo23x0/sigma",
                url: "https://github.com/Neo23x0/sigma",
                description: "Generic signature format for SIEM systems"
              }
            ]
          },
          {
            title: "Threat Intelligence",
            resources: [
              {
                title: "hslatman/awesome-threat-intelligence",
                url: "https://github.com/hslatman/awesome-threat-intelligence",
                description: "Threat intelligence resources"
              }
            ]
          }
        ]
      },
      {
        title: "Ethical Hacker / Penetration Tester",
        description: "Find and exploit vulnerabilities ethically",
        sections: [
          {
            title: "Penetration Testing",
            resources: [
              {
                title: "Hack-with-Github/Awesome-Hacking",
                url: "https://github.com/Hack-with-Github/Awesome-Hacking",
                description: "Comprehensive hacking resources"
              },
              {
                title: "enaqx/awesome-pentest",
                url: "https://github.com/enaqx/awesome-pentest",
                description: "Penetration testing resources and tools"
              },
              {
                title: "danielmiessler/SecLists",
                url: "https://github.com/danielmiessler/SecLists",
                description: "Security tester's companion with lists for fuzzing"
              }
            ]
          },
          {
            title: "Web Application Security",
            resources: [
              {
                title: "OWASP/CheatSheetSeries",
                url: "https://github.com/OWASP/CheatSheetSeries",
                description: "OWASP security cheat sheets"
              },
              {
                title: "swisskyrepo/PayloadsAllTheThings",
                url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
                description: "Web app pentest payloads and bypasses"
              }
            ]
          },
          {
            title: "Exploitation Frameworks",
            resources: [
              {
                title: "rapid7/metasploit-framework",
                url: "https://github.com/rapid7/metasploit-framework",
                description: "Penetration testing framework"
              },
              {
                title: "projectdiscovery/nuclei",
                url: "https://github.com/projectdiscovery/nuclei",
                description: "Fast vulnerability scanner with templates"
              }
            ]
          }
        ]
      },
      {
        title: "Security Architect",
        description: "Design secure systems and architectures",
        sections: [
          {
            title: "Security Architecture",
            resources: [
              {
                title: "OWASP/ASVS",
                url: "https://github.com/OWASP/ASVS",
                description: "Application Security Verification Standard"
              },
              {
                title: "OWASP/Top10",
                url: "https://github.com/OWASP/Top10",
                description: "OWASP Top 10 security risks"
              }
            ]
          },
          {
            title: "Zero Trust & Identity",
            resources: [
              {
                title: "hashicorp/vault",
                url: "https://github.com/hashicorp/vault",
                description: "Secrets management and data protection"
              },
              {
                title: "keycloak/keycloak",
                url: "https://github.com/keycloak/keycloak",
                description: "Open source identity and access management"
              }
            ]
          }
        ]
      },
      {
        title: "Cloud Security Engineer",
        description: "Secure cloud infrastructure and applications",
        sections: [
          {
            title: "Cloud Security Fundamentals",
            resources: [
              {
                title: "toniblyx/prowler",
                url: "https://github.com/toniblyx/prowler",
                description: "AWS security best practices assessment tool"
              },
              {
                title: "bridgecrewio/checkov",
                url: "https://github.com/bridgecrewio/checkov",
                description: "Infrastructure as Code security scanner"
              }
            ]
          },
          {
            title: "Container Security",
            resources: [
              {
                title: "aquasecurity/trivy",
                url: "https://github.com/aquasecurity/trivy",
                description: "Comprehensive security scanner for containers"
              },
              {
                title: "falcosecurity/falco",
                url: "https://github.com/falcosecurity/falco",
                description: "Cloud-native runtime security"
              }
            ]
          },
          {
            title: "Kubernetes Security",
            resources: [
              {
                title: "aquasecurity/kube-bench",
                url: "https://github.com/aquasecurity/kube-bench",
                description: "Kubernetes security benchmark"
              },
              {
                title: "armosec/kubescape",
                url: "https://github.com/armosec/kubescape",
                description: "K8s security risk analysis and hardening"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "software-dev",
    title: "Software Development",
    icon: "💻",
    description: "Build modern web and mobile applications",
    roles: [
      {
        title: "Frontend Developer",
        description: "Create beautiful, responsive user interfaces",
        sections: [
          {
            title: "Frontend Fundamentals",
            resources: [
              {
                title: "freeCodeCamp/freeCodeCamp",
                url: "https://github.com/freeCodeCamp/freeCodeCamp",
                description: "Complete frontend curriculum with certifications"
              },
              {
                title: "microsoft/Web-Dev-For-Beginners",
                url: "https://github.com/microsoft/Web-Dev-For-Beginners",
                description: "24-lesson web development course by Microsoft"
              }
            ]
          },
          {
            title: "JavaScript & TypeScript",
            resources: [
              {
                title: "javascript-tutorial/en.javascript.info",
                url: "https://github.com/javascript-tutorial/en.javascript.info",
                description: "Modern JavaScript tutorial"
              },
              {
                title: "leonardomso/33-js-concepts",
                url: "https://github.com/leonardomso/33-js-concepts",
                description: "33 JavaScript concepts every developer should know"
              }
            ]
          },
          {
            title: "React Ecosystem",
            resources: [
              {
                title: "facebook/react",
                url: "https://github.com/facebook/react",
                description: "Official React library with documentation"
              },
              {
                title: "alan2207/bulletproof-react",
                url: "https://github.com/alan2207/bulletproof-react",
                description: "Production-ready React architecture"
              }
            ]
          },
          {
            title: "Modern Frameworks",
            resources: [
              {
                title: "vercel/next.js",
                url: "https://github.com/vercel/next.js",
                description: "Next.js React framework"
              },
              {
                title: "vuejs/vue",
                url: "https://github.com/vuejs/vue",
                description: "Progressive JavaScript framework"
              }
            ]
          }
        ]
      },
      {
        title: "Backend Developer",
        description: "Build robust server-side applications and APIs",
        sections: [
          {
            title: "Backend Fundamentals",
            resources: [
              {
                title: "donnemartin/system-design-primer",
                url: "https://github.com/donnemartin/system-design-primer",
                description: "Backend system design guide"
              },
              {
                title: "mtdvio/every-programmer-should-know",
                url: "https://github.com/mtdvio/every-programmer-should-know",
                description: "Technical knowledge collection"
              }
            ]
          },
          {
            title: "Node.js & Express",
            resources: [
              {
                title: "goldbergyoni/nodebestpractices",
                url: "https://github.com/goldbergyoni/nodebestpractices",
                description: "Node.js best practices with 80+ guidelines"
              },
              {
                title: "nestjs/nest",
                url: "https://github.com/nestjs/nest",
                description: "Progressive Node.js framework"
              }
            ]
          },
          {
            title: "Python Backend",
            resources: [
              {
                title: "vinta/awesome-python",
                url: "https://github.com/vinta/awesome-python",
                description: "Curated Python frameworks and libraries"
              },
              {
                title: "tiangolo/fastapi",
                url: "https://github.com/tiangolo/fastapi",
                description: "Modern, fast Python API framework"
              }
            ]
          }
        ]
      },
      {
        title: "Full-Stack Developer",
        description: "Master both frontend and backend development",
        sections: [
          {
            title: "Full-Stack Foundations",
            resources: [
              {
                title: "kamranahmedse/developer-roadmap",
                url: "https://github.com/kamranahmedse/developer-roadmap",
                description: "Complete full-stack roadmap"
              },
              {
                title: "ossu/computer-science",
                url: "https://github.com/ossu/computer-science",
                description: "Complete CS education"
              }
            ]
          },
          {
            title: "Full-Stack Frameworks",
            resources: [
              {
                title: "vercel/next.js",
                url: "https://github.com/vercel/next.js",
                description: "Full-stack React framework"
              },
              {
                title: "remix-run/remix",
                url: "https://github.com/remix-run/remix",
                description: "Full-stack web framework"
              }
            ]
          }
        ]
      },
      {
        title: "Mobile App Developer",
        description: "Build native and cross-platform mobile apps",
        sections: [
          {
            title: "React Native",
            resources: [
              {
                title: "facebook/react-native",
                url: "https://github.com/facebook/react-native",
                description: "Build native apps with React"
              },
              {
                title: "expo/expo",
                url: "https://github.com/expo/expo",
                description: "Framework for universal React applications"
              }
            ]
          },
          {
            title: "Flutter",
            resources: [
              {
                title: "flutter/flutter",
                url: "https://github.com/flutter/flutter",
                description: "Google's UI toolkit for beautiful apps"
              },
              {
                title: "Solido/awesome-flutter",
                url: "https://github.com/Solido/awesome-flutter",
                description: "Awesome Flutter resources"
              }
            ]
          },
          {
            title: "Native iOS",
            resources: [
              {
                title: "vsouza/awesome-ios",
                url: "https://github.com/vsouza/awesome-ios",
                description: "Curated iOS resources"
              }
            ]
          },
          {
            title: "Native Android",
            resources: [
              {
                title: "JStumpp/awesome-android",
                url: "https://github.com/JStumpp/awesome-android",
                description: "Curated Android resources"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "data",
    title: "Data Roles",
    icon: "📊",
    description: "Extract insights and value from data",
    roles: [
      {
        title: "Data Scientist",
        description: "Use statistical methods and ML to analyze data",
        sections: [
          {
            title: "Data Science Fundamentals",
            resources: [
              {
                title: "microsoft/Data-Science-For-Beginners",
                url: "https://github.com/microsoft/Data-Science-For-Beginners",
                description: "10-week, 20-lesson data science curriculum"
              },
              {
                title: "ossu/data-science",
                url: "https://github.com/ossu/data-science",
                description: "Complete data science education"
              }
            ]
          },
          {
            title: "Python for Data Science",
            resources: [
              {
                title: "jakevdp/PythonDataScienceHandbook",
                url: "https://github.com/jakevdp/PythonDataScienceHandbook",
                description: "Python Data Science Handbook"
              },
              {
                title: "donnemartin/data-science-ipython-notebooks",
                url: "https://github.com/donnemartin/data-science-ipython-notebooks",
                description: "Data science Python notebooks"
              }
            ]
          },
          {
            title: "Machine Learning for DS",
            resources: [
              {
                title: "scikit-learn/scikit-learn",
                url: "https://github.com/scikit-learn/scikit-learn",
                description: "Machine learning in Python"
              },
              {
                title: "ageron/handson-ml3",
                url: "https://github.com/ageron/handson-ml3",
                description: "Hands-on ML with Scikit-Learn, Keras & TensorFlow"
              }
            ]
          }
        ]
      },
      {
        title: "Data Analyst",
        description: "Transform data into actionable insights",
        sections: [
          {
            title: "Analytics Fundamentals",
            resources: [
              {
                title: "microsoft/Data-Science-For-Beginners",
                url: "https://github.com/microsoft/Data-Science-For-Beginners",
                description: "Data analysis basics"
              }
            ]
          },
          {
            title: "Data Visualization",
            resources: [
              {
                title: "plotly/plotly.py",
                url: "https://github.com/plotly/plotly.py",
                description: "Interactive graphing library"
              },
              {
                title: "apache/superset",
                url: "https://github.com/apache/superset",
                description: "Modern data exploration and visualization"
              }
            ]
          },
          {
            title: "Business Analytics",
            resources: [
              {
                title: "getredash/redash",
                url: "https://github.com/getredash/redash",
                description: "Data visualization and dashboards"
              }
            ]
          }
        ]
      },
      {
        title: "Data Engineer",
        description: "Build and maintain data pipelines and infrastructure",
        sections: [
          {
            title: "Data Engineering Fundamentals",
            resources: [
              {
                title: "DataTalksClub/data-engineering-zoomcamp",
                url: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
                description: "Free data engineering course"
              },
              {
                title: "datastacktv/data-engineer-roadmap",
                url: "https://github.com/datastacktv/data-engineer-roadmap",
                description: "Complete data engineering roadmap"
              }
            ]
          },
          {
            title: "ETL & Data Pipelines",
            resources: [
              {
                title: "apache/airflow",
                url: "https://github.com/apache/airflow",
                description: "Platform to programmatically author, schedule workflows"
              },
              {
                title: "dagster-io/dagster",
                url: "https://github.com/dagster-io/dagster",
                description: "Data orchestrator for ML, analytics, and ETL"
              }
            ]
          },
          {
            title: "Data Processing",
            resources: [
              {
                title: "apache/spark",
                url: "https://github.com/apache/spark",
                description: "Unified analytics engine for big data"
              },
              {
                title: "dbt-labs/dbt-core",
                url: "https://github.com/dbt-labs/dbt-core",
                description: "Data transformation tool"
              }
            ]
          }
        ]
      },
      {
        title: "Big Data Engineer",
        description: "Process and analyze massive datasets",
        sections: [
          {
            title: "Big Data Fundamentals",
            resources: [
              {
                title: "onurakpolat/awesome-bigdata",
                url: "https://github.com/onurakpolat/awesome-bigdata",
                description: "Curated big data frameworks and resources"
              }
            ]
          },
          {
            title: "Hadoop Ecosystem",
            resources: [
              {
                title: "apache/hadoop",
                url: "https://github.com/apache/hadoop",
                description: "Distributed storage and processing framework"
              },
              {
                title: "apache/hive",
                url: "https://github.com/apache/hive",
                description: "Data warehouse software for Hadoop"
              }
            ]
          },
          {
            title: "Stream Processing",
            resources: [
              {
                title: "apache/kafka",
                url: "https://github.com/apache/kafka",
                description: "Distributed event streaming platform"
              },
              {
                title: "apache/flink",
                url: "https://github.com/apache/flink",
                description: "Stateful computations over data streams"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "other",
    title: "Other Domains",
    icon: "🌐",
    description: "Specialized tech roles across various domains",
    roles: [
      {
        title: "Blockchain Developer",
        description: "Build decentralized applications and smart contracts",
        sections: [
          {
            title: "Blockchain Fundamentals",
            resources: [
              {
                title: "ethereumbook/ethereumbook",
                url: "https://github.com/ethereumbook/ethereumbook",
                description: "Mastering Ethereum by Andreas M. Antonopoulos"
              },
              {
                title: "bitcoinbook/bitcoinbook",
                url: "https://github.com/bitcoinbook/bitcoinbook",
                description: "Mastering Bitcoin book"
              }
            ]
          },
          {
            title: "Smart Contracts",
            resources: [
              {
                title: "smartcontractkit/full-blockchain-solidity-course-js",
                url: "https://github.com/smartcontractkit/full-blockchain-solidity-course-js",
                description: "Complete Solidity course"
              },
              {
                title: "OpenZeppelin/openzeppelin-contracts",
                url: "https://github.com/OpenZeppelin/openzeppelin-contracts",
                description: "Secure smart contract library"
              }
            ]
          },
          {
            title: "Web3 Development",
            resources: [
              {
                title: "ethers-io/ethers.js",
                url: "https://github.com/ethers-io/ethers.js",
                description: "Complete Ethereum library"
              }
            ]
          }
        ]
      },
      {
        title: "IoT Engineer",
        description: "Connect and program Internet of Things devices",
        sections: [
          {
            title: "IoT Fundamentals",
            resources: [
              {
                title: "phodal/awesome-iot",
                url: "https://github.com/phodal/awesome-iot",
                description: "Comprehensive IoT resources"
              },
              {
                title: "HQarroum/awesome-iot",
                url: "https://github.com/HQarroum/awesome-iot",
                description: "IoT frameworks and platforms"
              }
            ]
          },
          {
            title: "Embedded Systems",
            resources: [
              {
                title: "rust-embedded/awesome-embedded-rust",
                url: "https://github.com/rust-embedded/awesome-embedded-rust",
                description: "Embedded Rust resources"
              },
              {
                title: "micropython/micropython",
                url: "https://github.com/micropython/micropython",
                description: "Python for microcontrollers"
              }
            ]
          },
          {
            title: "IoT Platforms",
            resources: [
              {
                title: "arduino/Arduino",
                url: "https://github.com/arduino/Arduino",
                description: "Arduino IDE and libraries"
              },
              {
                title: "node-red/node-red",
                url: "https://github.com/node-red/node-red",
                description: "Flow-based programming for IoT"
              }
            ]
          }
        ]
      },
      {
        title: "UX/UI Designer",
        description: "Design user-centered digital experiences",
        sections: [
          {
            title: "Design Fundamentals",
            resources: [
              {
                title: "bradtraversy/design-resources-for-developers",
                url: "https://github.com/bradtraversy/design-resources-for-developers",
                description: "Curated design resources"
              },
              {
                title: "goabstract/Awesome-Design-Tools",
                url: "https://github.com/goabstract/Awesome-Design-Tools",
                description: "Best design tools and plugins"
              }
            ]
          },
          {
            title: "Design Systems",
            resources: [
              {
                title: "alexpate/awesome-design-systems",
                url: "https://github.com/alexpate/awesome-design-systems",
                description: "Design systems, style guides, and pattern libraries"
              },
              {
                title: "carbon-design-system/carbon",
                url: "https://github.com/carbon-design-system/carbon",
                description: "IBM's design system"
              }
            ]
          },
          {
            title: "Accessibility",
            resources: [
              {
                title: "a11yproject/a11yproject.com",
                url: "https://github.com/a11yproject/a11yproject.com",
                description: "Web accessibility resources"
              }
            ]
          }
        ]
      },
      {
        title: "QA Engineer",
        description: "Ensure software quality through testing",
        sections: [
          {
            title: "Testing Fundamentals",
            resources: [
              {
                title: "TheJambo/awesome-testing",
                url: "https://github.com/TheJambo/awesome-testing",
                description: "Curated testing resources"
              },
              {
                title: "atinfo/awesome-test-automation",
                url: "https://github.com/atinfo/awesome-test-automation",
                description: "Test automation frameworks"
              }
            ]
          },
          {
            title: "Automated Testing",
            resources: [
              {
                title: "microsoft/playwright",
                url: "https://github.com/microsoft/playwright",
                description: "Browser automation framework"
              },
              {
                title: "cypress-io/cypress",
                url: "https://github.com/cypress-io/cypress",
                description: "Fast, easy testing for modern web"
              }
            ]
          },
          {
            title: "Performance Testing",
            resources: [
              {
                title: "locustio/locust",
                url: "https://github.com/locustio/locust",
                description: "Scalable load testing tool"
              },
              {
                title: "k6io/k6",
                url: "https://github.com/grafana/k6",
                description: "Modern load testing tool"
              }
            ]
          }
        ]
      },
      {
        title: "Technical Project Manager",
        description: "Lead technical projects and teams",
        sections: [
          {
            title: "Project Management",
            resources: [
              {
                title: "elsewhencode/project-guidelines",
                url: "https://github.com/elsewhencode/project-guidelines",
                description: "Software project guidelines"
              },
              {
                title: "kamranahmedse/developer-roadmap",
                url: "https://github.com/kamranahmedse/developer-roadmap",
                description: "Technical roadmaps for planning"
              }
            ]
          },
          {
            title: "Documentation",
            resources: [
              {
                title: "matiassingers/awesome-readme",
                url: "https://github.com/matiassingers/awesome-readme",
                description: "Awesome README examples"
              },
              {
                title: "facebook/docusaurus",
                url: "https://github.com/facebook/docusaurus",
                description: "Documentation website builder"
              }
            ]
          },
          {
            title: "Collaboration Tools",
            resources: [
              {
                title: "nocodb/nocodb",
                url: "https://github.com/nocodb/nocodb",
                description: "Open source Airtable alternative"
              }
            ]
          }
        ]
      },
      {
        title: "Network Engineer",
        description: "Design and manage network infrastructure",
        sections: [
          {
            title: "Networking Fundamentals",
            resources: [
              {
                title: "trimstray/the-book-of-secret-knowledge",
                url: "https://github.com/trimstray/the-book-of-secret-knowledge",
                description: "Collection of networking tools and resources"
              },
              {
                title: "nyquist/awesome-networking",
                url: "https://github.com/nyquist/awesome-networking",
                description: "Networking resources"
              }
            ]
          },
          {
            title: "Network Protocols",
            resources: [
              {
                title: "nmap/nmap",
                url: "https://github.com/nmap/nmap",
                description: "Network discovery and security auditing"
              },
              {
                title: "wireshark/wireshark",
                url: "https://github.com/wireshark/wireshark",
                description: "Network protocol analyzer"
              }
            ]
          },
          {
            title: "Network Automation",
            resources: [
              {
                title: "napalm-automation/napalm",
                url: "https://github.com/napalm-automation/napalm",
                description: "Network automation library"
              }
            ]
          }
        ]
      },
      {
        title: "Systems Administrator",
        description: "Maintain and manage IT infrastructure",
        sections: [
          {
            title: "Linux System Administration",
            resources: [
              {
                title: "trimstray/the-book-of-secret-knowledge",
                url: "https://github.com/trimstray/the-book-of-secret-knowledge",
                description: "Sysadmin tools and resources"
              },
              {
                title: "awesome-foss/awesome-sysadmin",
                url: "https://github.com/awesome-foss/awesome-sysadmin",
                description: "Curated sysadmin resources"
              }
            ]
          },
          {
            title: "Configuration Management",
            resources: [
              {
                title: "ansible/ansible",
                url: "https://github.com/ansible/ansible",
                description: "IT automation platform"
              },
              {
                title: "saltstack/salt",
                url: "https://github.com/saltstack/salt",
                description: "Infrastructure automation and configuration"
              }
            ]
          },
          {
            title: "Monitoring & Logging",
            resources: [
              {
                title: "prometheus/prometheus",
                url: "https://github.com/prometheus/prometheus",
                description: "Systems monitoring and alerting"
              },
              {
                title: "grafana/grafana",
                url: "https://github.com/grafana/grafana",
                description: "Open observability platform"
              }
            ]
          }
        ]
      }
    ]
  }
];
