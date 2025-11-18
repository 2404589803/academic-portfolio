<template>
  <div class="flex justify-center space-x-4 my-6">
    <!-- 中文社交媒体 -->
    <template v-if="locale === 'zh'">
      <!-- 知乎 -->
      <a href="https://www.zhihu.com/people/yourusername" target="_blank" rel="noopener noreferrer"
        class="social-icon-link group">
        <div class="icon-wrapper">
          <img src="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png" alt="知乎" width="20"
            height="20" />
        </div>
      </a>

      <!-- 小红书 -->
      <a href="https://www.xiaohongshu.com/user/profile/6356735c000000001802de6c" target="_blank"
        rel="noopener noreferrer" class="social-icon-link group">
        <div class="icon-wrapper">
          <img src="https://www.xiaohongshu.com/favicon.ico" alt="小红书" width="20" height="20" />
        </div>
      </a>

      <!-- 微博 -->
      <a href="https://weibo.com/yourusername" target="_blank" rel="noopener noreferrer" class="social-icon-link group">
        <div class="icon-wrapper">
          <img src="https://weibo.com/favicon.ico" alt="微博" width="20" height="20" />
        </div>
      </a>
    </template>

    <!-- 英文社交媒体 -->
    <template v-else>
      <!-- GitHub -->
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
        class="social-icon-link group">
        <div class="icon-wrapper">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="20"
            height="20" class="invert opacity-80 group-hover:opacity-100" />
        </div>
      </a>

      <!-- Twitter/X -->
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
        class="social-icon-link group">
        <div class="icon-wrapper">
          <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png" alt="Twitter/X" width="20"
            height="20" />
        </div>
      </a>

      <!-- LinkedIn -->
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
        class="social-icon-link group">
        <div class="icon-wrapper">
          <img src="https://static.licdn.com/sc/h/eahiplrwoq61f4uan012ia17i" alt="LinkedIn" width="20" height="20" />
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
.icon-wrapper {
  @apply p-2 rounded bg-editor-sidebar border border-editor-line transition-all duration-200;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon-link:hover .icon-wrapper {
  @apply bg-editor-active border-editor-keyword;
  transform: translateY(-2px);
}

.icon-wrapper img {
  @apply w-full h-full object-contain;
}

.invert {
  filter: invert(1);
}
</style>