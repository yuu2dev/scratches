const socket = io('http://localhost:3000')
Vue.prototype.$socket = socket

const UserList = {
    name: 'UserList',
    template: `
    <div>
        유저 목록
    </div>
    `
}
const MsgList = {
    name: 'MsgList',
    props: [ 'msgs' ],
    created () {
        this.$socket.on('chat', payload => {
            this.msgs.push(payload)
        })
    },
    template: `
    <div>
        <ul>
            <li v-for="(msg, i) in msgs">{{ msg.id }}: {{ msg.content }}</li>
        </ul>
    </div>
    `
}
const SendMsg = {
    name: 'SendMsg',
    data: (() => {
        return {
            msg: null
        }
    }),
    methods: {
        sendMsg() {
            this.$emit('send-msg', this.msg)
            this.msg = null
        }
    },
    template: `
        <div class="flex full-width">
            <input 
                type="text" 
                name="msg" 
                class="input-msg" 
                v-model="msg"
                @keypress.enter="sendMsg"
            />
            <button class="btn-input-msg" 
                @click="sendMsg" 
            >
                입력
            </button>
        </div>
    `
}
const layout = {
    components: {
        UserList,
        SendMsg,
        MsgList
    },
    data: (() => {
        return {
            msg: null,
            msgs: []
        }
    }),
    watch: {
        msg (newValue) {
            console.log(newValue)
        }
    },
    methods: {
        sendMsg (msg) {
            this.$socket.emit('chat', msg)
        }
    },
    template: `
        <div class="full-height">
            <div class="middle flex full-width">
                <MsgList 
                    class="msg-list left"
                    :msgs="msgs"    
                />
                <UserList class="user-list center"/>
            </div>
            <div class="footer">
                <SendMsg 
                    class="send-msg center full-width"
                    @send-msg="sendMsg"
                />
            </div>
        </div>
    `
}
const app = new Vue(layout)
app.$mount('#app')

