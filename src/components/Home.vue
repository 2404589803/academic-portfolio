<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Neural Network Background -->
    <NeuralNetwork />
    
    <!-- AI Grid Background -->
    <div class="absolute inset-0 bg-grid opacity-5"></div>
    
    <!-- Glowing Orbs -->
    <div class="glow-orb-1"></div>
    <div class="glow-orb-2"></div>

    <div class="page-container py-8 relative z-10">
      <article class="prose prose-lg mx-auto">
        <!-- 个人简介卡片 -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300 text-center">
          <div class="card-glow"></div>
          <div class="avatar-container mb-6">
            <img src="/0007.jpg" alt="肖君枫的头像" class="avatar-image" />
          </div>
          <h1 class="academic-title text-4xl mb-2">肖君枫</h1>
          <h2 class="text-2xl mb-4 text-academic-secondary font-light">学术主页</h2>
          <!-- 社交媒体图标 -->
          <SocialIcons />
          <p class="mt-6 text-academic-secondary">
            AI全栈开发工程师 / AI 产品经理 / Prompt 工程师 / 内容编辑
          </p>
        </div>

        <!-- 个人简介卡片 -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 text-center">个人简介</h2>
          <div class="text-academic-secondary space-y-4 text-justify leading-relaxed">
            <p>
              大家好！我是肖君枫，目前是一名AI全栈开发工程师和产品经理。我专注于人工智能领域，尤其是大语言模型的应用开发和系统架构设计。在过去的一年里，我参与了多个AI项目的全栈开发，包括教育科技和创意写作等领域。
            </p>
            <p>
              我擅长全栈开发、产品设计、用户体验优化和AI系统的prompt工程，致力于将复杂的AI技术转化为直观、易用的产品。我对AI的热情源于其改变世界的潜力，特别是在教育和创意领域的应用。
            </p>
            <p>
              在工作之余，我积极参与开源社区，乐于分享AI相关的技术见解和实践经验。我相信AI技术的发展应该以人为本，为社会创造真正的价值。
            </p>
          </div>
        </div>

        <!-- 实习经历 -->
        <div class="academic-card hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 text-center">实习经历</h2>
          <ul class="space-y-6">
            <li class="experience-item">
              <div class="time-badge">2023年7月 - 2023年9月</div>
              <div class="company-name">MetaDigits.AI / 上海未来元数软件开发有限公司</div>
              <div class="project-name">MathGPTPro 项目</div>
              <div class="role">AI产品经理（远程）</div>
            </li>
            <li class="experience-item">
              <div class="time-badge">2024年4月 - 2024年5月</div>
              <div class="company-name">Imaginix Inc. / 想象力科技有限公司</div>
              <div class="location">📍 美国加利福尼亚州圣何塞南九街</div>
              <div class="project-name">kimi.ai / Toonie.AI</div>
              <div class="role">Prompt工程师（远程）</div>
            </li>
            <li class="experience-item">
              <div class="time-badge">2024年5月13日 - 2024年8月20日</div>
              <div class="company-name">北京智谱华章（智谱AI）科技有限公司</div>
              <div class="role">内容编辑实习生</div>
            </li>
          </ul>
        </div>

        <!-- 导航按钮 -->
        <div class="mt-8 text-center">
          <router-link to="/projects" class="inline-flex items-center px-6 py-3 bg-academic-accent text-white rounded-full hover:bg-academic-secondary transition-colors duration-300">
            查看我的项目
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import NeuralNetwork from './NeuralNetwork.vue'
import SocialIcons from './SocialIcons.vue'
</script>

<style scoped>
.prose {
  max-width: 100ch;
}

/* 背景网格 */
.bg-grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}

/* 发光球体 */
.glow-orb-1, .glow-orb-2 {
  @apply absolute rounded-full blur-3xl opacity-10;
  background: radial-gradient(circle, rgba(0, 102, 204, 0.3) 0%, rgba(0, 102, 204, 0) 70%);
}

.glow-orb-1 {
  @apply top-20 -left-20;
  width: 400px;
  height: 400px;
}

.glow-orb-2 {
  @apply bottom-20 -right-20;
  width: 300px;
  height: 300px;
}

/* 卡片样式 */
.academic-card {
  @apply relative p-6 rounded-2xl bg-white border border-gray-100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.card-glow {
  @apply absolute inset-0 opacity-0 transition-opacity duration-300 rounded-2xl;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(0, 102, 204, 0.08) 0%, 
              transparent 60%);
}

.academic-card:hover .card-glow {
  opacity: 1;
}

/* 时间标签 */
.time-badge {
  @apply inline-block px-3 py-1 rounded-full text-sm font-medium bg-academic-paper text-academic-secondary mb-2;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* 公司名称 */
.company-name {
  @apply text-lg font-semibold text-academic-primary mb-1;
}

/* 项目名称 */
.project-name {
  @apply text-academic-secondary mb-1;
}

/* 角色 */
.role {
  @apply text-academic-accent italic;
}

/* 位置标签 */
.location {
  @apply text-sm text-academic-secondary mb-1;
}

/* 经验项样式 */
.experience-item {
  @apply p-4 rounded-lg bg-academic-paper transition-all duration-300;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.experience-item:hover {
  @apply transform scale-[1.02] shadow-lg;
}

/* 头像样式 */
.avatar-container {
  @apply mx-auto relative;
  width: 180px;
  height: 180px;
}

.avatar-image {
  @apply w-full h-full object-cover rounded-full shadow-lg;
  border: 3px solid rgba(255, 255, 255, 0.8);
}
</style> 