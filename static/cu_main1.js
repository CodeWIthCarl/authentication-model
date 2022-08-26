const cust_list2 = document.getElementById('cust_list1')
console.log(cust_list2)
function openCustomer(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";      
    }
    document.getElementById(cityName).style.display = "block"; 
        const getData=()=>{
            $.ajax({
                type:'GET',
                url:'/list/',
                success:function(response){
                    const json= response.data
                    console.log(json)
                    cust_list2.innerHTML=""
                    for(i=0;i<json.length;i++){
                        console.log(json)
                        cust_list2.innerHTML +=`
                        <h5> Custmore Name :-${json[i].cu_Name}</h5>
                        <p>Mobile Number:-${json[i].cu_number}</p>
                        <p>Address:-${json[i].cu_address}</p>`
                        
                    }
                            
                    },
                error:function(error){
                    console.log('error',error)
                }
            })
            }
            getData()
  }