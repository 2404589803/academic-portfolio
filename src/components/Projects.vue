<template>
  <div class="page-container">
    <section class="page-intro">
      <div class="eyebrow">{{ t('projects.eyebrow') }}</div>
      <h1>{{ t('sections.projects') }}</h1>
      <p>{{ t('projects.intro') }}</p>
      <router-link to="/" class="back-link">← {{ t('nav.back') }}</router-link>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('projects.selected') }}</h2>
        <span>2023—{{ new Date().getFullYear() }}</span>
      </div>
      <div class="project-grid">
        <article class="project-card">
          <div class="eyebrow">01 · OPEN SOURCE</div>
          <h3>{{ t('projects.zero_haruhi.title') }}</h3>
          <p>{{ t('projects.zero_haruhi.description') }}</p>
          <a href="https://github.com/LC1332/Zero-Haruhi" target="_blank" rel="noopener noreferrer">{{ t('projects.viewRepo') }} ↗</a>
        </article>
        <article class="project-card">
          <div class="eyebrow">02 · COMPUTER VISION</div>
          <h3>{{ t('projects.face_extract.title') }}</h3>
          <p>{{ t('projects.face_extract.description') }}</p>
          <a href="https://github.com/LC1332/smooth-face-extract" target="_blank" rel="noopener noreferrer">{{ t('projects.viewRepo') }} ↗</a>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.contributions') }}</h2>
        <span>{{ t('projects.communityNote') }}</span>
      </div>
      <div class="contribution-list">
        <article class="contribution-item">
          <div>
            <strong>{{ t('contributions.huggingface.title') }}</strong>
            <div class="timeline-role">{{ t('contributions.huggingface.role') }}</div>
          </div>
          <a class="back-link" href="https://github.com/huggingface/huggingface_hub/pull/1916" target="_blank" rel="noopener noreferrer">PR #1916 ↗</a>
        </article>
        <article class="contribution-item">
          <div>
            <strong>{{ t('contributions.blog.title') }}</strong>
            <div class="timeline-role">{{ t('contributions.blog.items') }}</div>
          </div>
          <a class="back-link" href="https://github.com/huggingface-cn/hf-blog-translation/pull/140" target="_blank" rel="noopener noreferrer">{{ t('projects.viewRepo') }} ↗</a>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

