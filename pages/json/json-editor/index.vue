<template>
    <div class="container has-text-left">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/json">JSON</nuxt-link>
                </li>
                <li class="is-active">
                    <nuxt-link to="/json/json-editor">JSON Editor</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="is-full">
            <div class="columns is-multiline is-gapless">
                <div class="column is-four-fifths">
                    <h1 class="title is-5">JSON Editor | JSON Validator | JSON Formatter | Beautifier</h1>
                </div>
                <div class="column has-text-right">
                    <b-field>
                        <p class="control">
                            <b-tooltip label="Decrease Indent">
                                <button class="button" @click="changeIndent('giam')">
                                    <b-icon pack="fa" icon="angle-double-left"></b-icon>
                                </button>
                            </b-tooltip>
                        </p>
                        <p class="control">
                            <b-tooltip label="Increase Indent">
                                <button class="button" @click="changeIndent('tang')">
                                    <b-icon pack="fa" icon="angle-double-right"></b-icon>
                                </button>
                            </b-tooltip>
                        </p>
                        <p class="control">
                            <b-tooltip label="Beautifier">
                                <button class="button" @click="format">
                                    <b-icon icon="format-align-left"></b-icon>
                                </button>
                            </b-tooltip>
                        </p>
                        <p class="control">
                            <b-tooltip label="Validator">
                                <button class="button" @click="format">
                                    <b-icon icon="check"></b-icon>
                                </button>
                            </b-tooltip>
                        </p>
                    </b-field>
                </div>
            </div>
            <div class="editor">
                <no-ssr placeholder="Loading...">
                    <codemirror v-model="code"
                                :options="cmOption"
                                @cursorActivity="onCmCursorActivity"
                                @ready="onCmReady"
                                @focus="onCmFocus"
                                @blur="onCmBlur">
                    </codemirror>
                </no-ssr>
            </div>
            <h4 class="title is-4 mtb-2 has-text-centered">Preview</h4>
            <div class="box mtb-2">
                <tree-view :data="jdata" :options="options"></tree-view>
            </div>
        </div>
        <div class="columns">
            <div class="column is-8">
                <div class="content">
                    <h4 class="title is-4 mtb-2">About</h4>
                    <p>In computing, JavaScript Object Notation or JSON is an open-standard file format that uses
                        human-readable text to transmit data objects consisting of attribute–value pairs and array data
                        types.</p>
                    <p>Json Editor was created by aiConverter.com to help developer make json easiest. You can format by
                        using <b>Json Formater</b>, <b>Json Beautifier</b> (click to
                        <b-icon icon="format-align-left"></b-icon>
                        )
                    </p>
                    <h2 class="title is-3">Json Editor features:</h2>
                    <ul>
                        <li><b>JSON Pretty Print</b> / Pretty JSON Tool</li>
                        <li>Minify/Compress your JSON.</li>
                        <li>Validate your JSON and help you to fix an error.</li>
                        <li>Once you have created JSON Data. You can download as a file or
                            save as link and Share.
                        </li>
                        <li>Beautify/Format your JSON.</li>
                        <li>Parse and Display your JSON in a tree view.</li>
                        <li>JSON Viewer works well on Windows, MAC, Chrome, and Firefox.</li>
                    </ul>
                    <h4 class="title is-4 mtb-2">Help</h4>
                    <b-table :data="data" :columns="columns"></b-table>
                    <p>Credit: <a href="http://codemirror.net/">@codemirror</a></p>
                </div>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    // theme css
    import 'codemirror/theme/monokai.css'
    import js_beautify from 'js-beautify'

    export default {
        name: "index",
        head() {
            return {
                title: "JSON Editor Online | JSON Formatter | JSON Beautifier | JSON Pretty",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'This is the best JSON Editor online that included JSON Formatter, JSON Beautifier, JSON Pretty Print'
                    }
                ]
            }
        },
        data() {
            return {
                code: "{\"widget\": { \"debug\": \"on\", \"window\": { \"title\": \"Sample Konfabulator Widget\", \"name\": \"main_window\", \"width\": 500, \"height\": 500 }, \"image\": { \"src\": \"Images/Sun.png\", \"name\": \"sun1\", \"hOffset\": 250, \"vOffset\": 250, \"alignment\": \"center\" }, \"text\": { \"data\": \"Click Here\", \"size\": 36, \"style\": \"bold\", \"name\": \"text1\", \"hOffset\": 250, \"vOffset\": 100, \"alignment\": \"center\", \"onMouseUp\": \"sun1.opacity = (sun1.opacity / 100) * 90;\" } }}",
                cmOption: {
                    smartIndent: true,
                    indentWithTabs: true,
                    tabSize: 2,
                    styleActiveLine: true,
                    lineNumbers: true,
                    styleSelectedText: true,
                    line: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
                    mode: 'text/javascript',
                    hintOptions: {
                        completeSingle: false
                    },
                    keyMap: "sublime",
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    theme: "monokai",
                    extraKeys: {"Ctrl": "autocomplete"}
                },
                options: {
                    maxDepth: 4,
                    rootObjectKey: "root",
                    modifiable: false
                },
                columns: [
                    {
                        field: 'key',
                        label: 'Key',
                        width: '40%',
                    },
                    {
                        field: 'des',
                        label: 'Description',
                    }
                ],
            }

        },

        computed: {
            jdata() {
                try {
                    return JSON.parse(this.code)
                }
                catch (e) {
                    console.log(e)
                    return {sample: "This is sample"}
                }
            },

            data() {
                return [{
                    "key": "Ctrl-A (PC), Cmd-A (Mac)",
                    "des": "Select the whole content of the editor."
                }, {
                    "key": "ESC",
                    "des": "When multiple selections are present, this deselects all but the primary selection."
                }, {
                    "key": "Ctrl-D (PC), Cmd-D (Mac)",
                    "des": "Deletes the whole line under the cursor, including newline at the end."
                }, {
                    "key": "Ctrl-K (Mac)",
                    "des": "Emacs-style line killing. Deletes the part of the line after the cursor. If that consists only of whitespace, the newline at the end of the line is also deleted."
                }, {
                    "key": "Cmd-Backspace (Mac)",
                    "des": "Delete the part of the line from the left side of the visual line the cursor is on to the cursor."
                }, {
                    "key": "Cmd-Delete (Mac)",
                    "des": "Delete the part of the line from the cursor to the right side of the visual line the cursor is on."
                }, {
                    "key": "Ctrl-Z (PC), Cmd-Z (Mac)",
                    "des": "Undo the last change. Note that, because browsers still don't make it possible for scripts to react to or customize the context menu, selecting undo (or redo) from the context menu in a CodeMirror instance does not work."
                }, {
                    "key": "Ctrl-Y (PC), Shift-Cmd-Z (Mac), Cmd-Y (Mac)",
                    "des": "Redo the last undone change."
                }, {
                    "key": "Ctrl-U (PC), Cmd-U (Mac)",
                    "des": "Undo the last change to the selection, or if there are no selection-only changes at the top of the history, undo the last change."
                }, {
                    "key": "Alt-U (PC), Shift-Cmd-U (Mac)",
                    "des": "Redo the last change to the selection, or the last text change if no selection changes remain."
                }, {
                    "key": "Ctrl-Home (PC), Cmd-Up (Mac), Cmd-Home (Mac)",
                    "des": "Move the cursor to the start of the document."
                }, {
                    "key": "Ctrl-End (PC), Cmd-End (Mac), Cmd-Down (Mac)",
                    "des": "Move the cursor to the end of the document."
                }, {
                    "key": "Alt-Left (PC), Ctrl-A (Mac)",
                    "des": "Move the cursor to the start of the line."
                }, {
                    "key": "Alt-Left (PC), Ctrl-A (Mac)",
                    "des": "Move the cursor to the start of the line."
                }, {
                    "key": "Home",
                    "des": "Move to the start of the text on the line, or if we are already there, to the actual start of the line (including whitespace)."
                }, {
                    "key": "Alt-Right (PC), Ctrl-E (Mac)",
                    "des": "Move the cursor to the end of the line."
                }, {
                    "key": "Cmd-Right (Mac)",
                    "des": "Move the cursor to the right side of the visual line it is on"
                }, {
                    "key": "Cmd-Left (Mac)",
                    "des": "Move the cursor to the left side of the visual line it is on. If this line is wrapped, that may not be the start of the line."
                }, {
                    "key": "Up, Ctrl-P (Mac)",
                    "des": "Move the cursor up one line."
                }, {
                    "key": "Down, Ctrl-N (Mac)",
                    "des": "Move down one line."
                }, {
                    "key": "PageUp, Shift-Ctrl-V (Mac)",
                    "des": "Move the cursor up one screen, and scroll up by the same distance."
                }, {
                    "key": "PageDown, Ctrl-V (Mac)",
                    "des": "Move the cursor down one screen, and scroll down by the same distance."
                }, {
                    "key": "Left, Ctrl-B (Mac)",
                    "des": "Move the cursor one character left, going to the previous line when hitting the start of line."
                }, {
                    "key": "Right, Ctrl-F (Mac)",
                    "des": "Move the cursor one character right, going to the next line when hitting the end of line."
                }, {
                    "key": "Alt-B (Mac)",
                    "des": "Move the cursor to the start of the previous word."
                }, {
                    "key": "Alt-F (Mac)",
                    "des": "Move the cursor to the end of the next word."
                }, {
                    "key": "Ctrl-Left (PC), Alt-Left (Mac)",
                    "des": "Move to the left of the group before the cursor. A group is a stretch of word characters, a stretch of punctuation characters, a newline, or a stretch of more than one whitespace character."
                }, {
                    "key": "Ctrl-Right (PC), Alt-Right (Mac)",
                    "des": "Move to the right of the group after the cursor"
                }, {
                    "key": "Shift-Backspace, Ctrl-H (Mac)",
                    "des": "Delete the character before the cursor."
                }, {
                    "key": "Delete, Ctrl-D (Mac)",
                    "des": "Delete the character after the cursor."
                }, {
                    "key": "Alt-Backspace (Mac)",
                    "des": "Delete up to the start of the word before the cursor."
                }, {
                    "key": "Alt-D (Mac)",
                    "des": "Delete up to the end of the word after the cursor."
                }, {
                    "key": "Ctrl-Backspace (PC), Alt-Backspace (Mac)",
                    "des": "Delete to the left of the group before the cursor."
                }, {
                    "key": "Ctrl-Delete (PC), Ctrl-Alt-Backspace (Mac), Alt-Delete (Mac)",
                    "des": "Delete to the start of the group after the cursor."
                }, {
                    "key": "Shift-Tab",
                    "des": "Auto-indent the current line or selection."
                }, {
                    "key": "Ctrl-] (PC), Cmd-] (Mac)",
                    "des": "Indent the current line or selection by one indent unit."
                }, {
                    "key": "Ctrl-[ (PC), Cmd-[ (Mac)",
                    "des": "Dedent the current line or selection by one indent unit."
                }, {
                    "key": "Tab",
                    "des": "If something is selected, indent it by one indent unit. If nothing is selected, insert a tab character."
                }, {
                    "key": "Ctrl-T (Mac)",
                    "des": "Swap the characters before and after the cursor."
                }, {
                    "key": "Enter",
                    "des": "Insert a newline and auto-indent the new line."
                }, {
                    "key": "Insert",
                    "des": "Flip the overwrite flag."
                }]
            }

        },

        methods: {

            changeIndent(action) {
                if (action === 'tang') {
                    if (this.cmOption.tabSize > 5) {
                        return
                    }
                    this.$set(this.cmOption, 'tabSize', this.cmOption.tabSize + 1)
                } else {
                    if (this.cmOption.tabSize < 0) {
                        return
                    }
                    this.$set(this.cmOption, 'tabSize', this.cmOption.tabSize - 1)
                }
                this.format()
            },

            format() {
                this.code = js_beautify(this.code, {indent_size: this.cmOption.tabSize});
            },

            onCmCursorActivity(codemirror) {
                console.log('onCmCursorActivity', codemirror)
            },
            onCmReady(codemirror) {
                console.log('onCmReady', codemirror)
            },
            onCmFocus(codemirror) {
                console.log('onCmFocus', codemirror)
            },
            onCmBlur(codemirror) {
                console.log('onCmBlur', codemirror)
            }
        },

        mounted() {
            this.format()
        }
    }
</script>

<style lang="scss" scoped>
    .editor {
        margin: 0 auto 20px;
        padding: 0;
        text-align: left;
        max-width: 100%;
    }
    .columns.is-multiline.is-gapless {
        margin-bottom: 0;
    }
</style>
