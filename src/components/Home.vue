<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
    <!-- Neural Network Background -->
    <NeuralNetwork />
    
    <!-- AI Logos -->
    <AiLogos />
    
    <!-- AI Grid Background -->
    <div class="absolute inset-0 bg-grid opacity-10"></div>
    
    <!-- Glowing Orbs -->
    <div class="glow-orb-1"></div>
    <div class="glow-orb-2"></div>

    <div class="page-container py-8 relative z-10">
      <article class="prose prose-lg mx-auto prose-invert">
        <!-- Title Section with Glowing Effect -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300 text-center">
          <div class="card-glow"></div>
          <h1 class="academic-title text-4xl mb-2 gradient-text">肖君枫</h1>
          <h2 class="text-2xl mb-6 gradient-text font-light">学术主页</h2>
        </div>

        <!-- 开发项目 -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 gradient-text text-center">开发项目</h2>
          <ul class="space-y-4">
            <li class="project-item">
              <strong class="text-blue-400">Zero-Haruhi</strong>
              <span class="text-blue-300">【凉宫春日】</span>
              <div class="mt-2">
                <a href="https://github.com/LC1332/Zero-Haruhi" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">GitHub 仓库</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
            <li class="project-item">
              <strong class="text-blue-400">smooth-face-extract</strong>
              <div class="text-sm text-blue-200 mt-1">一个用于从视频中提取人脸的多功能工具，用作 SD 训练的辅助工具</div>
              <div class="mt-2">
                <a href="https://github.com/LC1332/smooth-face-extract" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">GitHub 仓库</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 开源社区贡献 -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 gradient-text text-center">开源社区贡献</h2>
          <ul class="space-y-4">
            <li class="contribution-item">
              <div class="flex items-center">
                <span class="text-blue-400 mr-2">🤗</span>
                <strong class="text-blue-300">huggingface Hub Python Library</strong>
              </div>
              <div class="text-blue-200 ml-6">中文翻译贡献者</div>
              <div class="mt-2 ml-6">
                <a href="https://github.com/huggingface/huggingface_hub/pull/1916" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">GitHub PR</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
            <li class="contribution-item">
              <div class="flex items-center">
                <span class="text-blue-400 mr-2">🤗</span>
                <strong class="text-blue-300">Hugging Face 博客翻译系列</strong>
              </div>
              <ul class="ml-6 mt-2 space-y-2">
                <li class="text-blue-200">The Llama Hitchhiking Guide to Local LLMs</li>
                <li class="text-blue-200">Sentence Embeddings</li>
                <li class="text-blue-200">leaderboard-contextual</li>
                <li class="text-blue-200">websight</li>
                <li>
                  <a href="https://github.com/huggingface-cn/hf-blog-translation/pull/140" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="ai-link">
                    <span class="link-text">fine-video</span>
                    <span class="link-arrow">→</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="contribution-item">
              <div class="flex items-center">
                <span class="text-blue-400 mr-2">🐋</span>
                <strong class="text-blue-300">Datawhale X DeepModeling 教学比赛</strong>
              </div>
              <div class="text-blue-200 ml-6">"机器学习工作流" 贡献者</div>
              <div class="mt-2 ml-6">
                <a href="https://github.com/2404589803/My-datawhale-learning/blob/main/docs/AI4S_CUP52/ch01.md" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">GitHub 链接</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 实习经历 -->
        <div class="academic-card hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 gradient-text text-center">实习经历</h2>
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
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GlowEffect from './GlowEffect.vue'
import NeuralNetwork from './NeuralNetwork.vue'
import AiLogos from './AiLogos.vue'

const { t } = useI18n()
</script>

<style scoped>
.prose {
  max-width: 100ch;
}

/* 背景网格 */
.bg-grid {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
}

/* 发光球体 */
.glow-orb-1, .glow-orb-2 {
  @apply absolute rounded-full blur-3xl opacity-20;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0) 70%);
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

/* 神经网络线条 */
.neural-lines {
  @apply absolute inset-0 opacity-10;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 30m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' stroke='%234a90e2' fill='none'/%3E%3Cpath d='M30 10L30 50' stroke='%234a90e2' stroke-width='0.5'/%3E%3Cpath d='M10 30L50 30' stroke='%234a90e2' stroke-width='0.5'/%3E%3C/svg%3E");
}

/* 卡片样式 */
.academic-card {
  @apply relative p-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.card-glow {
  @apply absolute inset-0 opacity-0 transition-opacity duration-300;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(59, 130, 246, 0.15) 0%, 
              transparent 60%);
}

.academic-card:hover .card-glow {
  opacity: 1;
}

/* 渐变文字 */
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
}

/* AI链接样式 */
.ai-link {
  @apply inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-300;
}

.link-arrow {
  @apply transform transition-transform duration-300;
}

.ai-link:hover .link-arrow {
  @apply translate-x-1;
}

/* 时间标签 */
.time-badge {
  @apply inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 mb-2;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* 公司名称 */
.company-name {
  @apply text-lg font-semibold text-blue-200 mb-1;
}

/* 项目名称 */
.project-name {
  @apply text-blue-300 mb-1;
}

/* 角色 */
.role {
  @apply text-blue-400 italic;
}

/* 位置标签 */
.location {
  @apply text-sm text-blue-300 mb-1;
}

/* 项目和贡献项样式 */
.project-item, .contribution-item {
  @apply p-4 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.project-item:hover, .contribution-item:hover {
  @apply bg-white/10;
  border-color: rgba(59, 130, 246, 0.2);
}

/* 经验项样式 */
.experience-item {
  @apply p-4 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.experience-item:hover {
  @apply bg-white/10;
  border-color: rgba(59, 130, 246, 0.2);
}

/* 标题样式增强 */
.academic-title {
  @apply font-bold tracking-wide;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}
</style> 