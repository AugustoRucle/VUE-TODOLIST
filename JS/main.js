var app = new Vue({
    el: '#app',
    data: {
        title: '',
        body: '',
        _auxNote: [],
        notes: [
            {
                title: 'MY note',
                body: 'Body of my note'
            }
        ]
    },
    created() {
        vm = this
        axios.get('http://127.0.0.1:3333/api/v1/note/').then(response => (vm.notes = response.data))
    },
    methods: {
        addNote: function () {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:3333/api/v1/note/',
                data: {
                    title: vm.title,
                    body: vm.body
                }
            }).then(function (response) {
                response = response.data
                vm.notes.push({ id: response.id, title: response.title, body: response.body })
            });
        }
        , editNote: function (arrayId, id) {
            axios({
                method: 'put',
                url: 'http://127.0.0.1:3333/api/v1/note/' + id,
                data: {
                    title: vm.notes[arrayId].title,
                    body: vm.notes[arrayId].body
                }
            })
        },
        deleteNote: function (arrayId, id) {
            axios({ method: 'delete', url: 'http://127.0.0.1:3333/api/v1/note/' + id });
            this.notes.splice(arrayId, 1)
        }
    }
})