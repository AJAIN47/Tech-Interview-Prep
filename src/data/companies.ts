import { Company } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    description: 'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Phone or virtual technical screen with a recruiter' },
        { name: 'Technical Phone Interviews', description: '1-2 rounds of technical interviews focusing on coding and problem-solving' },
        { name: 'Onsite/Virtual Loop', description: '4-5 interviews including coding, system design, and behavioral questions' },
        { name: 'Hiring Committee Review', description: 'Review of all feedback by a committee of engineers' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Data structures, algorithms, time/space complexity analysis' },
        { type: 'System Design', frequency: 'High', description: 'Designing scalable systems and services' },
        { type: 'Behavioral', frequency: 'Medium', description: 'Past experiences, teamwork, conflict resolution' },
        { type: 'Google-Specific', frequency: 'Medium', description: 'Questions about Google products and technologies' }
      ],
      averageDuration: '4-8 weeks',
      additionalNotes: 'Google is known for its focus on algorithmic problem-solving and system design skills.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.google.com/jobs/results/?distance=50&q=software%20engineering',
      dataScience: 'https://careers.google.com/jobs/results/?distance=50&q=data%20science',
      productManagement: 'https://careers.google.com/jobs/results/?distance=50&q=product%20management',
      businessRoles: 'https://careers.google.com/jobs/results/?distance=50&q=business'
    },
    youtubeVideos: [
      {
        title: "Google Interview Experience 2024 | SDE",
        url: "https://www.youtube.com/watch?v=2cGZkcoDra0",
        thumbnail: "https://img.youtube.com/vi/2cGZkcoDra0/hqdefault.jpg"
      },
      {
        title: "Google Coding Interview Preparation (2023)",
        url: "https://www.youtube.com/watch?v=qVExgUpIGJQ",
        thumbnail: "https://img.youtube.com/vi/qVExgUpIGJQ/hqdefault.jpg"
      },
      {
        title: "How to Crack Google Interview (2023)",
        url: "https://www.youtube.com/watch?v=tA57Y-V-WLE",
        thumbnail: "https://img.youtube.com/vi/tA57Y-V-WLE/hqdefault.jpg"
      }
    ]
  },
  {
    id: '2',
    name: 'Microsoft',
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    description: 'Microsoft Corporation is an American multinational technology corporation producing computer software, consumer electronics, personal computers, and related services.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Phone or virtual screen with a recruiter' },
        { name: 'Technical Interview', description: '1-2 rounds of technical phone/video interviews' },
        { name: 'Final Interviews', description: '4-5 interviews with team members, including coding, design, and behavioral questions' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Algorithm design, data structures, problem-solving' },
        { type: 'System Design', frequency: 'Medium', description: 'Architecture and scalability challenges' },
        { type: 'Behavioral', frequency: 'High', description: 'Collaboration, leadership, and growth mindset assessment' }
      ],
      averageDuration: '3-6 weeks',
      additionalNotes: 'Microsoft has shifted focus to a more holistic candidate assessment, valuing growth mindset alongside technical skills.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.microsoft.com/us/en/search-results?keywords=software%20engineer',
      dataScience: 'https://careers.microsoft.com/us/en/search-results?keywords=data%20science',
      productManagement: 'https://careers.microsoft.com/us/en/search-results?keywords=product%20manager',
      businessRoles: 'https://careers.microsoft.com/us/en/search-results?keywords=business'
    },
    youtubeVideos: [
      {
        title: "Microsoft Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=oBDym2nB9zE",
        thumbnail: "https://img.youtube.com/vi/oBDym2nB9zE/hqdefault.jpg"
      },
      {
        title: "Microsoft Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=8Myx-vy0csM",
        thumbnail: "https://img.youtube.com/vi/8Myx-vy0csM/hqdefault.jpg"
      },
      {
        title: "Microsoft Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=DbKxjnzxbYU",
        thumbnail: "https://img.youtube.com/vi/DbKxjnzxbYU/hqdefault.jpg"
      },
      {
        title: "Microsoft SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=NJsANA8bB7w",
        thumbnail: "https://img.youtube.com/vi/NJsANA8bB7w/hqdefault.jpg"
      },
      {
        title: "Microsoft Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=fRozLeshPiA",
        thumbnail: "https://img.youtube.com/vi/fRozLeshPiA/hqdefault.jpg"
      }
    ]
  },
  {
    id: '3',
    name: 'Amazon',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
    description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    interviewPatterns: {
      stages: [
        { name: 'Online Assessment', description: 'Coding and logical reasoning tests' },
        { name: 'Phone Screens', description: '1-2 technical phone interviews' },
        { name: 'Onsite/Virtual Loop', description: '4-5 interviews including coding, system design, and leadership principles' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Data structures, algorithms, problem-solving' },
        { type: 'System Design', frequency: 'High', description: 'Architecture design for scalable systems' },
        { type: 'Leadership Principles', frequency: 'High', description: 'Behavioral questions based on Amazon\'s leadership principles' }
      ],
      averageDuration: '3-5 weeks',
      additionalNotes: 'Amazon heavily emphasizes their leadership principles in interviews, with most behavioral questions directly tied to these principles.'
    },
    careerPages: {
      softwareEngineering: 'https://www.amazon.jobs/en/job_categories/software-development',
      dataScience: 'https://www.amazon.jobs/en/job_categories/data-science',
      productManagement: 'https://www.amazon.jobs/en/job_categories/product-management-technical',
      businessRoles: 'https://www.amazon.jobs/en/job_categories/business-intelligence'
    },
    youtubeVideos: [
      {
        title: "Amazon SDE Interview Experience 2024",
        url: "https://www.youtube.com/watch?v=L-WXnYv1to4",
        thumbnail: "https://img.youtube.com/vi/L-WXnYv1to4/hqdefault.jpg"
      },
      {
        title: "Amazon Coding Interview | 2023",
        url: "https://www.youtube.com/watch?v=3-IWuRufdDY",
        thumbnail: "https://img.youtube.com/vi/3-IWuRufdDY/hqdefault.jpg"
      },
      {
        title: "Amazon Interview Preparation (2023)",
        url: "https://www.youtube.com/watch?v=G82PBnLATeE",
        thumbnail: "https://img.youtube.com/vi/G82PBnLATeE/hqdefault.jpg"
      }
    ]
  },
  {
    id: '4',
    name: 'Apple',
    logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
    description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Phone or virtual screen with a recruiter' },
        { name: 'Technical Phone Interview', description: '1-2 rounds of technical assessment' },
        { name: 'Onsite/Virtual Loop', description: '4-6 interviews with team members and leadership' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Problem-solving and language-specific knowledge' },
        { type: 'System Design', frequency: 'Medium', description: 'Architecture and design problems' },
        { type: 'Domain Knowledge', frequency: 'High', description: 'Team-specific technical questions' },
        { type: 'Behavioral', frequency: 'High', description: 'Culture fit and soft skills assessment' }
      ],
      averageDuration: '3-8 weeks',
      additionalNotes: 'Apple interviews tend to be very team-specific, with significant focus on relevant domain knowledge rather than general algorithms.'
    },
    careerPages: {
      softwareEngineering: 'https://jobs.apple.com/en-us/search?team=software-and-services',
      dataScience: 'https://jobs.apple.com/en-us/search?team=machine-learning-and-ai',
      productManagement: 'https://jobs.apple.com/en-us/search?role=product-management',
      businessRoles: 'https://jobs.apple.com/en-us/search?team=business-development'
    },
    youtubeVideos: [
      {
        title: "Apple Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=lKyFyN9P43s",
        thumbnail: "https://img.youtube.com/vi/lKyFyN9P43s/hqdefault.jpg"
      },
      {
        title: "Apple Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=PRMZhuc_6Bw",
        thumbnail: "https://img.youtube.com/vi/PRMZhuc_6Bw/hqdefault.jpg"
      },
      {
        title: "Apple Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=d83l-qMxkfk",
        thumbnail: "https://img.youtube.com/vi/d83l-qMxkfk/hqdefault.jpg"
      },
      {
        title: "Apple SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=CLtEvZzLUqc",
        thumbnail: "https://img.youtube.com/vi/CLtEvZzLUqc/hqdefault.jpg"
      },
      {
        title: "Apple Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=4Sd0iEtdanc",
        thumbnail: "https://img.youtube.com/vi/4Sd0iEtdanc/hqdefault.jpg"
      }
    ]
  },
  {
    id: '5',
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
    description: 'Meta Platforms, Inc., doing business as Meta, is an American multinational technology conglomerate that owns Facebook, Instagram, and WhatsApp, among other products and services.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Phone or virtual screen with a recruiter' },
        { name: 'Technical Phone Screens', description: '1-2 rounds of technical interviews' },
        { name: 'Onsite/Virtual Loop', description: '4-5 interviews including coding, system design, and behavioral questions' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Data structures, algorithms, problem-solving' },
        { type: 'System Design', frequency: 'High', description: 'Designing scalable systems' },
        { type: 'Behavioral', frequency: 'Medium', description: 'Teamwork, past experiences, culture fit' },
        { type: 'Product Sense', frequency: 'Medium', description: 'Understanding product decisions and metrics (for certain roles)' }
      ],
      averageDuration: '3-6 weeks',
      additionalNotes: 'Meta places heavy emphasis on coding and system design skills, with a focus on scalability challenges.'
    },
    careerPages: {
      softwareEngineering: 'https://www.metacareers.com/jobs?q=software%20engineer',
      dataScience: 'https://www.metacareers.com/jobs?q=data%20scientist',
      productManagement: 'https://www.metacareers.com/jobs?q=product%20manager',
      businessRoles: 'https://www.metacareers.com/jobs?q=business'
    },
    youtubeVideos: [
      {
        title: "Meta (Facebook) Interview Experience 2024",
        url: "https://www.youtube.com/watch?v=mCDGA3-IMe8",
        thumbnail: "https://img.youtube.com/vi/mCDGA3-IMe8/hqdefault.jpg"
      },
      {
        title: "Meta Coding Interview | 2023",
        url: "https://www.youtube.com/watch?v=1MPEJ2j0z34",
        thumbnail: "https://img.youtube.com/vi/1MPEJ2j0z34/hqdefault.jpg"
      },
      {
        title: "Meta Interview Preparation (2023)",
        url: "https://www.youtube.com/watch?v=-r5aqsAdwZo",
        thumbnail: "https://img.youtube.com/vi/-r5aqsAdwZo/hqdefault.jpg"
      }
    ]
  },
  {
    id: '6',
    name: 'Netflix',
    logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
    description: 'Netflix, Inc. is an American subscription streaming service and production company that offers a wide variety of award-winning content.',
    interviewPatterns: {
      stages: [
        { name: 'Recruiter Screen', description: 'Initial conversation about experience and culture fit' },
        { name: 'Technical Screen', description: 'In-depth technical discussion and coding' },
        { name: 'Final Round', description: '4-5 interviews focusing on technical depth and culture' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Complex problem-solving and system optimization' },
        { type: 'System Design', frequency: 'High', description: 'Distributed systems and streaming architecture' },
        { type: 'Culture', frequency: 'High', description: 'Values alignment and decision-making process' }
      ],
      averageDuration: '2-4 weeks',
      additionalNotes: 'Netflix emphasizes cultural fit and technical excellence equally in their interview process.'
    },
    careerPages: {
      softwareEngineering: 'https://jobs.netflix.com/search?q=software%20engineer',
      dataScience: 'https://jobs.netflix.com/search?q=data%20science',
      productManagement: 'https://jobs.netflix.com/search?q=product%20manager',
      businessRoles: 'https://jobs.netflix.com/search?q=business'
    },
    youtubeVideos: [
      {
        title: "Netflix Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=6c-_gyTCtDg",
        thumbnail: "https://img.youtube.com/vi/6c-_gyTCtDg/hqdefault.jpg"
      },
      {
        title: "Netflix Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=N6UXJkgDmnY",
        thumbnail: "https://img.youtube.com/vi/N6UXJkgDmnY/hqdefault.jpg"
      },
      {
        title: "Netflix Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=Mcfn6d4DtPo",
        thumbnail: "https://img.youtube.com/vi/Mcfn6d4DtPo/hqdefault.jpg"
      },
      {
        title: "Netflix SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=09S4h9Nce94",
        thumbnail: "https://img.youtube.com/vi/09S4h9Nce94/hqdefault.jpg"
      },
      {
        title: "Netflix Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=HcYWHdlV9X4",
        thumbnail: "https://img.youtube.com/vi/HcYWHdlV9X4/hqdefault.jpg"
      }
    ]
  },
  {
    id: '7',
    name: 'Salesforce',
    logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
    description: 'Salesforce, Inc. is an American cloud-based software company providing CRM services and a suite of enterprise applications focused on sales, customer service, marketing automation, and analytics.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Discussion with recruiter about experience and role fit' },
        { name: 'Technical Assessment', description: 'Online coding challenge or take-home project' },
        { name: 'Virtual Onsite', description: '4-5 rounds including technical and behavioral interviews' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Data structures, algorithms, and practical implementation' },
        { type: 'System Design', frequency: 'Medium', description: 'Enterprise architecture and scalability' },
        { type: 'Values Assessment', frequency: 'High', description: 'Alignment with Salesforce values and culture' }
      ],
      averageDuration: '3-5 weeks',
      additionalNotes: 'Salesforce places strong emphasis on values alignment and technical capability.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.salesforce.com/en/jobs/?search=software&pagesize=20#results',
      dataScience: 'https://careers.salesforce.com/en/jobs/?search=data%20science&pagesize=20#results',
      productManagement: 'https://careers.salesforce.com/en/jobs/?search=product%20manager&pagesize=20#results',
      businessRoles: 'https://careers.salesforce.com/en/jobs/?search=business&pagesize=20#results'
    },
    youtubeVideos: [
      {
        title: "Salesforce Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=PXdZ9TEQjgw",
        thumbnail: "https://img.youtube.com/vi/PXdZ9TEQjgw/hqdefault.jpg"
      },
      {
        title: "Salesforce Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=OfjzXmQT0r0",
        thumbnail: "https://img.youtube.com/vi/OfjzXmQT0r0/hqdefault.jpg"
      },
      {
        title: "Salesforce Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=vUsUmXtCVtU",
        thumbnail: "https://img.youtube.com/vi/vUsUmXtCVtU/hqdefault.jpg"
      },
      {
        title: "Salesforce Interview Playlist",
        url: "https://www.youtube.com/playlist?list=PLzGs9kuT6P62f7TkZytpPyVquTgYxlk9I",
        thumbnail: "https://img.youtube.com/vi/PXdZ9TEQjgw/hqdefault.jpg"
      },
      {
        title: "Salesforce Interview Guide Channel",
        url: "https://www.youtube.com/@Mtripathi347",
        thumbnail: "https://img.youtube.com/vi/PXdZ9TEQjgw/hqdefault.jpg"
      }
    ]
  },
  {
    id: '8',
    name: 'Adobe',
    logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg',
    description: 'Adobe Inc. is an American multinational computer software company focused on multimedia and creativity software products.',
    interviewPatterns: {
      stages: [
        { name: 'HR Screen', description: 'Initial discussion about background and expectations' },
        { name: 'Technical Rounds', description: '2-3 technical interviews with team members' },
        { name: 'Final Interview', description: 'Discussion with hiring manager and team leads' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Problem-solving and algorithmic thinking' },
        { type: 'System Design', frequency: 'Medium', description: 'Architecture and scalability discussions' },
        { type: 'Domain Knowledge', frequency: 'High', description: 'Specific technology and tool expertise' }
      ],
      averageDuration: '3-6 weeks',
      additionalNotes: 'Adobe focuses on both technical skills and creative problem-solving abilities.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.adobe.com/us/en/search-results?keywords=software%20engineer',
      dataScience: 'https://careers.adobe.com/us/en/search-results?keywords=data%20scientist',
      productManagement: 'https://careers.adobe.com/us/en/search-results?keywords=product%20manager',
      businessRoles: 'https://careers.adobe.com/us/en/search-results?keywords=business'
    },
    youtubeVideos: [
      {
        title: "Adobe Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=mNxtAJdVVUg",
        thumbnail: "https://img.youtube.com/vi/mNxtAJdVVUg/hqdefault.jpg"
      },
      {
        title: "Adobe Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=3mZwF77ohjc",
        thumbnail: "https://img.youtube.com/vi/3mZwF77ohjc/hqdefault.jpg"
      },
      {
        title: "Adobe Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=ikVAe_E1ebs",
        thumbnail: "https://img.youtube.com/vi/ikVAe_E1ebs/hqdefault.jpg"
      },
      {
        title: "Adobe SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=dz_PUirdD0k",
        thumbnail: "https://img.youtube.com/vi/dz_PUirdD0k/hqdefault.jpg"
      },
      {
        title: "Adobe Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=BJFS1jAyk3M",
        thumbnail: "https://img.youtube.com/vi/BJFS1jAyk3M/hqdefault.jpg"
      }
    ]
  },
  {
    id: '9',
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
    description: 'NVIDIA Corporation is a global technology company specializing in graphics processing units (GPUs), artificial intelligence computing, and automotive chip systems.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Phone screen with recruiter' },
        { name: 'Technical Assessment', description: '1-2 technical interviews focusing on GPU architecture and algorithms' },
        { name: 'Onsite/Virtual Loop', description: '4-5 rounds including coding, architecture, and domain knowledge' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'Algorithms, parallel programming, and optimization' },
        { type: 'System Design', frequency: 'High', description: 'GPU architecture and hardware-software interaction' },
        { type: 'Domain Knowledge', frequency: 'High', description: 'Graphics, CUDA, or AI expertise depending on role' }
      ],
      averageDuration: '4-6 weeks',
      additionalNotes: 'Strong focus on parallel computing and hardware understanding.'
    },
    careerPages: {
      softwareEngineering: 'https://www.nvidia.com/en-us/about-nvidia/careers/',
      dataScience: 'https://www.nvidia.com/en-us/about-nvidia/careers/ai-data-science',
      productManagement: 'https://www.nvidia.com/en-us/about-nvidia/careers/product-management',
      businessRoles: 'https://www.nvidia.com/en-us/about-nvidia/careers/business'
    },
    youtubeVideos: [
      {
        title: "NVIDIA Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=CtnKFK3HdQs",
        thumbnail: "https://img.youtube.com/vi/CtnKFK3HdQs/hqdefault.jpg"
      },
      {
        title: "NVIDIA Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=XMGRvRMYXSU",
        thumbnail: "https://img.youtube.com/vi/XMGRvRMYXSU/hqdefault.jpg"
      },
      {
        title: "NVIDIA Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=ZjAciO1UChc",
        thumbnail: "https://img.youtube.com/vi/ZjAciO1UChc/hqdefault.jpg"
      },
      {
        title: "NVIDIA SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=HlJkKMIvmhg",
        thumbnail: "https://img.youtube.com/vi/HlJkKMIvmhg/hqdefault.jpg"
      },
      {
        title: "NVIDIA Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=FDHj1OJJcPs",
        thumbnail: "https://img.youtube.com/vi/FDHj1OJJcPs/hqdefault.jpg"
      }
    ]
  },
  {
    id: '10',
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg',
    description: 'PayPal Holdings, Inc. is an American financial technology company operating an online payments system and digital payment platform.',
    interviewPatterns: {
      stages: [
        { name: 'HR Screen', description: 'Initial discussion about experience and role fit' },
        { name: 'Technical Rounds', description: '2-3 technical interviews with focus on payment systems' },
        { name: 'Final Panel', description: '3-4 interviews including system design and security' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Data structures and payment processing algorithms' },
        { type: 'System Design', frequency: 'High', description: 'Payment systems architecture and security' },
        { type: 'Security', frequency: 'High', description: 'Financial security and fraud prevention' }
      ],
      averageDuration: '3-5 weeks',
      additionalNotes: 'Strong emphasis on security and financial technology knowledge.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.paypal.com/us/en/search-results?keywords=software%20engineer',
      dataScience: 'https://careers.paypal.com/us/en/search-results?keywords=data%20scientist',
      productManagement: 'https://careers.paypal.com/us/en/search-results?keywords=product%20manager',
      businessRoles: 'https://careers.paypal.com/us/en/search-results?keywords=business'
    },
    youtubeVideos: [
      {
        title: "PayPal Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=matmn0Bztkw",
        thumbnail: "https://img.youtube.com/vi/matmn0Bztkw/hqdefault.jpg"
      },
      {
        title: "PayPal Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=GA6Mx09XEwE",
        thumbnail: "https://img.youtube.com/vi/GA6Mx09XEwE/hqdefault.jpg"
      },
      {
        title: "PayPal Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=MBoUWHTH_9s",
        thumbnail: "https://img.youtube.com/vi/MBoUWHTH_9s/hqdefault.jpg"
      },
      {
        title: "PayPal SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=_f4DkdEKP34",
        thumbnail: "https://img.youtube.com/vi/_f4DkdEKP34/hqdefault.jpg"
      },
      {
        title: "PayPal Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=FTnRzPY2v6o",
        thumbnail: "https://img.youtube.com/vi/FTnRzPY2v6o/hqdefault.jpg"
      }
    ]
  },
  {
    id: '11',
    name: 'Intel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg',
    description: 'Intel Corporation is an American multinational corporation and technology company specializing in the development of microprocessors and other semiconductor products.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Phone screen with hiring team' },
        { name: 'Technical Assessment', description: 'Hardware/software technical evaluation' },
        { name: 'Onsite Interviews', description: '4-5 rounds focusing on technical depth and innovation' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Low-level programming and optimization' },
        { type: 'Hardware Design', frequency: 'High', description: 'Computer architecture and chip design' },
        { type: 'System Integration', frequency: 'High', description: 'Hardware-software interface design' }
      ],
      averageDuration: '4-7 weeks',
      additionalNotes: 'Focus on hardware knowledge and low-level system understanding.'
    },
    careerPages: {
      softwareEngineering: 'https://jobs.intel.com/en/search-jobs/software%20engineer',
      dataScience: 'https://jobs.intel.com/en/search-jobs/data%20scientist',
      productManagement: 'https://jobs.intel.com/en/search-jobs/product%20manager',
      businessRoles: 'https://jobs.intel.com/en/search-jobs/business'
    },
    youtubeVideos: [
      {
        title: "Intel Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=-C4a38MVZJk",
        thumbnail: "https://img.youtube.com/vi/-C4a38MVZJk/hqdefault.jpg"
      },
      {
        title: "Intel Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=_pkGBiPffkM",
        thumbnail: "https://img.youtube.com/vi/_pkGBiPffkM/hqdefault.jpg"
      },
      {
        title: "Intel Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=Hx7iOtUb538",
        thumbnail: "https://img.youtube.com/vi/Hx7iOtUb538/hqdefault.jpg"
      },
      {
        title: "Intel SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=N5Wm9tcdwF4",
        thumbnail: "https://img.youtube.com/vi/N5Wm9tcdwF4/hqdefault.jpg"
      },
      {
        title: "Intel Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=uZGuOqxQtfM",
        thumbnail: "https://img.youtube.com/vi/uZGuOqxQtfM/hqdefault.jpg"
      }
    ]
  },
  {
    id: '12',
    name: 'Oracle',
    logo: 'https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.png',
    description: 'Oracle Corporation is an American multinational technology corporation specializing in database software, cloud computing systems, and enterprise software products.',
    interviewPatterns: {
      stages: [
        { name: 'Recruiter Screen', description: 'Initial qualification and role alignment' },
        { name: 'Technical Rounds', description: '2-3 technical interviews' },
        { name: 'Team Interviews', description: '3-4 rounds with potential team members' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Database algorithms and optimization' },
        { type: 'System Design', frequency: 'High', description: 'Database and cloud architecture' },
        { type: 'SQL', frequency: 'High', description: 'Database design and query optimization' }
      ],
      averageDuration: '3-6 weeks',
      additionalNotes: 'Strong focus on database technology and enterprise systems.'
    },
    careerPages: {
      softwareEngineering: 'https://oracle.com/careers/search-jobs/software%20engineer',
      dataScience: 'https://oracle.com/careers/search-jobs/data%20scientist',
      productManagement: 'https://oracle.com/careers/search-jobs/product%20manager',
      businessRoles: 'https://oracle.com/careers/search-jobs/business'
    },
    youtubeVideos: [
      {
        title: "Oracle Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=_SKPOX2c4Hk",
        thumbnail: "https://img.youtube.com/vi/_SKPOX2c4Hk/hqdefault.jpg"
      },
      {
        title: "Oracle Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=hXOnaUiFCco",
        thumbnail: "https://img.youtube.com/vi/hXOnaUiFCco/hqdefault.jpg"
      },
      {
        title: "Oracle Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=Dh09C8kAkio",
        thumbnail: "https://img.youtube.com/vi/Dh09C8kAkio/hqdefault.jpg"
      },
      {
        title: "Oracle SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=Omku5WjeKnI",
        thumbnail: "https://img.youtube.com/vi/Omku5WjeKnI/hqdefault.jpg"
      },
      {
        title: "Oracle Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=29Q8NZzhbZs",
        thumbnail: "https://img.youtube.com/vi/29Q8NZzhbZs/hqdefault.jpg"
      }
    ]
  },
  {
    id: '13',
    name: 'JPMorgan Chase',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg',
    description: 'JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company, combining traditional banking with modern technology.',
    interviewPatterns: {
      stages: [
        { name: 'HR Screen', description: 'Initial fit and background check' },
        { name: 'Technical Assessment', description: 'Coding and financial technology evaluation' },
        { name: 'Final Rounds', description: '3-4 interviews including technical and behavioral' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Algorithms and financial computations' },
        { type: 'System Design', frequency: 'High', description: 'Financial systems architecture' },
        { type: 'Financial Knowledge', frequency: 'High', description: 'Banking systems and regulations' }
      ],
      averageDuration: '4-6 weeks',
      additionalNotes: 'Emphasis on financial domain knowledge and regulatory compliance.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.jpmorgan.com/global/en/search-jobs/software%20engineer',
      dataScience: 'https://careers.jpmorgan.com/global/en/search-jobs/data%20scientist',
      productManagement: 'https://careers.jpmorgan.com/global/en/search-jobs/product%20manager',
      businessRoles: 'https://careers.jpmorgan.com/global/en/search-jobs/business'
    },
    youtubeVideos: [
      {
        title: "JPMorgan Chase Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=Q_gEvX-no0s",
        thumbnail: "https://img.youtube.com/vi/Q_gEvX-no0s/hqdefault.jpg"
      },
      {
        title: "JPMorgan Chase Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=WPuovSKiaco",
        thumbnail: "https://img.youtube.com/vi/WPuovSKiaco/hqdefault.jpg"
      },
      {
        title: "JPMorgan Chase Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=Li3KCwAGObM",
        thumbnail: "https://img.youtube.com/vi/Li3KCwAGObM/hqdefault.jpg"
      },
      {
        title: "JPMorgan Chase SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=ExAP6l7Gbk8",
        thumbnail: "https://img.youtube.com/vi/ExAP6l7Gbk8/hqdefault.jpg"
      },
      {
        title: "JPMorgan Chase Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=mRTQFNiMijI",
        thumbnail: "https://img.youtube.com/vi/mRTQFNiMijI/hqdefault.jpg"
      }
    ]
  },
  {
    id: '14',
    name: 'Stripe',
    logo: 'https://1000logos.net/wp-content/uploads/2021/05/Stripe-logo.png',
    description: 'Stripe is a financial technology company that builds economic infrastructure for the internet, offering payment processing software and APIs.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Conversation with recruiter' },
        { name: 'Technical Challenge', description: 'Take-home project or live coding' },
        { name: 'Virtual Onsite', description: '4-5 rounds including system design and culture' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'High', description: 'API design and implementation' },
        { type: 'System Design', frequency: 'High', description: 'Payment systems architecture' },
        { type: 'Product Sense', frequency: 'Medium', description: 'API usability and developer experience' }
      ],
      averageDuration: '2-4 weeks',
      additionalNotes: 'Focus on API design and payment systems knowledge.'
    },
    careerPages: {
      softwareEngineering: 'https://stripe.com/jobs/search?q=software%20engineer',
      dataScience: 'https://stripe.com/jobs/search?q=data%20scientist',
      productManagement: 'https://stripe.com/jobs/search?q=product%20manager',
      businessRoles: 'https://stripe.com/jobs/search?q=business'
    },
    youtubeVideos: [
      {
        title: "Stripe Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=MUxgDLZpE3E",
        thumbnail: "https://img.youtube.com/vi/MUxgDLZpE3E/hqdefault.jpg"
      },
      {
        title: "Stripe Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=kiU3HX0ifvw",
        thumbnail: "https://img.youtube.com/vi/kiU3HX0ifvw/hqdefault.jpg"
      },
      {
        title: "Stripe Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=AewaIJDvdcw",
        thumbnail: "https://img.youtube.com/vi/AewaIJDvdcw/hqdefault.jpg"
      },
      {
        title: "Stripe SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=EavFSe34Tp4",
        thumbnail: "https://img.youtube.com/vi/EavFSe34Tp4/hqdefault.jpg"
      },
      {
        title: "Stripe Interview Guide Channel",
        url: "https://www.youtube.com/@Prepfully",
        thumbnail: "https://img.youtube.com/vi/MUxgDLZpE3E/hqdefault.jpg"
      }
    ]
  },
  {
    id: '15',
    name: 'AMD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
    description: 'Advanced Micro Devices, Inc. is an American multinational semiconductor company developing computer processors and related technologies.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Technical background verification' },
        { name: 'Technical Rounds', description: '2-3 technical interviews' },
        { name: 'Final Panel', description: '3-4 rounds with senior engineers' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Low-level programming and optimization' },
        { type: 'Hardware Design', frequency: 'High', description: 'Processor architecture and design' },
        { type: 'System Knowledge', frequency: 'High', description: 'Computer architecture fundamentals' }
      ],
      averageDuration: '3-5 weeks',
      additionalNotes: 'Strong focus on hardware architecture and performance optimization.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.amd.com/search-jobs/software%20engineer',
      dataScience: 'https://careers.amd.com/search-jobs/data%20scientist',
      productManagement: 'https://careers.amd.com/search-jobs/product%20manager',
      businessRoles: 'https://careers.amd.com/search-jobs/business'
    },
    youtubeVideos: [
      {
        title: "AMD Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=YiHzZthy_Y4",
        thumbnail: "https://img.youtube.com/vi/YiHzZthy_Y4/hqdefault.jpg"
      },
      {
        title: "AMD Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=-iQfPvoSVrI",
        thumbnail: "https://img.youtube.com/vi/-iQfPvoSVrI/hqdefault.jpg"
      },
      {
        title: "AMD Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=YiHzZthy_Y4",
        thumbnail: "https://img.youtube.com/vi/YiHzZthy_Y4/hqdefault.jpg"
      },
      {
        title: "AMD SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=YiHzZthy_Y4",
        thumbnail: "https://img.youtube.com/vi/YiHzZthy_Y4/hqdefault.jpg"
      },
      {
        title: "AMD Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=YiHzZthy_Y4",
        thumbnail: "https://img.youtube.com/vi/YiHzZthy_Y4/hqdefault.jpg"
      }
    ]
  },
  {
    id: '16',
    name: 'Cisco',
    logo: 'https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png',
    description: 'Cisco Systems, Inc. is an American multinational technology conglomerate developing, manufacturing, and selling networking hardware, software, and telecommunications equipment.',
    interviewPatterns: {
      stages: [
        { name: 'HR Screen', description: 'Initial qualification discussion' },
        { name: 'Technical Assessment', description: 'Network programming and protocols' },
        { name: 'Panel Interview', description: '4 rounds including system design' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Network programming and protocols' },
        { type: 'System Design', frequency: 'High', description: 'Network architecture and security' },
        { type: 'Networking', frequency: 'High', description: 'Protocol design and implementation' }
      ],
      averageDuration: '3-6 weeks',
      additionalNotes: 'Heavy emphasis on networking protocols and distributed systems.'
    },
    careerPages: {
      softwareEngineering: 'https://jobs.cisco.com/jobs/SearchJobs/software?21178=%5B169482%5D&21178_format=6020&listFilterMode=1',
      dataScience: 'https://jobs.cisco.com/jobs/SearchJobs/data%20science?21178=%5B169482%5D&21178_format=6020&listFilterMode=1',
      productManagement: 'https://jobs.cisco.com/jobs/SearchJobs/product%20manager?21178=%5B169482%5D&21178_format=6020&listFilterMode=1',
      businessRoles: 'https://jobs.cisco.com/jobs/SearchJobs/business?listFilterMode=1'
    },
    youtubeVideos: [
      {
        title: "Cisco Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=Lk3jt4kzc7I",
        thumbnail: "https://img.youtube.com/vi/Lk3jt4kzc7I/hqdefault.jpg"
      },
      {
        title: "Cisco Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=Lj6F_wiS9dI",
        thumbnail: "https://img.youtube.com/vi/Lj6F_wiS9dI/hqdefault.jpg"
      },
      {
        title: "Cisco Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=ISAdcca42to",
        thumbnail: "https://img.youtube.com/vi/ISAdcca42to/hqdefault.jpg"
      },
      {
        title: "Cisco SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=-ac0-DPPzK8",
        thumbnail: "https://img.youtube.com/vi/-ac0-DPPzK8/hqdefault.jpg"
      },
      {
        title: "Cisco Interview Playlist",
        url: "https://www.youtube.com/playlist?list=PLCv2e_MtNGQhgiFeZk60xAZ_vKvCSbGx6",
        thumbnail: "https://img.youtube.com/vi/Lk3jt4kzc7I/hqdefault.jpg"
      }
    ]
  },
  {
    id: '17',
    name: 'ServiceNow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg',
    description: 'ServiceNow is an American software company that develops a cloud computing platform to help companies manage digital workflows for enterprise operations.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Background and experience check' },
        { name: 'Technical Interview', description: '2 rounds of technical assessment' },
        { name: 'Final Interviews', description: '3-4 rounds with team leads' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Enterprise software development' },
        { type: 'System Design', frequency: 'High', description: 'Cloud platform architecture' },
        { type: 'Workflow Design', frequency: 'High', description: 'Business process automation' }
      ],
      averageDuration: '3-5 weeks',
      additionalNotes: 'Focus on enterprise software and workflow automation.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.servicenow.com/search-jobs/software%20engineer',
      dataScience: 'https://careers.servicenow.com/search-jobs/data%20scientist',
      productManagement: 'https://careers.servicenow.com/search-jobs/product%20manager',
      businessRoles: 'https://careers.servicenow.com/search-jobs/business'
    },
    youtubeVideos: [
      {
        title: "ServiceNow Interview Guide Channel",
        url: "https://www.youtube.com/@ServiceNowInterviewGuide",
        thumbnail: "https://img.youtube.com/vi/2OagtKDe_l0/hqdefault.jpg"
      },
      {
        title: "ServiceNow Interview Playlist",
        url: "https://www.youtube.com/playlist?list=PLimbBDJcqiqgLGibZqQYFBkfA_cHpkICB",
        thumbnail: "https://img.youtube.com/vi/2OagtKDe_l0/hqdefault.jpg"
      },
      {
        title: "ServiceNow Interview Experience",
        url: "https://www.youtube.com/watch?v=2OagtKDe_l0",
        thumbnail: "https://img.youtube.com/vi/2OagtKDe_l0/hqdefault.jpg"
      },
      {
        title: "ServiceNow Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=cI1glkIAfuc",
        thumbnail: "https://img.youtube.com/vi/cI1glkIAfuc/hqdefault.jpg"
      },
      {
        title: "ServiceNow Interview Playlist 2",
        url: "https://www.youtube.com/playlist?list=PLZBia0Nwbvqx93akZ9h4rTtNZoGZwu0NP",
        thumbnail: "https://img.youtube.com/vi/2OagtKDe_l0/hqdefault.jpg"
      }
    ]
  },
  {
    id: '18',
    name: 'Intuit',
    logo: 'https://www.intuit.com/content/dam/intuit/intuitcom/company/images/logo-intuit-quickbooks-preferred.jpg',
    description: 'Intuit Inc. is an American business software company specializing in financial software including TurboTax, QuickBooks, Credit Karma, and Mailchimp.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Role and experience alignment' },
        { name: 'Technical Assessment', description: 'Coding and design evaluation' },
        { name: 'Final Round', description: '4 interviews including behavioral' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Financial software implementation' },
        { type: 'System Design', frequency: 'High', description: 'Financial systems architecture' },
        { type: 'Product Design', frequency: 'High', description: 'User experience and financial products' }
      ],
      averageDuration: '3-5 weeks',
      additionalNotes: 'Strong focus on financial software and user experience.'
    },
    careerPages: {
      softwareEngineering: 'https://careers.intuit.com/search-jobs/software%20engineer',
      dataScience: 'https://careers.intuit.com/search-jobs/data%20scientist',
      productManagement: 'https://careers.intuit.com/search-jobs/product%20manager',
      businessRoles: 'https://careers.intuit.com/search-jobs/business'
    },
    youtubeVideos: [
      {
        title: "Intuit Interview Experience 2023 | SDE",
        url: "https://www.youtube.com/watch?v=x5wfTYrONmQ",
        thumbnail: "https://img.youtube.com/vi/x5wfTYrONmQ/hqdefault.jpg"
      },
      {
        title: "Intuit Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=8V84n6IVPXA",
        thumbnail: "https://img.youtube.com/vi/8V84n6IVPXA/hqdefault.jpg"
      },
      {
        title: "Intuit Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=PybFQq5dHvE",
        thumbnail: "https://img.youtube.com/vi/PybFQq5dHvE/hqdefault.jpg"
      },
      {
        title: "Intuit SDE Interview Experience",
        url: "https://www.youtube.com/watch?v=3J1425nDC9M",
        thumbnail: "https://img.youtube.com/vi/3J1425nDC9M/hqdefault.jpg"
      },
      {
        title: "Intuit Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=WPe6BqUC4NI",
        thumbnail: "https://img.youtube.com/vi/WPe6BqUC4NI/hqdefault.jpg"
      }
    ]
  },
  {
    id: '19',
    name: 'Visa',
    logo: 'https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo.png',
    description: 'Visa Inc. is an American multinational financial services corporation that facilitates electronic funds transfers worldwide through Visa-branded credit cards and payment products.',
    interviewPatterns: {
      stages: [
        { name: 'HR Screen', description: 'Initial qualification and background' },
        { name: 'Technical Rounds', description: '2-3 technical interviews' },
        { name: 'Final Panel', description: '3-4 rounds including system design' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Payment processing algorithms' },
        { type: 'System Design', frequency: 'High', description: 'Payment network architecture' },
        { type: 'Security', frequency: 'High', description: 'Financial security and compliance' }
      ],
      averageDuration: '4-6 weeks',
      additionalNotes: 'Heavy emphasis on payment systems and security.'
    },
    careerPages: {
      softwareEngineering: 'https://corporate.visa.com/en/jobs/?categories=Software%20Development%2FEngineering',
      dataScience: 'https://corporate.visa.com/en/jobs/?categories=Data%20Science%2FData%20Engineering',
      productManagement: 'https://corporate.visa.com/en/jobs/?categories=Product%20%26%20Project%20Management%20(Technical)',
      businessRoles: 'https://corporate.visa.com/en/jobs/?categories=Business%20Development'
    },
    youtubeVideos: [
      {
        title: "Visa Interview Experience 2024 | SDE",
        url: "https://www.youtube.com/watch?v=4_Zr_dZ1SQg",
        thumbnail: "https://img.youtube.com/vi/4_Zr_dZ1SQg/hqdefault.jpg"
      },
      {
        title: "Visa Coding Interview Preparation",
        url: "https://www.youtube.com/watch?v=T1BLKMXpBxY",
        thumbnail: "https://img.youtube.com/vi/T1BLKMXpBxY/hqdefault.jpg"
      },
      {
        title: "Visa Interview Questions & Answers",
        url: "https://www.youtube.com/watch?v=BdRaY99zbro",
        thumbnail: "https://img.youtube.com/vi/BdRaY99zbro/hqdefault.jpg"
      },
      {
        title: "Visa SDE Interview Experience",
        url: "https://www.youtube.com/watch?app=desktop&v=nOkILtZvmZw",
        thumbnail: "https://img.youtube.com/vi/nOkILtZvmZw/hqdefault.jpg"
      },
      {
        title: "Visa Interview Preparation Tips",
        url: "https://www.youtube.com/watch?v=GMNkPPB-Vmw",
        thumbnail: "https://img.youtube.com/vi/GMNkPPB-Vmw/hqdefault.jpg"
      }
    ]
  },
  {
    id: '20',
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
    description: 'VMware, Inc. is an American cloud computing and virtualization technology company providing cloud infrastructure, digital workspace technology, and security.',
    interviewPatterns: {
      stages: [
        { name: 'Initial Screen', description: 'Technical background verification' },
        { name: 'Technical Assessment', description: '2 rounds of technical interviews' },
        { name: 'Final Interviews', description: '4 rounds including system design' }
      ],
      questionTypes: [
        { type: 'Coding', frequency: 'Medium', description: 'Systems programming and optimization' },
        { type: 'System Design', frequency: 'High', description: 'Virtualization and cloud architecture' },
        { type: 'Infrastructure', frequency: 'High', description: 'Cloud infrastructure and networking' }
      ],
      averageDuration: '3-6 weeks',
      additionalNotes: 'Focus on virtualization technology and cloud infrastructure.'
    },
    careerPages: {
      softwareEngineering: 'https://broadcom.wd1.myworkdayjobs.com/External_Career?q=software',
      dataScience: 'https://broadcom.wd1.myworkdayjobs.com/External_Career?q=data',
      productManagement: 'https://broadcom.wd1.myworkdayjobs.com/External_Career?q=product',
      businessRoles: 'https://broadcom.wd1.myworkdayjobs.com/External_Career?q=business'
    },
    youtubeVideos: [
      {
        title: "VMware Interview Questions and Answers for 2024",
        url: "https://www.youtube.com/watch?v=1C4jgiFfgGI",
        thumbnail: "https://img.youtube.com/vi/1C4jgiFfgGI/hqdefault.jpg"
      },
      {
        title: "VMware INTERVIEW QUESTIONS & ANSWERS! (Suitable for ALL VMware Job Roles!)",
        url: "https://www.youtube.com/watch?v=nLrIurmTXZ4",
        thumbnail: "https://img.youtube.com/vi/nLrIurmTXZ4/hqdefault.jpg"
      },
      {
        title: "Top 100 FAQ Interview Question and Answers : VMWare",
        url: "https://www.youtube.com/watch?v=oHJqCE_9Xy0",
        thumbnail: "https://img.youtube.com/vi/oHJqCE_9Xy0/hqdefault.jpg"
      },
      {
        title: "How I cracked VMware MTS 2 (member technical staff) interview",
        url: "https://www.youtube.com/watch?v=JuBexEEgrYY",
        thumbnail: "https://img.youtube.com/vi/JuBexEEgrYY/hqdefault.jpg"
      }
    ]
  }
];