

<template>
  <header>
    <div class="d-flex gap-1 align-items-center">
      <div class="langs">
        <div class="btn-group">
          <button type="button" class="dropdown-toggle bi bi-translate m-0 bg-transparent border-0" 
              data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul class="dropdown-menu bsdbwidth dropdown-menu-end p-0 m-0 bg-transparent border-0 animate slideIn">
              <li v-for="lang in availableLocales" :key="lang">
                <a class="dropdown-item text-end" href="#" @click="changing(lang)">{{lang}}</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="h-100 p-2">
        <span>{{t("header.initBtn1")}}</span>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const {t} = useI18n()
const {availableLocales, locale}  = useI18n()  
const changing = (la)=>{
        locale.value=la
    }
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
