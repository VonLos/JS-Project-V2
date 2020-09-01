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
       let el = document.createElement('li')
       let form = document.getElementById(`rform-${this.country_id}`)
       el.innerHTML =
        `<li id="${this.id}">
        <h3 class="name">${this.name}</h3>
         <h3 class="link">${this.link}:</h3>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        `
        this.element.append(el)
        form.remove()
    }
    addEventListeners(){
        this.element.addEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
        if (e.target.className === "delete"){
            let id = e.target.dataset.id
            resourcesAdapter.deleteResource(id)
            let el = document.getElementById(`${this.id}`)
             el.remove()
        }
    }
}
