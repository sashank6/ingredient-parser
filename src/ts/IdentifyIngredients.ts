import fs = require('fs');
import {checkIngredients} from './CheckIngredient';
import {utils} from './utils';
import HashMap = require('HashMap');
import ing = require('ingredientparser');
import Ingredient = require('./Ingredient');

export function identifyIngredients(data: string[]):JSON[] {

    let ingmap = new HashMap();
    let recipeLines: string[] = [];
    let parseIng = [];

    for (let i = 0; i < data.length; i++) {
        let ings = utils.getWords(data[i]);
        let ingPresent = false;
        let isPrevIngredient = false;
        for (let j = 0; j < ings.length; j++) {
            let ingredient = ings[j].toString().toUpperCase();
            if (ingmap.has(ingredient) === false) {
                if (checkIngredients.search(ingredient) === true) {
                    if (isPrevIngredient) {
                        ingmap.remove(ings[j - 1].toString().toUpperCase());
                        ingmap.set(ings[j - 1].toString().toUpperCase() + " " + ingredient, true);
                        isPrevIngredient = true;
                    }
                    else {
                        ingmap.set(ingredient, true);
                        isPrevIngredient = true;
                    }
                    ingPresent = (ingPresent || true);
                }
                else {
                    isPrevIngredient = false;
                }
            }
            else {
                isPrevIngredient = false;
            }
        }
        if (ingPresent)
            recipeLines.push(data[i]);
    }

    //console.log(ingmap.keys());
    let ingredients_list = ingmap.keys();
    //console.log(recipeLines);
    for (let i = 0; i < recipeLines.length; i++) {
        let ingJson = ing.parse(recipeLines[i]);
        // console.log(ingJson);

        let ingredient = new Ingredient();
        if (ingJson.hasOwnProperty('amount')) {
            ingredient.setAmount(ingJson['amount']);
        }
        if (ingJson.hasOwnProperty('unit')) {
            ingredient.setUnit(ingJson['unit']);
        }
        ingredient.setName(ingredients_list[i]);

        parseIng.push(JSON.parse(JSON.stringify(ingredient)));

    }

    return parseIng;

}