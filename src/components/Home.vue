<template>
  <div class="page-container">
    <section class="hero-grid">
      <aside class="profile-aside">
        <img src="/0007.jpg" :alt="t('profile.name')" class="portrait" />
        <div>
          <h2 class="profile-name">{{ t('profile.name') }}</h2>
          <p class="profile-role">{{ t('profile.roles') }}</p>
          <div class="profile-meta">
            <div>{{ t('profile.affiliation') }}</div>
            <div>{{ t('profile.location') }}</div>
            <div>{{ t('profile.email') }}</div>
          </div>
        </div>
      </aside>

      <div class="hero-copy">
        <div class="eyebrow">{{ t('profile.eyebrow') }}</div>
        <h1>{{ t('profile.headline') }}</h1>
        <p class="lead">{{ t('profile.greeting') }}</p>
        <div class="hero-actions">
          <router-link to="/projects" class="button-primary">{{ t('nav.projects') }}</router-link>
          <a href="https://github.com/LC1332" target="_blank" rel="noopener noreferrer" class="button-secondary">{{ t('profile.contact') }} ↗</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.interests') }}</h2>
        <span>{{ t('sections.interestsNote') }}</span>
      </div>
      <div class="interest-grid">
        <article v-for="(interest, index) in interests" :key="interest.title" class="interest-card">
          <div class="interest-index">0{{ index + 1 }}</div>
          <h3>{{ t(interest.title) }}</h3>
          <p>{{ t(interest.description) }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.experience') }}</h2>
        <span>{{ t('sections.experienceNote') }}</span>
      </div>
      <div class="timeline">
        <article v-for="item in experience" :key="item.company" class="timeline-item">
          <div class="timeline-date">{{ t(item.time) }}</div>
          <div>
            <h3 class="timeline-company">{{ t(item.company) }}</h3>
            <div class="timeline-role">{{ t(item.role) }}</div>
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.projects') }}</h2>
        <router-link to="/projects" class="back-link">{{ t('nav.projects') }} →</router-link>
      </div>
      <div class="project-grid">
        <article class="project-card">
          <h3>{{ t('projects.zero_haruhi.title') }}</h3>
          <p>{{ t('projects.zero_haruhi.description') }}</p>
          <a href="https://github.com/LC1332/Zero-Haruhi" target="_blank" rel="noopener noreferrer">{{ t('projects.viewRepo') }} ↗</a>
        </article>
        <article class="project-card">
          <h3>{{ t('projects.face_extract.title') }}</h3>
          <p>{{ t('projects.face_extract.description') }}</p>
          <a href="https://github.com/LC1332/smooth-face-extract" target="_blank" rel="noopener noreferrer">{{ t('projects.viewRepo') }} ↗</a>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.contributions') }}</h2>
        <span>{{ t('sections.contributionsNote') }}</span>
      </div>
      <p class="quote">{{ t('profile.community') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const interests = [
  { title: 'interests.llm.title', description: 'interests.llm.description' },
  { title: 'interests.product.title', description: 'interests.product.description' },
  { title: 'interests.openSource.title', description: 'interests.openSource.description' },
]

const experience = [
  { time: 'experience.zhipu.time', company: 'experience.zhipu.company', role: 'experience.zhipu.role' },
  { time: 'experience.imaginix.time', company: 'experience.imaginix.company', role: 'experience.imaginix.role' },
  { time: 'experience.metadigits.time', company: 'experience.metadigits.company', role: 'experience.metadigits.role' },
]
</script>

