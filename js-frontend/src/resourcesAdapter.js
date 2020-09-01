class ResourcesAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/resources"
    }
    
    fetchResources(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
                let res = new Resource(el.id, el.attributes.name,el.attributes.link,el.attributes.country_id)
                res.attachToDom()
            })
        })
    }
    createResource(e){
        e.preventDefault()


        const name = document.getElementById("resource-name").value
        const country_id = document.getElementById("country_id").className
        const link = document.getElementById("resource-link").value
        let newResourceObj = {
            name,
            link,
           country_id
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newResourceObj)
        }

        
        fetch('http://localhost:3000/resources', configObj)
            .then(res => res.json())
            .then(json => {
                let resource = new Resource(json.data.id, json.data.attributes.name,json.data.attributes.link,json.data.attributes.country_id)
                resource.attachToDom()
            })
    }



    deleteResource(id){
            let configObj = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
    
            fetch(`http://localhost:3000/resources/${id}`, configObj)
            .then(res => res.json())
            .then(json => {
                alert(json.message)
            })
        }
    
}