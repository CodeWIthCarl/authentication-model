
from django.db import models

# Create your models here.
class CustomerModel(models.Model):
    customer_Name= models.CharField(max_length=20,null=False,blank=False)
    customer_number= models.IntegerField(blank=False)
    customer_address= models.TextField(max_length=50)
    hide_button= models.BooleanField(default=False)
    class Meta:
        ordering = ['-id']
    def serilazer(self):
        return {'cu_Name':self.customer_Name,'cu_number':self.customer_number,'cu_address':self.customer_address}
    def set_hide(self,value):
        self.hide_button=value
        return self.hide_button
        
        
