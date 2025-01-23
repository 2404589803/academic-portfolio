<template>
  <div class="flex justify-center space-x-4 my-6">
    <!-- GitHub -->
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
       class="social-icon-link">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
           alt="GitHub" width="24" height="24" />
    </a>
    
    <!-- Twitter/X -->
    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
       class="social-icon-link">
      <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png"
           alt="Twitter/X" width="24" height="24" />
    </a>

    <!-- 知乎 -->
    <a href="https://www.zhihu.com/people/yourusername" target="_blank" rel="noopener noreferrer"
       class="social-icon-link">
      <img src="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png"
           alt="知乎" width="24" height="24" />
    </a>

    <!-- 小红书 -->
    <a href="https://www.xiaohongshu.com/user/profile/6356735c000000001802de6c" target="_blank" rel="noopener noreferrer"
       class="social-icon-link">
      <img src="https://www.xiaohongshu.com/favicon.ico"
           alt="小红书" width="24" height="24" />
    </a>

    <!-- 微博 -->
    <a href="https://weibo.com/yourusername" target="_blank" rel="noopener noreferrer"
       class="social-icon-link">
      <img src="https://weibo.com/favicon.ico"
           alt="微博" width="24" height="24" />
    </a>

    <!-- LinkedIn -->
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
       class="social-icon-link">
      <img src="https://static.licdn.com/sc/h/eahiplrwoq61f4uan012ia17i"
           alt="LinkedIn" width="24" height="24" />
    </a>
  </div>
</template>

<style scoped>
.social-icon-link {
  @apply text-academic-secondary hover:text-academic-accent transition-colors duration-300;
}

.social-icon-link img {
  @apply opacity-80 hover:opacity-100 transition-opacity duration-300;
}
</style> 