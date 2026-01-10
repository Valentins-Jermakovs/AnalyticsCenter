/*
    News item structure:
    {
        id: 'uuid',
        title: 'string',
        description: 'string',
        content: 'string',
        image: 'url',
        createdAt: 'ISO-date'
    }
*/

// import pinia
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {

    // state - stores data
    state: () => ({
        news: [
            {
                id: '550e8400-e29b-41d4-a716-446655440000',
                title: 'Jaunums par projektu',
                description: 'Īss apraksts par jaunumu vai izmaiņām projektā.',
                content: 'Pilns jaunuma teksts par projektu ar detaļām.',
                image: 'https://placehold.co/600x400',
                createdAt: '2026-01-01'
            },
            {
                id: '550e8400-e29b-41d4-a716-446655440001',
                title: 'Sistēmas atjauninājums',
                description: 'Informācija par jauno funkcionalitāti.',
                content: 'Detalizēts apraksts par sistēmas uzlabojumiem.',
                image: 'https://placehold.co/600x400',
                createdAt: '2026-01-02'
            },
            {
                id: '550e8400-e29b-41d4-a716-446655440002',
                title: 'Izmaiņas platformā',
                description: 'Platformas izmaiņu kopsavilkums.',
                content: 'Garš teksts par platformas arhitektūras izmaiņām.',
                image: 'https://placehold.co/600x400',
                createdAt: '2026-01-03'
            }
        ],
        search: ''
    }),
    // getters - computes derived state, returns data
    getters: {
        filteredNews() {
            if (!this.search) return this.news
            return this.news.filter(n =>
                n.title.toLowerCase().includes(this.search.toLowerCase())
            )
        },
        getById: (state) => {
            return (id) => state.news.find(n => n.id === id)
        }
    },
    // actions - modifies state
    actions: {
        setSearch(value) {
            this.search = value
        },

        addNews(item) {
            this.news.unshift(item)
        },

        removeNews(id) {
            this.news = this.news.filter(n => n.id !== id)
        }
    }
})