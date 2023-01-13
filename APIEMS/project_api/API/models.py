from django.db import models

# Create your models here.

class Employee(models.Model):
    first_name = models.CharField(max_length=66, null=False)
    last_name = models.CharField(max_length=65)
    role = models.CharField(max_length=99)
    dept = models.CharField(max_length=99)
    salary = models.IntegerField(default=0)
    

