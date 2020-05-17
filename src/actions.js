export const Action=Object.freeze({
    finishLoading:"finishLoading",
    showComment:"showComment",
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

function showComment(comment){
    return{
        type:Action.showComment,
        payload:comment,
    };
}

export function addComment(p_id,message){
    var date=new Date();
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    const comment={p_id,day,month,year,message};
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(comment),
    }
    return dispacth=>{
        fetch(`${url}/post`,options)
        .then(response=>checkError(response))
        .then(response=>response.json())
        .then(data=>{
            dispacth(showComment({
                c_id:data.id,
                p_id:p_id,
                day:day,
                month:month,
                year:year,
                message:message,
            }));
        })
        .catch(e=>console.error(e));
    }
}