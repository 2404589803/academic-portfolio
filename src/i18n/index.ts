import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: {
      label: '主导航',
      home: '主页',
      projects: '项目与贡献',
      back: '返回主页'
    },
    footer: {
      note: 'AI、产品与开源实践',
      updated: '个人学术档案'
    },
    profile: {
      name: '肖君枫',
      title: '学术主页',
      eyebrow: 'Academic Portfolio · AI & Open Source',
      headline: '在人工智能、产品与人的经验之间建立连接。',
      roles: 'AI 产品经理 · Prompt 工程师 · 内容编辑',
      affiliation: '独立研究与产品实践',
      location: '中国',
      email: 'GitHub · LC1332',
      contact: '查看 GitHub',
      greeting: '我关注大语言模型的应用、AI 产品设计与知识传播，尝试把复杂的技术转化为可理解、可使用、可持续迭代的工具。这里记录我的项目、工作经历与开源贡献。',
      community: '我相信好的 AI 实践既需要技术判断，也需要对使用者、语言和社会情境保持敏感。通过产品工作、内容编辑和开源协作，我持续探索技术如何形成真实的公共价值。'
    },
    sections: {
      interests: '研究兴趣',
      interestsNote: '当前关注的问题',
      experience: '实践经历',
      experienceNote: '产品、内容与模型应用',
      projects: '项目与作品',
      contributions: '开源与社区',
      contributionsNote: '持续协作'
    },
    interests: {
      llm: {
        title: '大语言模型应用',
        description: '关注 LLM 在教育、创意写作与知识工作中的产品化路径。'
      },
      product: {
        title: '人本 AI 产品',
        description: '从需求、交互到评估，探索技术能力与真实使用场景之间的转换。'
      },
      openSource: {
        title: '开源与知识传播',
        description: '参与开源协作、技术翻译和工具建设，让研究与实践更容易被分享。'
      }
    },
    projects: {
      eyebrow: 'Selected Work',
      intro: '这些项目记录了我在 AI 应用、计算机视觉和开源协作中的实践，代码与文档持续更新中。',
      selected: '精选项目',
      viewRepo: '查看 GitHub 仓库',
      communityNote: '翻译与协作',
      zero_haruhi: {
        title: 'Zero-Haruhi',
        description: '围绕角色对话与语言模型应用的开源实验项目。'
      },
      face_extract: {
        title: 'smooth-face-extract',
        description: '从视频中提取人脸的工具，为 Stable Diffusion 训练流程提供辅助。'
      }
    },
    contributions: {
      huggingface: {
        title: 'huggingface Hub Python Library',
        role: '中文翻译贡献者'
      },
      blog: {
        title: 'Hugging Face 博客翻译系列',
        role: '开源技术内容协作者',
        items: '参与本地 LLM、Sentence Embeddings、leaderboard-contextual、websight 与 fine-video 等主题的翻译与整理。'
      }
    },
    experience: {
      metadigits: {
        time: '2023.07—2023.09',
        company: '上海未来元数软件开发有限公司',
        role: 'AI 产品经理（远程）'
      },
      imaginix: {
        time: '2024.04—2024.05',
        company: '想象力科技有限公司 · Imaginix',
        role: 'Prompt 工程师（远程）'
      },
      zhipu: {
        time: '2024.05—2024.08',
        company: '北京智谱华章科技有限公司',
        role: '内容编辑实习生'
      }
    }
  },
  en: {
    nav: {
      label: 'Primary navigation',
      home: 'Home',
      projects: 'Projects & Contributions',
      back: 'Back to home'
    },
    footer: {
      note: 'AI, product, and open-source practice',
      updated: 'Academic portfolio'
    },
    profile: {
      name: 'Junfeng Xiao',
      title: 'Academic Portfolio',
      eyebrow: 'Academic Portfolio · AI & Open Source',
      headline: 'Connecting artificial intelligence, products, and human experience.',
      roles: 'AI Product Manager · Prompt Engineer · Content Editor',
      affiliation: 'Independent research and product practice',
      location: 'China',
      email: 'GitHub · LC1332',
      contact: 'View GitHub',
      greeting: 'I work across large language model applications, AI product design, and knowledge sharing. My practice turns complex technology into tools that people can understand, use, and improve. This archive brings together selected projects, experience, and open-source contributions.',
      community: 'Good AI practice needs technical judgment and care for users, language, and social context. Through product work, editorial practice, and open-source collaboration, I explore how technology can create public value.'
    },
    sections: {
      interests: 'Research interests',
      interestsNote: 'Questions I am exploring',
      experience: 'Experience',
      experienceNote: 'Product, editorial, and model applications',
      projects: 'Projects & work',
      contributions: 'Open source & community',
      contributionsNote: 'Ongoing collaborations'
    },
    interests: {
      llm: {
        title: 'Large language model applications',
        description: 'Product paths for LLMs in education, creative writing, and knowledge work.'
      },
      product: {
        title: 'Human-centered AI products',
        description: 'Translating technical capabilities into useful experiences through research, interaction, and evaluation.'
      },
      openSource: {
        title: 'Open source and knowledge sharing',
        description: 'Open-source collaboration, technical translation, and tools that make practice easier to share.'
      }
    },
    projects: {
      eyebrow: 'Selected Work',
      intro: 'These projects document my work across AI applications, computer vision, and open-source collaboration. Code and notes continue to evolve.',
      selected: 'Selected projects',
      viewRepo: 'View GitHub repository',
      communityNote: 'Translation and collaboration',
      zero_haruhi: {
        title: 'Zero-Haruhi',
        description: 'An open-source experiment in character dialogue and language model applications.'
      },
      face_extract: {
        title: 'smooth-face-extract',
        description: 'A tool for extracting faces from video to support Stable Diffusion training workflows.'
      }
    },
    contributions: {
      huggingface: {
        title: 'huggingface Hub Python Library',
        role: 'Chinese translation contributor'
      },
      blog: {
        title: 'Hugging Face blog translation series',
        role: 'Open-source technical content collaborator',
        items: 'Translations and editorial work across local LLMs, Sentence Embeddings, leaderboard-contextual, websight, and fine-video.'
      }
    },
    experience: {
      metadigits: {
        time: 'Jul—Sep 2023',
        company: 'MetaDigits.AI · Shanghai Future Metanumber Software',
        role: 'AI Product Manager (remote)'
      },
      imaginix: {
        time: 'Apr—May 2024',
        company: 'Imaginix Inc.',
        role: 'Prompt Engineer (remote)'
      },
      zhipu: {
        time: 'May—Aug 2024',
        company: 'Zhipu AI · Beijing',
        role: 'Content Editor Intern'
      }
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})

