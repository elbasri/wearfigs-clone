import { isArray, isEmpty } from "lodash";



export const prepareVariations = (variations, colorName) => {
        const arr = [];
        for(let item of variations) {
            if(item.attributes.find((e) => e.option === colorName)){
                arr.push({ id: item.id,  attr: item.attributes});
            }
        }
        return arr;
}

//get size by color
export const sizeOptions = (varByColor) => {
    const arr = [];
    const sizes = 0;
    for(let item of varByColor) {
        const {attr} = item;
        let sizeIndex = attr.findIndex((e) => e.name === 'sizes')
        console.info(sizeIndex)
        if( sizeIndex === -1){
            continue;
        }

        const sizeArrIndex = arr.findIndex((e) => e.size === attr[sizeIndex].option );
        if(sizeArrIndex !== -1 ){
            let fit = checkFitExists(attr, sizeIndex);
            (!arr[sizeArrIndex].fits.includes(fit) && fit) ? arr[sizeArrIndex].fits.push(fit) : null;
        }
        else{
            let fit = checkFitExists(attr, sizeIndex);
            const sizeObj = { size: attr[sizeIndex].option, fits:[] }
            if(fit) {
                sizeObj.fits.push(fit);
            }
            arr.push(sizeObj)
        }

    }
    return arr;

}

// check if it has fits
const checkFitExists = (attr,index) => {
    let fit = null;
    if(isArray(attr)){
        if( !isEmpty(attr[ index+1 ]) && attr[ index+1 ].name === 'Fit'){
            fit = attr[index+1].option;
        }
        else if(!isEmpty(attr[ index-1 ]) && attr[ index-1 ].name === 'Fit'){
            fit = attr[index-1].option;
        }
    }
    return fit;
}

// return back the combination of filters
export const getVariationFilter  = (arr,color,size = null,fit = null) => {
    for(let i in arr) {
        for(let j of  arr[i].attr){

            if(j.option === color){
                c = true
            }
            else if(size !== null && j.option === size){
                s =true
            }else if( fit !== null && j.option === fit){
                f =true
            }
            if(c !== false && s !== false && f !== false) {
                    return arr[i];
            }
            if(c !== false && s === null && f !== false) {
                return arr[i];
            }
            if(c !== false && f === null && s !== false) {
                return arr[i];
            }
    }
}
return null;
}

export const getColors = (attrs) => {
    for(let item of attrs) {
        if(item.name === 'color') {
            return item.options
        }
    }
}

export const getImageByColor = (arr, SelectedColor) => {
        return arr.filter(e => e.alt === SelectedColor);
}


// variations && colors return array of object of size and fits
export const extractSizes = (varr, color) => {
    const variations = prepareVariations(varr,color);
    return sizeOptions(variations);
}


