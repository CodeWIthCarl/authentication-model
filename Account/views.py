from django.shortcuts import render,redirect
from .forms import CustomerForm
from django.contrib import auth
from django.http import HttpResponse,JsonResponse
from .models import CustomerModel
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import get_user_model
User= get_user_model() 
# Create your views here.
@login_required(login_url='login')
def Home_view(request):
    
    form=CustomerForm(request.POST or None)
    user_form =UserCreationForm(request.POST or None)
    print(request.POST)
    print(request.method)
    print(request.user)
    print(request.user.is_superuser)
    
    if request.method=='POST':
        
        if user_form.is_valid():
            user_form.save()
            
                  
            return JsonResponse({"su":"create"})             
        if form.is_valid():
            obj=form.save()
           
            return JsonResponse({'data':obj.serilazer()}) 
    if request.user.is_superuser:
        print("i ma here")
        return render(request,'main.html',{'form2':form,'user_form':user_form})
    else:
        print("i not super here")
        return render(request,'main1.html',{"hide":"true"})
        
    
@login_required(login_url='login')
def customer_list(request):
    print(request.user)
    qs= CustomerModel.objects.all()
    data=[]
    for obj in qs:
        item=obj.serilazer()
        data.append(item)
    return JsonResponse({'data':data})

def login_view(request):
    print(request.POST)  
    if request.method =='POST':
        username  = request.POST['username']
        password = request.POST['password']
       
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('home')
        else:
            
            return redirect('home')
             # No backend authenticated the credentials

    return render(request,"login.html")

def log_out_view(request):
    
    auth.logout(request)
    return redirect('login')
    
def user_list_view(rquest):
    qs= User.objects.all()
    
    data=[]
    for obj in qs:
        item={"user":obj.username,
              "email":obj.email
              }
        data.append(item)
    print(data)
    return JsonResponse({'users':data})