 const getAllStudent = async()=> {
try {
    const {data,error}= await axios('/student/all_student')
    if(error)throw error;
    console.log(data);
    
} catch (error) {
    console.log(error);
    
}
 }


 const addStudent= async (ev) => {
     try {
        const name= ev.target.elements.name.value;
        if(!name)throw new Error('no name was given');

        const {data,error} = await axios.post('/students/add_student',{name})

        if(error)throw error;
        console.log(data);
        
     } catch (error) {
         console.error(error.message);
         
     }

 }

 getAllStudent()