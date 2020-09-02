const countriesAdapter = new CountriesAdapter
const resourcesAdapter = new ResourcesAdapter

document.addEventListener('DOMContentLoaded', () => {
    countriesAdapter.fetchCountries()
    })