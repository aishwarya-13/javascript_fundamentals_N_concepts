const getUsers = async () =>{
    try {
        const users = await getAllUsers()
        if(users.length){
            //fetch user with id 5
            try {
                const userDetails = await getUserDetails(5)
            } catch (error) {
                console.log(err)
            }
        }
    } catch (error) {
        console.log(err)
    }
}

const getUsersWithPromise = ()=>{
    getAllUsers().then((users)=>{
        if(users.length > 0){
            getUserDetails().then(userDetails => {
                console.log(userDetails)
            }).catch(()=>{

            })
        }
    }).catch(()=>{

    })
}

const users = [
    {id:1, name:'Aish'},
    {id:1, name:'Aish 2'}
]

const getUser = async (id)=>{
    let promise = new Promise((resolve, reject)=>{
        let success = true
        setTimeout(()=>{
            if(success){
                resolve([{user: id, name:'Aish'}])
            }else{
                reject('error')
            }
        },1000)
    })
    return promise
}

const getUsersPromises = (range)=>{
    const promises = range.reduce((prev, curr)=>{
        prev.push(getUser(curr))
    },[])
    return promises
}

const res = Promise.all(getUsersPromises).then((res)=>{
    console.log('success')
}).catch((err)=> confirm.err(err))



const getAllUsers = async ()=>{
    let promise = new Promise((resolve, reject)=>{
        let success = true
        setTimeout(()=>{
            if(success){
                resolve(users)
            }else{
                reject('error')
            }
        },1000)
    })
    return promise
}