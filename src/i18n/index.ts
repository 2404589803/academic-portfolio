import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      research: 'Research',
      publications: 'Publications',
      contact: 'Contact'
    },
    home: {
      welcome: 'Welcome to My Academic Portfolio',
      intro: 'I am a researcher focusing on...'
    },
    research: {
      title: 'Research Interests',
      areas: 'Research Areas'
    },
    publications: {
      title: 'Publications',
      journal: 'Journal Articles',
      conference: 'Conference Papers'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      research: '研究',
      publications: '发表',
      contact: '联系'
    },
    home: {
      welcome: '欢迎访问我的学术主页',
      intro: '我是一名专注于...'
    },
    research: {
      title: '研究方向',
      areas: '研究领域'
    },
    publications: {
      title: '发表论文',
      journal: '期刊论文',
      conference: '会议论文'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages
}) 