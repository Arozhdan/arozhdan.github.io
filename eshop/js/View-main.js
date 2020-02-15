;(function () {
    "use strict"

    const api = {}

    api.getShowcase = function getShowcase (flats) {
        const rootElement = document.createElement('div')
        rootElement.classList.add("cards-wrapper")

        const containerElement = document.createElement('div')
        containerElement.classList.add("container", "p-0")
        rootElement.append(containerElement)

        const rowElement = document.createElement("row")
        rowElement.classList.add("row")
        containerElement.append(rowElement)

        rowElement.append(...flats.map(getFlatCard))

        return rootElement
    }

    api.getTable = function getTable (flats) {
        const divElement = document.createElement('div')

        divElement.innerHTML = tableTemplate
        divElement.querySelector('[data-items]').append(...flats.map(getTableItem))

        return divElement.firstElementChild
    }

    window.View = api

    function getFlatCard (flat) {
        const divElement = document.createElement('div')

        divElement.innerHTML = cardTemplate
            .replace(/%ID%/g, flat.id)
            .replace(/%LABEL%/g, flat.label)
            .replace(/%ROOMS%/g, flat.rooms)
            .replace(/%PRICE%/g, flat.price)
            .replace(/%SQUARE%/g, flat.square)
            .replace(/%CARD_LIKE_ACTIVE%/g, flat.favorite ? "card__like--active" : "")

        return divElement.firstElementChild
    }

    function getTableItem (flat) {
        const divElement = document.createElement('div')

        divElement.innerHTML = tableItemTemplate
            .replace(/%LABEL%/g, flat.label)
            .replace(/%PRICE%/g, flat.price)
            .replace(/%SQUARE%/g, flat.square)

        return divElement.firstElementChild
    }

    const cardTemplate = `
<div class="col-md-4">
    <div class="card">
        <div class="card__header">
            <a class="card__title" href="#">%LABEL%</a>
            <div class="card__like %CARD_LIKE_ACTIVE%" data-card-id="%ID%">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="card__img">
            <img src="img/flat-plan.png" alt="План квартиры">
        </div>
        <div class="card__desc">
            <div class="card__price">
                <div class="card__price-total">%PRICE% ₽</div>
                <div class="card__price-per-meter">%PRICE_PRE_SQUARE% ₽/м2</div>
            </div>

            <!-- card__params params -->
            <div class="card__params params">
                <div class="params__item">
                    <div class="params__definition">Комнат</div>
                    <div class="params__value">%ROOMS%</div>
                </div>
                <div class="params__item">
                    <div class="params__definition">Площадь</div>
                    <div class="params__value">%SQUARE%</div>
                </div>
            </div>
            <!-- //card__params params -->

        </div>
        <div class="card__footer">
            <div class="card__art">%NOMENCLATURE%</div>
            <div class="card__floor">Этаж %FLOOR% из %COMON_FLOOR%</div>
        </div>
    </div>
</div>`

    const tableTemplate = `
<div class="panels-wrapper">
    <div class="container p-0">
        <div class="panels-filter">
            <div class="panels-filter__element" style="width: 120px;">
                <div class="panels-filter__name">Артикул</div>
            </div>
            <div class="panels-filter__element" style="width: 160px;">
                <div class="panels-filter__name">ЖК</div>

            </div>
            <div class="panels-filter__element" style="width: 70px;">
                <div class="panels-filter__name">Корпус</div>

            </div>
            <div class="panels-filter__element" style="width: 70px;">
                <div class="panels-filter__name">Этаж</div>

            </div>
            <div class="panels-filter__element" style="width: 70px;">
                <div class="panels-filter__name">Комнат</div>
            </div>
            <div class="panels-filter__element" style="width: 80px;">
                <div class="panels-filter__name">Площадь</div>

            </div>
            <div class="panels-filter__element" style="width: 100px;">
                <div class="panels-filter__name">м2</div>

            </div>
            <div class="panels-filter__element" style="width: 100px;">
                <div class="panels-filter__name">Стоимость</div>
            </div>
            <div class="panels-filter__element" style="width: 120px;">
                <div class="panels-filter__name">Продавец</div>
            </div>
            <div class="panels-filter__element" style="width: 100px;">
                <div class="panels-filter__name">Избранное</div>
            </div>
        </div>

        <div data-items></div>
    </div>
</div>`

    const tableItemTemplate = `
<div class="panel">
    <div class="panel__artikul">ГЕН-112.4.2-56</div>
    <div class="panel__name">
        <a href="#">%LABEL%</a>
    </div>
    <div class="panel__block">15</div>
    <div class="panel__floor">4</div>
    <div class="panel__rooms">1</div>
    <div class="panel__sq">%SQUARE% м2</div>
    <div class="panel__price-per-m">64 000 ₽</div>
    <div class="panel__price">%PRICE% ₽</div>
    <div class="panel__seller">Застройщик</div>
    <div class="panel__favourite">
        <button class="panel__favourite-btn panel__favourite-btn--active">
            <i class="fas fa-heart"></i>
        </button>
    </div>
</div>`
})();
