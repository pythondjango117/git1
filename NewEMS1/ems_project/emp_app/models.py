from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from .validators import validate_file_extension

# Create your models here.

class Employee(models.Model):
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100)
    dpt = [
        ('Python Development','Python Development'),
        ('Java Development', 'Java Development'),
        ('DonNet Development','DonNet Development'),
        ('MERN Developer','MERN Developer'),
        ('Php Developement', 'Php Development'),
        ('ML Engineer', 'ML Engineer'),
        ('AI Engineer','AI Engineer'),
        ('AWS', 'AWS')
    ]
    dept = models.CharField(max_length=100, choices=dpt)
    rl =[
        ('Python Developer','Python Developer'),
        ('Java Developer', 'Java Developer'),
        ('DonNet Developer','DonNet Developer'),
        ('MERN Developer','MERN Developer'),
        ('Php Developer', 'Php Developer'),
        ('Data Sciencetist', 'Data Sciencetist'),
        ('AI Engineer','AI Engineer'),
        ('Cloud Engineer', 'Cloud Engineer')
    ]
    role = models.CharField(max_length=100, choices=rl)
    salary = models.IntegerField(default=0)
    bonus = models.IntegerField(default=0)
    phone = PhoneNumberField()
    pdf = models.FileField(upload_to ='media/' ,validators=[validate_file_extension],  default=0)
    Date_of_joining = models.DateField()