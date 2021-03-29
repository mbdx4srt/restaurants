const {Restaurant, menu, menu_item} = require('../src/restaurant.js')

describe('objects', () => {
    test('we can create restaurants and they have properties', () => {
        const osterio = new Restaurant('Osterio')
        expect(osterio.name).toEqual('Osterio')
        osterio.add_city('London')
        expect(osterio.city).toEqual('London')
        osterio.add_image('https://c.yell.com/t_galleryFit,f_auto/156debe2-326b-45d0-a085-7732425680a9_image_jpeg.jpg')
        expect(osterio.image_url).toEqual('https://c.yell.com/t_galleryFit,f_auto/156debe2-326b-45d0-a085-7732425680a9_image_jpeg.jpg')
    })
    test('restaurants have to have names', () => {
        expect(() => new Restaurant()).toThrowError('restaurants need a name')
    })
    test('we can create menus and they have properties', () => {
        const lunch = new menu('Lunch')
        expect(lunch.title).toEqual('Lunch')
        lunch.add_icon('🍕')
        expect(lunch.icon).toEqual('🍕')
    })
    test('menus have to have titles', () => {
        expect(() => new menu()).toThrowError('Menus need a title')
    })
    test('we can create menu items and they have properties', () => {
        const pizza = new menu_item('pizza', 10)
        expect(pizza.item).toEqual('pizza')
        expect(pizza.price).toEqual(10)
    })
    test('menu items have to have titles', () => {
        expect(() => new menu_item(undefined,0)).toThrowError('Menus items need a title')
        expect(() => new menu_item('pizza',undefined)).toThrowError('Menus items need a price')
    })
    test('can assign menu items to menus', () => {
        const lunch = new menu('Lunch')
        const pizza = new menu_item('pizza', 10)
        lunch.add_item(pizza)
        expect(lunch.menu_items).toContain(pizza)
    })
    test('can assign menus to restaurants', () => {
        const lunch = new menu('Lunch')
        const pizza = new menu_item('pizza', 10)
        const osterio = new Restaurant('Osterio')
        lunch.add_item(pizza)
        osterio.add_menu(lunch)
        expect(osterio.menu).toContain(lunch)
    })

})