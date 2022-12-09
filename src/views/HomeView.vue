<template>
  <main >
    <TopNav :user="user"/>
  <div class="p-5">
    <div class="text-center lg:text-left">
      <router-link
        to="/create"
        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Create ToDo list
      </router-link>
    </div>

    <section class="flex flex-col justify-center items-center">
      <h3 class="p-3 text-xl">Your TODO lists</h3>
      <div class="container flex justify-around">    
          <div id="cards" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" 
              v-for="list in lists" :event="list" :key="list.id" >
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{list.Title}}
                  </h5>
              </a>
              <router-link to="/create" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </router-link>
          </div>
      </div>
          
    </section>
    
  </div>
  </main>
  
</template>

<script >
import TopNav  from '../components/navigation.vue';
import  cards from '../ListServer';

export default {
    name: 'cards',
    data () {
      return {
        listId: '',
        list: {},
        lists: [
          {Title: ''}
        ],

      }
    },
    mounted() {
      // console.log("werk dit?");
      this.UserId = localStorage.getItem('userid');
      this.lists = cards.getAll(2);
    },
    methods: {
        List() {
          // this.listId = cards.get();
          localStorage.setItem('listId', this.listId);
        }
    },
    components: {
      TopNav
    }
}
</script>