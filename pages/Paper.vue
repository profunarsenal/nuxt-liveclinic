<template lang="pug">
    .container
        section-article(
            v-if="article"
            :article="article"
        )
        .error-message(v-else) {{ $t("articleError") }}

        articles-slider(:articles="otherArticles")
        section-contacts
</template>

<script>
import { mapGetters } from 'vuex'
import SectionArticle from '~/components/pagePaper/SectionArticle'
import SectionContacts from '~/components/pageContacts/SectionContacts'
import ArticlesSlider from '~/components/pagePaper/ArticlesSlider'

export default {
    name: 'Paper',

    components: {
        SectionArticle,
        SectionContacts,
        ArticlesSlider
    },

    async fetch ({ store, $service }) {
        await store.dispatch('cache/cacheRequest', {
            key: 'articles',
            request: () => $service.articles.getArticles()
        })
    },

    head () {
        return {
            title: this.article?.title || this.$t('article')
        }
    },

    computed: {
        ...mapGetters('cache', ['articles']),

        otherArticles () {
            return this.articles.filter(item => item.id !== +this.$route.query.id)
        },

        article () {
            return this.articles.find(item => item.id === +this.$route.query.id)
        }
    },

    watch: {
        article () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>