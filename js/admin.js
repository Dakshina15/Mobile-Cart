function Admin() {
    this.form = document.getElementById('form');
}

Admin.prototype.bindEvents = function() {
    this.form.addEventListener('submit',(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formMap = {};
        for([Key,value] of formData.entries()){
            // console.log(Key,value);
            formMap[Key] = value;
        }
        if(localStorage.getItem('items')){
            const items = JSON.parse(localStorage.getItem('items')).concat([formMap]);
            localStorage.setItem('items', JSON.stringify(items));
        }
        else {
            localStorage.setItem('items', JSON.stringify([formMap]));
        } 
        window.location.reload();
    })
}

const adminInstance = new Admin();
adminInstance.bindEvents();