<template>
  <div class="page-container">
    <section class="page-intro">
      <div class="eyebrow">{{ t('sections.projects') }}</div>
      <h1>{{ t('sections.projects') }}</h1>
      <p>{{ t('profile.community') }}</p>
      <router-link to="/" class="back-link">← {{ t('nav.back') }}</router-link>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.projects') }}</h2>
        <span>{{ t('projectsCount') }}</span>
      </div>
      <div class="project-grid project-grid-wide">
        <article v-for="index in projectIndexes" :key="index" class="project-card project-card-detailed">
          <div class="eyebrow">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3>{{ t('resume.projects.' + index + '.title') }}</h3>
          <div class="project-meta">{{ t('resume.projects.' + index + '.meta') }}</div>
          <p>{{ t('resume.projects.' + index + '.description') }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.contributions') }}</h2>
        <span>{{ t('sections.contributionsNote') }}</span>
      </div>
      <div class="contribution-list">
        <article v-for="index in contributionIndexes" :key="index" class="contribution-item">
          <div>
            <strong>{{ t('resume.contributions.' + index + '.title') }}</strong>
            <div class="timeline-role">{{ t('resume.contributions.' + index + '.description') }}</div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const projectIndexes = Array.from({ length: 17 }, (_, index) => index)
const contributionIndexes = [0, 1, 2, 3, 4]
</script>

