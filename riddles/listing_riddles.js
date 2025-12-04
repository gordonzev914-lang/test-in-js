import { riddle1 } from "./r1.js";
import { riddle2 } from "./r2.js";
const riddle_list=function listing_riddles(riddle1,riddle2){
    const the_list=[]
    the_list.push(riddle1)
    the_list.push(riddle2)
    return the_list
}
export const list_of_riddles=riddle_list(riddle1,riddle2)
