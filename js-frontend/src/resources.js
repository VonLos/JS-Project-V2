class Resource {
    static all = []
    constructor(id, name, link, country_id){
        this.name = name
        this.id = id
        this.country_id = country_id
        this.link = link
        this.element = document.getElementById(`country-${this.country_id}`)
        Resource.all.push(this)
    }
    
    attachToDom(){
        this.fullRender()
        this.addEventListeners()
    }
 
    fullRender(){
       let el = document.createElement('p')
       let form = document.getElementById(`rform-${this.country_id}`)
       el.innerHTML =
        `<p id="${this.id}">
         <br> <span class="name">Resource Name: ${this.name}</span><br>
         <br><span class="link">Resource Link: ${this.link}</span><br>
        </p><br>
        <button class="delete" data-id="${this.id}">Delete</button>
        `
        this.element.appendChild(el)
        if(form){
        form.remove()
        }
    }
    addEventListeners(){
        this.element.addEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
        if (e.target.className === "delete"){
            let id = e.target.dataset.id
            resourcesAdapter.deleteResource(id)
            this.element.removeEventListener('click',this.handleClick)
            let el = document.getElementById(`${this.id}`)
             el.remove()
        }
    }
}
