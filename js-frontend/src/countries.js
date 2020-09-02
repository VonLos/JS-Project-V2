class Country {
    static all = []
    constructor(id, cc, name){
        this.id = id
        this.cc = cc
        this.name = name
        this.element = document.createElement('div')
        this.element.id = `country-${this.id}`
        Country.all.push(this)
    }

    get countryList(){
        return  document.getElementById('country-list')
     }

        addEventListeners(){
            this.element.addEventListener('click', this.handleListClick)
           }
            
            handleListClick = (e) => {
            if (e.target.className === "create"){
                let resourcesAdapter = new ResourcesAdapter
                let div = document.getElementById(`country-${this.id}`)
                let form = document.createElement('form')
                form.id = `rform-${this.id}`
                form.innerHTML =  
                `<label for="resource-name">Name:</label>
                <input hidden="true" type="text" class="${this.id}"id="country_id">
               <input type="text" name="name" id="resource-name"><br><br>
               <label for="resource-link">Link:</label>
               <input type="text" name="link" id="resource-link"><br><br>
               <input type="submit" value="Create">`
               div.append(form)
               form.addEventListener('submit', resourcesAdapter.createResource)
            } 
        } 

    attachToDom(){
        this.countryList.append(this.fullRender())
        this.addEventListeners()
    }
 
    fullRender(){
        this.element.innerHTML =
            `<li>
            <h2 class="name">Country: ${this.name}</h2><br>
            <span class="cc">Country Code: ${this.cc}</span><br>
            </li><br>
            <button class="create" data-id="${this.id}">Create Resource</button><br>
            <h3> Resources<br>
            __________
            `
        return this.element
    }

}