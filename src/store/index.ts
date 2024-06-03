import { createStore } from 'vuex';
import { State, Page } from '@/types'; 

export default createStore<State>({
  state: {
    pages: []
  },
  getters: {
    getPages(state): Page[] {
      return state.pages;
    },
    getPageById: (state) => (id: string): Page | undefined => {
      return state.pages.find(page => page.idPage === id);
    }
  },
  mutations: {
    addPage(state, page: Page) {
      state.pages.push(page);
    },
    updatePage(state, updatePage: Page) {
      const indexPage = state.pages.findIndex(page => 
        page.idPage === updatePage.idPage);
      
      if (indexPage !== -1) {
        state.pages.splice(indexPage, 1, updatePage);
      }
    },
    deletePage(state, index: number) {
      state.pages.splice(index, 1)
    }
  }
});