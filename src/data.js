export const Api_key = 'AIzaSyCfyBIIhO9kV5JQUd9L6DOOB4aVKuESL_s';

 export const valueConverter= (value) =>  {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}