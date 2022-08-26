const cust_list1 = document.getElementById('cust_list')
const cust_form = document.getElementById('cust-form1')
const cust_form1 = document.getElementById('list_custmore')
const button1 = document.getElementById('London')
const user_list = document.getElementById('user_list')

console.log(cust_form)


const getCookie=(name)=> {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');


function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    
    for (i = 0; i < x.length; i++) {
     
      x[i].style.display = "none";      
    }
   
    document.getElementById(cityName).style.display = "block"; 
        const getData=()=>{
            if(cityName==="Custmore"){
            $.ajax({
                type:'GET',
                url:'/list/',
                success:function(response){
                    const json= response.data
                    
                    cust_list1.innerHTML=""
                    for(i=0;i<json.length;i++){
                        cust_list1.innerHTML +=`
                        <h5> Custmore Name :-${json[i].cu_Name}</h5>
                        <p>Mobile Number:-${json[i].cu_number}</p>
                        <p>Address:-${json[i].cu_address}</p>`
                        cust_form1
                    }
                            
                    },
                error:function(error){
                    console.log('error',error)
                }
            })
           
            }
            else{
                $.ajax({
                    type:'GET',
                    url:'/userlist/',
                    success:function(response){
                        const json= response.users
                        console.log(json)
                         user_list.innerHTML=""
                         for(i=0;i<json.length;i++){
                            user_list.innerHTML +=`
                            <h5> UserName :-${json[i].user}</h5>
                            <p>Email Id:-${json[i].email}</p>`
                            
                        } },
                        error:function(error){
                            console.log('error',error)
                        }
                    })
                }
                        
                        
       
           
        }    
    getData()        
  }
  
  
  cust_form.addEventListener('submit',e=>{
    e.preventDefault()
    $.ajax({
        type:'POST',
        url:'',
        data:{
            'csrfmiddlewaretoken':csrftoken,
            'customer_Name':id_customer_Name.value,
            'customer_number':id_customer_number.value,
            'customer_address':id_customer_address.value      
        },
        success:function(response){
            
            const json= response.data
           
            cust_list1.insertAdjacentHTML('afterend',`
            <h5> Custmore Name :-${json.cu_Name}</h5>
            <p>Mobile Number:-${json.cu_number}</p>
            <p>Address:-${json.cu_address}</p>`)
        },
            
        error:function(error){
                console.log('error',error)
            }
        })
    getData()    
  });
  
    