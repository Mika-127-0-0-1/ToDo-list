<script>
import {ref, onMounted, computed, watch} from 'vue'
import  TopNav  from '../components/navigation.vue'

import  impTodos from '../ToDoServer';
import  file from '../FileServer';
import  list from '../ListServer';

// watch(todos, newVal => {
//     localStorage.setItem('todos', JSON.stringify(newVal))
// }, {deep: true})

// watch(title, (newVal) => {
//     localStorage.setItem('title', newVal)
// })

// onMounted(() => {
//     title.value = localStorage.getItem('title') || ''
//     todos.value = JSON.parse(localStorage.getItem('todos')) || []
// })

export default {
    name: 'todos',
    data() {
        return {
            todos: [],
            title: '',
            todo: '',
            file: '',
            userId: '',
            listId: ''
        }
    },
    // onMounted: {
    //         // this.userId = localStorage.getItem('userId');
    //         this.userId = 'userId';
    //         this.listId = localStorage.getItem('listId');
    //         console.log(this.userId);
    //         impTodos.getAll(this.listId);
    //     },
    methods: {
        
        addTodo() {
            // if (todo.trim() === "") {
            //     return
            // }
            const payload = {
              Item: this.todo,
              done: false
            }
            impTodos.create(payload);
            // this.$router.push('/create');
        },
        removeTodo() {
            impTodos.delete(0);
        },
        savefile() {
            this.file = file.save();
        },
        saveTodoList() {
            const payload = {
              Title: this.title,
              Filename: this.file
            }

            list.create(payload);
        }
    },
    components: {
      TopNav
    }
}

</script>

<template>
    <main>
        <TopNav />
        <section>
            <form @submit.prevent="addTodo" 
                    class="flex flex-col items-center">
                <h2 class=" p-1">
                <input 
                class="form-control block px-2 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center"
                v-model="title" 
                type="text" 
                placeholder="Title here"></h2>    
                <h4>What is on your todo list?</h4>
                <input 
                 class="form-control block px-2 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 type="text" v-model="todo">
                <button type="submit" class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >Add todo</button>
            </form>
        </section>

        <section class="flex flex-col justify-center items-center">
            <h3 class="p-3 text-xl">TODO list</h3>
            <div >
                <div class="flex flex-row w-96 px-3 py-1 justify-between border-2" v-for="todo in todos" :key="todo">
                    <label>
                        <input type="checkbox" v-model="todo.done" />
                        
                    </label>
                    <div>
                        <input type="text" v-model="todo.content">
                    </div>
                    <div>
                        <button class="p-1 rounded bg-red-600 text-center text-white" @click="removeTodo(todo)">Delete</button>
                    </div>
                </div>
            </div>
            <div>
                <input type="file">

                <button
                @click="Savelist" 
                class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3 my-3">
                Save</button>
            </div>
            <button
                @click="Emaillist" 
                class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3 my-3">
                Email</button>
        </section>
        
    </main>
</template>