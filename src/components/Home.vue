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
            <div>{{ t('profile.phone') }}</div>
            <div>{{ t('profile.email') }}</div>
            <div>{{ t('profile.wechat') }}</div>
            <a :href="'https://' + t('profile.github')" target="_blank" rel="noopener noreferrer">{{ t('profile.github') }}</a>
          </div>
        </div>
      </aside>

      <div class="hero-copy">
        <div class="eyebrow">{{ t('profile.eyebrow') }}</div>
        <h1>{{ t('profile.headline') }}</h1>
        <p class="lead">{{ t('profile.greeting') }}</p>
        <div class="hero-actions">
          <router-link to="/projects" class="button-primary">{{ t('nav.projects') }}</router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.interests') }}</h2>
        <span>{{ t('sections.interestsNote') }}</span>
      </div>
      <div class="interest-grid">
        <article v-for="(interest, index) in interestIndexes" :key="interest" class="interest-card">
          <div class="interest-index">0{{ index + 1 }}</div>
          <h3>{{ t('interests.' + interest + '.title') }}</h3>
          <p>{{ t('interests.' + interest + '.description') }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.experience') }}</h2>
        <span>{{ t('sections.experienceNote') }}</span>
      </div>
      <div class="timeline">
        <article v-for="index in experienceIndexes" :key="index" class="timeline-item timeline-item-detailed">
          <div class="timeline-date">{{ t('resume.experience.' + index + '.period') }}</div>
          <div>
            <h3 class="timeline-company">{{ t('resume.experience.' + index + '.company') }}</h3>
            <div class="timeline-role">{{ t('resume.experience.' + index + '.role') }} · {{ t('resume.experience.' + index + '.location') }}</div>
            <ul class="detail-list">
              <li v-for="bullet in experienceBulletCounts[index]" :key="bullet">{{ t('resume.experience.' + index + '.bullets.' + bullet) }}</li>
            </ul>
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
        <article v-for="index in featuredProjectIndexes" :key="index" class="project-card">
          <div class="eyebrow">0{{ index + 1 }}</div>
          <h3>{{ t('resume.projects.' + index + '.title') }}</h3>
          <div class="project-meta">{{ t('resume.projects.' + index + '.meta') }}</div>
          <p>{{ t('resume.projects.' + index + '.description') }}</p>
        </article>
      </div>
    </section>

    <section class="section split-section">
      <div>
        <div class="section-heading">
          <h2>{{ t('sections.education') }}</h2>
        </div>
        <div class="education-row">
          <div>
            <h3>{{ t('resume.education.school') }}</h3>
            <div class="timeline-role">{{ t('resume.education.degree') }}</div>
          </div>
          <div class="timeline-date">{{ t('resume.education.period') }}<br>{{ t('resume.education.location') }}</div>
        </div>
      </div>
      <div>
        <div class="section-heading">
          <h2>{{ t('sections.skills') }}</h2>
        </div>
        <div class="skills-list">
          <div v-for="index in skillIndexes" :key="index" class="skill-row">
            <strong>{{ t('resume.skills.' + index + '.label') }}</strong>
            <span>{{ t('resume.skills.' + index + '.value') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2>{{ t('sections.contributions') }}</h2>
        <span>{{ t('sections.contributionsNote') }}</span>
      </div>
      <div class="contribution-list">
        <article v-for="index in contributionIndexes" :key="index" class="contribution-item">
          <strong>{{ t('resume.contributions.' + index + '.title') }}</strong>
          <span>{{ t('resume.contributions.' + index + '.description') }}</span>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const interestIndexes = ['evaluation', 'agents', 'products']
const experienceIndexes = [0, 1, 2, 3]
const experienceBulletCounts = [5, 4, 2, 2]
const featuredProjectIndexes = [0, 1, 2, 3]
const skillIndexes = [0, 1, 2, 3, 4]
const contributionIndexes = [0, 1, 2, 3, 4]
</script>

