<template >
    <header class="w-full bg-slate-400 relative z-20" >
        <div class="flex container mx-auto max-w-4xl h-14 justify-between text-xs md:text-xs">
            <div @click="gotoHome" class="h-full flex items-center">
                    <div class="text-2xl px-2"><b>ToDo Lists</b></div>
            </div>
            <div class="flex items-center">
                <div class="text-lg">
                    {{ username }}
                </div>
                    <button 
                        class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3 my-3"
                        @click='logout'>
                        <!-- @click.prevent="logout" -->
                        Logout
                    </button>
            </div>
        </div>
    </header>
    
</template>

<script>
// import { RouterLink } from 'vue-router';

export default {
    props:{ username: String},
    data() {
        return {
            
        }
    },
    methods: {
        gotoHome() {
            this.$router.push('/home');
        },
        logout() {
            this.$router.push('/');
        }
    }

}


</script>