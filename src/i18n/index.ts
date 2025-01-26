import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: {
      projects: '查看我的项目',
      back: '返回个人主页'
    },
    profile: {
      name: '肖君枫',
      title: '学术主页',
      roles: 'AI全栈开发工程师 / AI 产品经理 / Prompt 工程师 / 内容编辑',
      greeting: '大家好！我是肖君枫，一名AI全栈开发工程师和产品经理。我专注于人工智能领域，尤其是大语言模型的应用开发和系统架构设计。在过去的一年里，我参与了多个AI项目的全栈开发，包括教育科技和创意写作等领域。',
      skills: '我擅长全栈开发、产品设计、用户体验优化和AI系统的prompt工程，致力于将复杂的AI技术转化为直观、易用的产品。我对AI的热情源于其改变世界的潜力，特别是在教育和创意领域的应用。',
      community: '在工作之余，我积极参与开源社区，乐于分享AI相关的技术见解和实践经验。我相信AI技术的发展应该以人为本，为社会创造真正的价值。'
    },
    sections: {
      about: '个人简介',
      experience: '实习经历',
      projects: '开发项目',
      contributions: '开源社区贡献'
    },
    projects: {
      zero_haruhi: {
        title: 'Zero-Haruhi',
        subtitle: '【凉宫春日】',
        repo: 'GitHub 仓库'
      },
      face_extract: {
        title: 'smooth-face-extract',
        description: '一个用于从视频中提取人脸的多功能工具，用作 SD 训练的辅助工具',
        repo: 'GitHub 仓库'
      }
    },
    contributions: {
      huggingface: {
        title: 'huggingface Hub Python Library',
        role: '中文翻译贡献者',
        pr: 'GitHub PR'
      },
      blog: {
        title: 'Hugging Face 博客翻译系列'
      }
    },
    experience: {
      metadigits: {
        time: '2023年7月 - 2023年9月',
        company: '上海未来元数软件开发有限公司',
        project: 'MathGPTPro 项目',
        role: 'AI产品经理（远程）'
      },
      imaginix: {
        time: '2024年4月 - 2024年5月',
        company: '想象力科技有限公司',
        location: '美国加利福尼亚州圣何塞南九街',
        project: 'kimi.ai / Toonie.AI',
        role: 'Prompt工程师（远程）'
      },
      zhipu: {
        time: '2024年5月13日 - 2024年8月20日',
        company: '北京智谱华章（智谱AI）科技有限公司',
        role: '内容编辑实习生'
      }
    }
  },
  en: {
    nav: {
      projects: 'View My Projects',
      back: 'Back to Home'
    },
    profile: {
      name: 'Junfeng Xiao',
      title: 'Academic Portfolio',
      roles: 'AI Full-Stack Engineer / AI Product Manager / Prompt Engineer / Content Editor',
      greeting: 'Hello everyone! I\'m Junfeng Xiao, an AI Full-Stack Engineer and Product Manager. I focus on artificial intelligence, especially the development and system architecture of large language models. Over the past year, I\'ve been involved in multiple AI projects, including educational technology and creative writing.',
      skills: 'I excel in full-stack development, product design, UX optimization, and AI system prompt engineering, dedicated to transforming complex AI technology into intuitive, user-friendly products. My passion for AI stems from its potential to change the world, particularly in education and creative fields.',
      community: 'Outside of work, I actively participate in the open-source community, sharing technical insights and practical experiences in AI. I believe AI technology development should be human-centric and create real value for society.'
    },
    sections: {
      about: 'About Me',
      experience: 'Experience',
      projects: 'Development Projects',
      contributions: 'Open Source Contributions'
    },
    projects: {
      zero_haruhi: {
        title: 'Zero-Haruhi',
        subtitle: '[Haruhi Suzumiya]',
        repo: 'GitHub Repository'
      },
      face_extract: {
        title: 'smooth-face-extract',
        description: 'A versatile tool for extracting faces from videos, used as an auxiliary tool for SD training',
        repo: 'GitHub Repository'
      }
    },
    contributions: {
      huggingface: {
        title: 'huggingface Hub Python Library',
        role: 'Chinese Translation Contributor',
        pr: 'GitHub PR'
      },
      blog: {
        title: 'Hugging Face Blog Translation Series'
      }
    },
    experience: {
      metadigits: {
        time: 'July 2023 - September 2023',
        company: 'MetaDigits.AI (Shanghai Future Metanumber Software Co., Ltd.)',
        project: 'MathGPTPro Project',
        role: 'AI Product Manager (Remote)'
      },
      imaginix: {
        time: 'April 2024 - May 2024',
        company: 'Imaginix Inc.',
        location: 'South 9th Street, San Jose, California, USA',
        project: 'kimi.ai / Toonie.AI',
        role: 'Prompt Engineer (Remote)'
      },
      zhipu: {
        time: 'May 13, 2024 - August 20, 2024',
        company: 'Zhipu AI (Beijing)',
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