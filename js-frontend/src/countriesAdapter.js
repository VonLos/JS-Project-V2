

class CountriesAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/countries"
    }
    
    fetchCountries(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
                let e = new Country(el.attributes.id, el.attributes.cc,el.attributes.name)
               e.attachToDom()
            })
            const resourcesAdapter = new ResourcesAdapter
            resourcesAdapter.fetchResources()
         })
    }

}