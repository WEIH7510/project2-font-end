export const Action=Object.freeze({
    finishLoading:"finishLoading",
});

function checkError(response){
    if(!response.ok){
        throw Error(`${response.status},${response.statusText}`);
    }
    return response;
}

function finsihLoading(comments){
    return{
        type:Action.finishLoading,
        payload:comments,
    };
}

const url="https://shopping-comments-api.duckdns.org:8442";

export function loadComments(){
    return dispacth=>{
        fetch(`${url}/get`)
        .then(response=>checkError(response))
        .then(response => response.json())
        .then(data=>{ 
            if(data.ok){
                dispacth(finsihLoading(data.comments));
            }
        })
        .catch(e=>console.error(e));
    }
}
