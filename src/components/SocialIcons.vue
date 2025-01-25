<template>
  <div class="flex justify-center space-x-6 my-6">
    <!-- 中文社交媒体 -->
    <template v-if="locale === 'zh'">
      <!-- 知乎 -->
      <a href="https://www.zhihu.com/people/yourusername" target="_blank" rel="noopener noreferrer"
         class="social-icon-link">
        <div class="icon-wrapper">
          <img src="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png"
               alt="知乎" width="24" height="24" />
        </div>
      </a>

      <!-- 小红书 -->
      <a href="https://www.xiaohongshu.com/user/profile/6356735c000000001802de6c" target="_blank" rel="noopener noreferrer"
         class="social-icon-link">
        <div class="icon-wrapper">
          <img src="https://www.xiaohongshu.com/favicon.ico"
               alt="小红书" width="24" height="24" />
        </div>
      </a>

      <!-- 微博 -->
      <a href="https://weibo.com/yourusername" target="_blank" rel="noopener noreferrer"
         class="social-icon-link">
        <div class="icon-wrapper">
          <img src="https://weibo.com/favicon.ico"
               alt="微博" width="24" height="24" />
        </div>
      </a>
    </template>

    <!-- 英文社交媒体 -->
    <template v-else>
      <!-- GitHub -->
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
         class="social-icon-link">
        <div class="icon-wrapper">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
               alt="GitHub" width="24" height="24" />
        </div>
      </a>
      
      <!-- Twitter/X -->
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
         class="social-icon-link">
        <div class="icon-wrapper">
          <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png"
               alt="Twitter/X" width="24" height="24" />
        </div>
      </a>

      <!-- LinkedIn -->
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
         class="social-icon-link">
        <div class="icon-wrapper">
          <img src="https://static.licdn.com/sc/h/eahiplrwoq61f4uan012ia17i"
               alt="LinkedIn" width="24" height="24" />
        </div>
      </a>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<style scoped>
.social-icon-link {
  @apply transition-transform duration-300;
}

.social-icon-link:hover {
  @apply transform scale-110;
}

.icon-wrapper {
  @apply rounded-xl p-2.5 bg-white/90 backdrop-blur-sm relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.1),
    0 4px 8px rgba(0,0,0,0.05),
    inset 0 1px 1px rgba(255,255,255,0.9),
    inset 0 -1px 1px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.icon-wrapper::before {
  content: '';
  @apply absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300;
  background: radial-gradient(circle at 50% 0%, 
              rgba(255,255,255,0.3) 0%, 
              rgba(255,255,255,0) 75%);
}

.social-icon-link:hover .icon-wrapper {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.05),
    inset 0 1px 1px rgba(255,255,255,0.9),
    inset 0 -1px 1px rgba(0,0,0,0.1);
}

.social-icon-link:hover .icon-wrapper::before {
  opacity: 1;
}

.icon-wrapper img {
  @apply w-full h-full object-contain;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
}
</style> 