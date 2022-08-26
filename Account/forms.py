from dataclasses import field
from django import forms
from django.forms import ModelForm
from .models import CustomerModel
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
User= get_user_model()


class CustomerForm(ModelForm):
    customer_Name = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}))
    customer_number= forms.IntegerField()
    customer_address=forms.CharField(widget=forms.Textarea(attrs={'class':'form-contol','rows':3}))
    class Meta:
        model = CustomerModel
        fields =['customer_Name','customer_number','customer_address']

    