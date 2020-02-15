;(function () {
    "use strict"

    const FLATS_IN_PAGE = 3

    const filters = {
        label: "",
        rooms: [],
        square: {
            min: null,
            max: null
        },
        price: {
            min: null,
            max: null
        }
    }

    let viewMode = "showcase" // showcase table

    let sorter = "priceAsc" // priceAsc priceDesc squareAsc squareDesc

    const getParams = location.search
        .slice(1)
        .split('&')
        .map(x => x.split('='))
        .reduce((p, [key, value]) => ({ ...p, [key]: value }), {})
    
    const currentPage = parseInt(getParams.page || 1)
    const commonPagesNumber = Math.ceil(Model.getFlats().length / FLATS_IN_PAGE)

    const dataPagesElement = document.querySelector('[data-pages]')
    for (let i = 1; i <= commonPagesNumber; i++) {
        const aElement = document.createElement('a')
        aElement.href = "?page=" + i
        aElement.classList.add("pagination__page")
        aElement.textContent = i

        if (i === currentPage) {
            aElement.classList.add("pagination__page--active")
        }

        dataPagesElement.insertBefore(aElement, dataPagesElement.lastElementChild)
    }

    const api = {}

    api.start = function start () {
        api.update()

        const filterLabelElement = document.querySelector('[data-filter-label]')

        filterLabelElement.append(
            ...Model.getLabels().map(label => {
                const optionElement = document.createElement('option')
                optionElement.setAttribute('vlue', label)
                optionElement.textContent = label

                return optionElement
            })
        )

        filterLabelElement.addEventListener('change', function (event) {
            filters.label = this.value
            api.update()
        })

        document
            .querySelectorAll('[data-filter-rooms]')
            .forEach(element => {
                const roomsNumber = parseInt(element.getAttribute('data-filter-rooms'))
                const labelElement = element.nextElementSibling

                element.addEventListener('click', function () {
                    toggleItem(filters.rooms, roomsNumber)

                    labelElement.classList.remove("rooms__btn--active")

                    if (filters.rooms.includes(roomsNumber)) {
                        labelElement.classList.add("rooms__btn--active")
                    }

                    api.update()
                })
            })
        
        document
            .querySelector('[data-sorter]')
            .addEventListener('change', function () {
                sorter = this.value
                api.update()
            })
        
        document
            .querySelectorAll('[data-view-mode]')
            .forEach(element => {
                element.addEventListener('click', function (event) {
                    event.preventDefault()

                    if (viewMode !== this.getAttribute('data-view-mode')) {
                        document
                            .querySelectorAll("[data-view-mode]")
                            .forEach(element =>
                                element.classList.remove("view-options__type-item--active")
                            )

                        viewMode = this.getAttribute('data-view-mode')
                        api.update()
                    }
                })
            })
        
        Model.dispatch = function () {
            api.update()
        }
    }

    api.update = function update () {
        let flats = Model.getFlats()

        if (filters.label) {
            flats = flats.filter(x => x.label === filters.label)
        }

        if (filters.rooms.length) {
            flats = flats.filter(x => filters.rooms.includes(x.rooms))
        }

        if (filters.square.min !== null) {
            flats = flats.filter(x => x.square >= filters.square.min)
        }

        if (filters.square.max !== null) {
            flats = flats.filter(x => x.square <= filters.square.max)
        }

        if (filters.price.min !== null) {
            flats = flats.filter(x => x.price >= filters.price.min)
        }

        if (filters.price.max !== null) {
            flats = flats.filter(x => x.price <= filters.price.max)
        }

        if (sorter === 'priceAsc') {
            flats = flats.sort((a, b) => a.price - b.price)
        }
        
        else if (sorter === 'priceDesc') {
            flats = flats.sort((a, b) => b.price - a.price)            
        }

        else if (sorter === 'squareAsc') {
            flats = flats.sort((a, b) => a.square - b.square)
        }
        
        else if (sorter === 'squareDesc') {
            flats = flats.sort((a, b) => b.square - a.square)            
        }

        const showcaseMountPoint = document.querySelector('[data-showcase]')
        const tableMountPoint = document.querySelector('[data-table]')

        showcaseMountPoint.innerHTML = ''
        tableMountPoint.innerHTML = ''

        flats = flats.slice(
            (currentPage - 1) * FLATS_IN_PAGE,
            (currentPage - 1) * FLATS_IN_PAGE + FLATS_IN_PAGE
        )

        if (viewMode === 'showcase') {
            const showcaseElement = View.getShowcase(flats)
            showcaseMountPoint.append(showcaseElement)

            showcaseElement
                .querySelectorAll('.card__like')
                .forEach(element =>
                    element.addEventListener("click", function (event) {
                        Model.toggleFavorite(parseInt(element.getAttribute('data-card-id')))
                    })
                )
        }

        else if (viewMode === 'table') {
            const tableElement = View.getTable(flats)
            tableMountPoint.append(tableElement)
        }

        document
            .querySelector("[data-view-mode='" + viewMode + "']")
            .classList.add("view-options__type-item--active")
    }

    window.Controller = api
    
    function toggleItem (array, item) {
        if (array.includes(item)) {
            array.splice(array.indexOf(item), 1)
        }

        else {
            array.push(item)
        }
    }
})();