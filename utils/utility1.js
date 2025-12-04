import readline from "readline-sync"
import{ list_of_riddles } from "../riddles/listing_riddles.js";
function create_player(player_name){
    const player={name:player_name,times:[]}
    return player
}
function get_name(){
    const name = readline.question("What is your name? ");
    const the_player=create_player(name)
    return the_player
} 
function ask_riddle(riddle){
    const caches=readline.question(`${riddle.taskdescription}`)
    if(caches===riddle.correctanswer){ 
        return "good work"
    }
    else {
        console.log("Try again")
        return ask_riddle(riddle)
    }
}
function Time_measure(player,riddle){
    const start = Date.now()
    ask_riddle(riddle)
    const end=Date.now()-start
    player.times.push(end/1000)
    return player    
}

export function menu(player,list_of_riddles=[]){
    const caches=readline.question("to play press 1,to see all riddles press 2, to see a Specific riddle press 3")
    if(caches==="1"){
        for(let i=0;i<list_of_riddles.length;i++){
            let riddle=list_of_riddles[i]
            Time_measure(player,riddle)
        }            
    }
    else if(caches==="2"){
        console.log(list_of_riddles)
    }
    else if(caches==="3"){
        const id=readline.question("enter riddle number")
        for(let i=0;i<list_of_riddles.length;i++){
            if(list_of_riddles[i].id===id){
                console.log(list_of_riddles[i])
            }
        }
    }
    return player
}
export function total_time(player){
    const times_list=player.times
    let seconds_counter=0
    for(let i=0;i<times_list.length;i++){
        seconds_counter+=i;
    }
    return seconds_counter
}
const player1=get_name()//אני חושב ששלושת ההדפסות האלה נצרכים בשביל הקריאה לפונקציה  
console.log(menu(player1,list_of_riddles))//כנ''ל
console.log(seconds_counter(player1))//כנ''ל