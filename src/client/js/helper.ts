export function filter(search:String,array:String[]):String[]{
    return array.filter(item => item === search);
}