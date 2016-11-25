var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        url: '',
        cleanUrl: ''
	},
	
    methods: {
        humaniseUrl: function() {
        	this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '' )
        }
    }
})
