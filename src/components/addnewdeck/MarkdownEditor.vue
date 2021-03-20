<template>
    <div class="container">
        <markdown-editor theme="success"></markdown-editor>
    </div>
</template>


<script>

import 'v-markdown-editor/dist/v-markdown-editor.css';

import Vue from 'vue'
import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);

export default class MarkdownEditor extends Vue {

    data() {
        return {
            // default options, see more options at: http://codemirror.net/doc/manual.html#config
            options: {                   
                 lineNumbers: true,
                 styleActiveLine: true,
                 styleSelectedText: true,
                 lineWrapping: true,
                 indentWithTabs: true,
                 tabSize: 2,
                 indentUnit: 2,
                 theme: 'secondary'
            }

        }

    }

}

</script>
