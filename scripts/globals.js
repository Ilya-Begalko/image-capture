// привет, jQuery
const $ = (selector, parent = document) => parent.querySelector(selector)

const create$ = (template) => {
    if (typeof template !== 'string') return
    return new Range().createContextualFragment(template).children[0]
}

const render$ = (parent, child, place = 'beforeend') => {
    parent.insertAdjacentElement(place, child)
}

// добавляем атрибуты
// `attrs` - объект
// ключи объекта - названия атрибутов
// значения ключей - значения атрибутов
const setAttrs = ($, attrs) => {
    if (attrs && (typeof attrs !== 'object' || Array.isArray(attrs))) return

    Object.keys(attrs).forEach((key) => {
        $.setAttribute(key, attrs[key])
    })
}

// удаляем атрибуты
// `attrs` - массив
// элементы массива - названия атрибутов
const removeAttrs = ($, attrs) => {
    if (!Array.isArray(attrs)) return

    attrs.forEach((name) => {
        $.removeAttribute(name)
    })
}

// Получаем ссылки на DOM-элементы:
const loader$ = $('.lds-roller')
const app$ = $('#app')
const video$ = $('video')
const image$ = $('.result img')
const photoLink$ = $('.photo-link')
const canvas$ = $('.result canvas')
const canvasLink$ = $('.canvas-link')
const controls$ = $('.controls')
const grabFrame$ = $('.grab-frame')
const removePhoto$ = $('.remove-photo')
const clearCanvas$ = $('.clear-canvas')
const settings$ = $('.settings')

// хранилище для инпутов
const inputs$ = []
// контекст рисования
const ctx = canvas$.getContext('2d')
// видеотрек, экземпляр `ImageCapture` и источник фото
let videoTrack
let imageCapture
let photoSrc

// настройки для фото
const settingDictionary = {
    brightness: 'Яркость',
    colorTemperature: 'Цветовая температура',
    contrast: 'Контрастность',
    saturation: 'Насыщенность',
    sharpness: 'Резкость',
    pan: 'Панорамирование',
    tilt: 'Наклон',
    zoom: 'Масштаб'
   }