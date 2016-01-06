﻿Config.appid = "sample";
Config.version = "1";
Config.title = "Map Sample";

function main() {
    List.addItemTitle("Map Sample");
    List.addItemSubtitle("Start Map App", "Using App.map()", "startMapApp()");
    List.addItemSubtitle("Embed Map with markers", "Using Map class", "viewMap()");
    List.addItemSubtitle("User LocationMap", "Using Map class", "viewUserMap()");
    List.show();
}

function startMapApp() {
    List.addItemTitle("Start Map Application");
    List.addItemSubtitle("With Adress", "Paris, France", "App.map('Paris, France')");
    List.addItemSubtitle("With Geo Coordinates", "48.858238, 2.347918", "App.map('My Label','48.858238, 2.347918')");
    List.show();
}

function viewMap() {
    var cities = [{ name: "London", geo: "51.522020, -0.122198" }, { name: "Paris", geo: "48.858238, 2.347918" }, { name: "Berlin", geo: "52.518198, 13.380823"}];
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        Map.addItem(city.name, city.geo, "viewCity({city.name})");
    }
    Map.show();
}

function viewCity(name) {
    List.addItemTitle(name);
    List.show();
}

function viewUserMap() {
    Map.addUsers();
    Map.show();
}