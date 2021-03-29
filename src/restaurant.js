/**
 * Represents a Restaurant.
 * @constructor
 */

class Restaurant {
    constructor(Name) {
        this.name = Name
        this.menu = []
        if (typeof Name == 'undefined') {
            throw new Error("restaurants need a name")
        }
    }

    add_image(image_url) {
        this.image_url = image_url
    }

    add_city(city) {
        this.city = city
    }
    add_menu(menu){
        this.menu.push(menu)
    }
}


class menu {
    constructor(title) {
        this.title = title
        this.menu_items = []
        if (typeof title == 'undefined') {
            throw new Error("Menus need a title")
        }
    }
        add_icon(icon){
            this.icon = icon
        }
        add_item(menu_item){
        this.menu_items.push(menu_item)
        }
}

class menu_item {
    constructor(item, price) {
        this.item = item
        this.price = price
        if (typeof item == 'undefined') {
            throw new Error("Menus items need a title")
        }
        if (typeof price == 'undefined') {
            throw new Error("Menus items need a price")
        }
    }
}
module.exports = {Restaurant, menu, menu_item}