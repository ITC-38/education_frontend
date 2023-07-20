let filters = document.querySelectorAll('.all-courses-filter > div .filter-header')
filters.forEach((element) => {
    element.addEventListener('click', () => {
        let parentClass = element.parentElement.classList[0]
        let filterBody = document.querySelector(
            '.' + parentClass + ' .' + element.classList[0] + '+ .filter-body'
        )
        filterBody.classList.toggle('active')
        element.querySelectorAll('p').forEach((el) => {
            el.classList.toggle('active')
        })
    })
})
