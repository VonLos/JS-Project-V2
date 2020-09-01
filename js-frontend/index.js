const countriesAdapter = new CountriesAdapter
let resourcesAdapter = new ResourcesAdapter

document.addEventListener('DOMContentLoaded', () => {
    countriesAdapter.fetchCountries()
    resourcesAdapter.fetchResources()
    })